export type StepIndicatorContextData = {
  setShowStepIndicator: (show: boolean) => void;
  setCurrentStep: (step: number) => void;
  showStepIndicator: boolean;
  nextStep: () => void;
  currentStep: number;
};
