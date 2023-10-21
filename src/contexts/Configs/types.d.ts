import { CSSProperties } from 'react';

export type ConfigsContextData = {
  header: HeaderConfig;
  stepIndicator: StepIndicatorConfig;
  backgroundImage: BackgroundConfig;
};

export type SetBackButtonProps = {
  customBackButtonAction?: () => void;
  showBackButton: boolean;
};

export type HeaderConfig = {
  setManualBackButtonOnDesktop: (isManual: boolean) => void;
  manualBackButtonOnDesktop: boolean;
  setShowBackButtonOnDesktop: (hasBackButton: boolean) => void;
  showBackButtonOnDesktop: boolean;
  setBackButton: (props: SetBackButtonProps) => void;
  customBackButtonAction?: () => void;
  backButtonAction: () => void;
  setHasBackButton: (hasBackButton: boolean) => void;
  resetBackButton: () => void;
  hasBackButton: boolean;
  hideHeaderNavigation: boolean;
  setHideHeaderNavigation: (hideHeaderNavigation: boolean) => void;
  logoClickAction: () => void;
  setLogoClick: (logoClickAction: () => void) => void;
  resetLogoClick: () => void;
};

export type StepIndicatorConfig = {
  showStepIndicator: boolean;
  setShowStepIndicator: (show: boolean) => void;
};

export type BackgroundConfig = {
  currentBackground: any;
  setCurrentBackground: (background: any) => void;
  styleBackground: CSSProperties;
  setStyleBackground: (style: CSSProperties) => void;
};
