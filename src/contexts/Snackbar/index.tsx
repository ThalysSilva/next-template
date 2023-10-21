import React, { createContext, ReactNode, useContext, useState } from 'react';
import { SnackbarProps, SnackbarData, SnackbarContextData } from './types';
import { doNothing } from '../../utils/functions/general';
import { When } from '@/components/_shared/When';
import { SnackbarMessage } from '@/components/_shared/SnackbarMessage';

export const SnackbarContext = createContext({
  dispatchSnackbar: doNothing,
} as SnackbarContextData);

const styleSnackbarContainer = { top: '24px', left: 'calc(50% - (400px / 2))' };

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [snackbar, setSnackbar] = useState<SnackbarProps>({} as SnackbarProps);

  const addSnackbar = ({ type = 'error', message }: SnackbarData) => {
    setSnackbar({
      type: type,
      message: message,
      timestamp: new Date(),
    });
  };

  const deleteSnackbar = () => {
    setTimeout(() => setSnackbar({} as SnackbarProps), 200);
  };

  return (
    <SnackbarContext.Provider
      value={{
        dispatchSnackbar: addSnackbar,
      }}
    >
      <When value={snackbar.message}>
        <div style={{ ...styleSnackbarContainer, position: 'fixed', zIndex: 9998 }}>
          <SnackbarMessage snackbar={snackbar} deleteSnackbar={deleteSnackbar} />
        </div>
      </When>
      {children}
    </SnackbarContext.Provider>
  );
};

export const useSnackbarContext = () => {
  return useContext(SnackbarContext);
};
