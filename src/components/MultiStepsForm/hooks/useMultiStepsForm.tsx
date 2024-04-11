import { ReactNode, useEffect, useState } from 'react';

import { useConfigsContext } from '@/contexts/Configs';
import { MultiStepsFormObject, StepFormObject } from '../types';
import { useSecureUtils } from '@/hooks/useSecureUtils';

type Props<T extends string> = {
  multiStepsFormObject: MultiStepsFormObject<T>;
  onFinalSubmit?: (data: any) => void | Promise<{ isSuccess: boolean } | void>;
  initialBackButton?: () => void;
  onNextStep?: (data: any, stepValue: any, currentStepKey: string) => void;
  secureHashStore?: string;
  persistData?: boolean;
  stepsOrder?: T[];
  initialStep: T;
  initialData?: any;
  formName?: string;
};

export function useMultiStepsForm<T extends string>({
  stepsOrder: stepsOrderProp,
  multiStepsFormObject,
  initialBackButton,
  secureHashStore,
  onFinalSubmit,
  persistData,
  initialData,
  initialStep,
  onNextStep,
  formName,
}: Props<T>) {
  const [currentStepKey, setCurrentStepKey] = useState<T | undefined>();
  const [historySteps, setHistorySteps] = useState<T[]>([]);
  const [Render, setRender] = useState<ReactNode>(null);
  const [formValues, setFormValues] = useState<Record<string, any>>(initialData ?? {});
  const [currentStep, setCurrentStep] = useState<StepFormObject<T> | undefined>(undefined);
  const nextStepKey = currentStep?._depreciated_nextStepKey ?? undefined;
  const { saveEncryptedData, destroyEncryptedData, getEncryptedData, secretKey } = useSecureUtils({
    defaultHash: secureHashStore,
  });

  function getNextStepKey() {
    if (stepsOrderProp) {
      const currentIndex = stepsOrderProp.indexOf(currentStepKey || initialStep);
      if (currentIndex < stepsOrderProp.length - 1) {
        return stepsOrderProp[currentIndex + 1];
      }
      return null;
    }

    return nextStepKey;
  }

  const {
    header: { resetBackButton, setBackButton },
  } = useConfigsContext();

  async function nextStep(data: any, forceGoToStep?: T) {
    if (!currentStepKey) return;
    const nextStepKey = forceGoToStep ?? getNextStepKey();
    const persistDataStore = getEncryptedData(`${formName}-store`);
    const newFormValues = persistDataStore
      ? { ...persistDataStore, ...data }
      : { ...formValues, ...data };

    setFormValues(newFormValues);

    if (!nextStepKey) {
      const result = await onFinalSubmit?.(newFormValues);
      if (!result || result.isSuccess) {
        if (formName) {
          destroyEncryptedData(formName);
          destroyEncryptedData(formName, secretKey);
          destroyEncryptedData(`${formName}-store`);
          destroyEncryptedData(`${formName}-store`, secretKey);
        }
      }
      return;
    }
    if (!stepsOrderProp) setHistorySteps([...historySteps, currentStepKey]);

    if (formName) {
      saveEncryptedData(formName, nextStepKey);

      if (persistData) {
        saveEncryptedData(`${formName}-store`, newFormValues);
      }
    }
    setCurrentStepKey(nextStepKey);
    onNextStep?.(newFormValues, data, currentStepKey);
  }

  async function handleSubmit(dataProp: any) {
    const data = currentStep?.refineDataToSubmit
      ? await currentStep.refineDataToSubmit?.(dataProp)
      : dataProp;

    currentStep?.onSubmit?.(data, { forceGoToStep: async (step) => await nextStep(data, step) });
    if (!currentStep?.disableNextStep) await nextStep(data);
  }

  async function forceGoToStep(step?: T) {
    await nextStep({}, step);
  }

  useEffect(() => {
    function generateBackButtonAction() {
      if (!currentStepKey) return;
      const lastStepKey = stepsOrderProp
        ? stepsOrderProp[stepsOrderProp.indexOf(currentStepKey || initialStep) - 1]
        : historySteps[historySteps.length - 1];

      const newCurrentStep = multiStepsFormObject[currentStepKey];
      const customBackButtonStep = () =>
        newCurrentStep?.customBackButton?.(formValues, { forceGoToStep });
      if (newCurrentStep?.customBackButton) return customBackButtonStep;
      return () => {
        if (!stepsOrderProp) setHistorySteps(historySteps.slice(0, historySteps.length - 1));
        if (formName) saveEncryptedData(formName, lastStepKey);
        setCurrentStepKey(lastStepKey);
      };
    }

    if (stepsOrderProp) {
      const currentIndex = stepsOrderProp.indexOf(currentStepKey || initialStep);
      if (currentIndex === 0) {
        if (initialBackButton)
          return setBackButton({ showBackButton: true, customBackButtonAction: initialBackButton });
        return resetBackButton();
      }
    } else {
      if (!historySteps.length) {
        if (initialBackButton)
          return setBackButton({ showBackButton: true, customBackButtonAction: initialBackButton });
        return resetBackButton();
      }
    }

    const customBackButtonAction = generateBackButtonAction();

    setBackButton({ showBackButton: true, customBackButtonAction });
  }, [currentStepKey]);

  useEffect(() => {
    return () => resetBackButton();
  }, []);

  useEffect(() => {
    if (formName) {
      const initialStepCookie = getEncryptedData(formName);
      setCurrentStepKey(initialStepCookie || initialStep);
      saveEncryptedData(formName, initialStepCookie || initialStep);
      return;
    }
    setCurrentStepKey(initialStep);
  }, [initialStep, formName]);

  useEffect(() => {
    if (!currentStepKey) return;
    if (multiStepsFormObject[currentStepKey]?.onRender)
      multiStepsFormObject[currentStepKey]?.onRender?.(formValues);
  }, [currentStepKey, multiStepsFormObject]);

  useEffect(() => {
    if (!currentStepKey) return;
    function refineData(data: any) {
      if (!currentStepKey) return;
      const refinedData = multiStepsFormObject[currentStepKey]?.refineInitialData?.(data) ?? data;

      return refinedData;
    }
    if (!persistData && initialData) {
      setFormValues(refineData(initialData));
      return;
    }
    if (persistData) {
      const data = getEncryptedData(`${formName}-store`);

      setFormValues(refineData(data));
      return;
    }
    setFormValues(refineData(formValues));
  }, [currentStepKey, initialData, multiStepsFormObject]);

  useEffect(() => {
    if (!currentStepKey) return;
    const newCurrentStep = currentStepKey ? multiStepsFormObject[currentStepKey] : undefined;
    setCurrentStep(newCurrentStep);
  }, [currentStepKey, multiStepsFormObject]);

  useEffect(() => {
    if (!currentStepKey) return;
    if (!currentStep) return;
    if (currentStep.loadDataFromKey) {
      const selectedFormValues = formValues[currentStep.loadDataFromKey] || {};

      const newRender =
        typeof currentStep.render === 'function'
          ? currentStep.render(selectedFormValues, { forceGoToStep })
          : currentStep.render;

      setRender(newRender);
      return;
    }

    const newRender =
      typeof currentStep.render === 'function'
        ? currentStep.render(formValues, { forceGoToStep })
        : currentStep.render;

    setRender(newRender);
  }, [currentStep, formValues]);

  return { handleSubmit, currentStep, currentStepKey, formValues, Render };
}
