import React, { createContext, CSSProperties, ReactNode, useContext, useState } from 'react';

import { ConfigsContextData, HeaderConfig, SetBackButtonProps } from './types';
import { useRouter } from 'next/navigation';

type ConfigsProviderProps = {
  children: ReactNode;
};

export const ConfigsContext = createContext({} as ConfigsContextData);

export function ConfigsProvider({ children }: ConfigsProviderProps) {
  const { back, push } = useRouter();

  const [backButtonAction, setBackButtonAction] = useState<() => void>(() => () => back());
  const [logoClickAction, setLogoClickAction] = useState<() => void>(() => () => push('/'));
  const [hasBackButton, setHasBackButton] = useState<boolean>(false);
  const [manualBackButtonOnDesktop, setManualBackButtonOnDesktop] = useState<boolean>(false);
  const [showBackButtonOnDesktop, setShowBackButtonOnDesktop] = useState<boolean>(false);
  const [hideHeaderNavigation, setHideHeaderNavigation] = useState<boolean>(false);
  const [showStepIndicator, setShowStepIndicator] = useState(true);
  const [currentBackground, setCurrentBackground] = useState<any>(undefined);
  const [styleBackground, setStyleBackground] = useState<CSSProperties>({});

  function setBackButton({ showBackButton, customBackButtonAction }: SetBackButtonProps) {
    setHasBackButton(showBackButton);
    if (customBackButtonAction) {
      setBackButtonAction(() => customBackButtonAction);
    } else {
      setBackButtonAction(() => back);
    }
  }

  function resetBackButton() {
    setHasBackButton(false);
    setBackButtonAction(() => back);
  }

  function setLogoClick(customLogoClickAction: () => void) {
    setLogoClickAction(() => customLogoClickAction);
  }

  function resetLogoClick() {
    setLogoClickAction(() => ()=> push('/'));
  }

  const headerConfig = {
    backButtonAction,
    resetBackButton,
    hasBackButton,
    setHasBackButton,
    setBackButton,
    setManualBackButtonOnDesktop,
    manualBackButtonOnDesktop,
    setShowBackButtonOnDesktop,
    showBackButtonOnDesktop,
    hideHeaderNavigation,
    setHideHeaderNavigation,
    logoClickAction,
    setLogoClick,
    resetLogoClick,
  } as HeaderConfig;

  const stepIndicatorConfig = {
    showStepIndicator,
    setShowStepIndicator,
  };

  const backgroundImageConfig = {
    currentBackground,
    setCurrentBackground,
    setStyleBackground,
    styleBackground,
  };

  return (
    <ConfigsContext.Provider
      value={{
        backgroundImage: backgroundImageConfig,
        stepIndicator: stepIndicatorConfig,
        header: headerConfig,
      }}
    >
      {children}
    </ConfigsContext.Provider>
  );
}

export const useConfigsContext = () => useContext(ConfigsContext);
