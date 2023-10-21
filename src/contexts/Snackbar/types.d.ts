export type SnackbarContextData = {
  dispatchSnackbar: (args: Pick<SnackbarProps, 'type' | 'message'>) => void;
};

export type SnackbarProps = {
  type: 'error' | 'success' | 'warn';
  message?: string;
  timestamp: Date;
};

export type SnackbarData = Pick<SnackbarProps, 'message' | 'type'>;
