import React, { createContext, ReactNode, useContext, useState } from 'react';

import { StepIndicatorContextData } from './types';

type StepIndicatorProviderProps = {
  children: ReactNode;
};

export const StepIndicatorContext = createContext({} as StepIndicatorContextData);

export function StepIndicatorProvider({ children }: StepIndicatorProviderProps) {
  const [showStepIndicator, setShowStepIndicator] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);

  function nextStep() {
    setCurrentStep((prev) => prev + 1);
  }

  return (
    <StepIndicatorContext.Provider
      value={{
        setShowStepIndicator,
        showStepIndicator,
        setCurrentStep,
        currentStep,
        nextStep,
      }}
    >
      {children}
    </StepIndicatorContext.Provider>
  );
}

export const useStepIndicatorContext = () => useContext(StepIndicatorContext);
