'use client';

import React from 'react';

import { SnackbarProps } from '../../../contexts/Snackbar/types';
import { useSnackbarMessage } from './hooks/useSnackbarMessage';
import { CloseIcon } from '@chakra-ui/icons';
import { Text } from '@chakra-ui/react';


type Props = {
  snackbar: SnackbarProps;
  deleteSnackbar: () => void;
};

export const SnackbarMessage = ({ deleteSnackbar, snackbar }: Props) => {
  const { handleDeleteSnackbar, show } = useSnackbarMessage({ deleteSnackbar, snackbar });
  const { message, type } = snackbar;

  const colorSnackbar = {
    error: 'bg-alerts-red',
    success: 'bg-alerts-green',
    warn: 'bg-alerts-orange',
  };

  return (
    <div
      className={`${colorSnackbar[type]}
            transition-opacity duration-200 animate-fadeInAnimation ${
              show ? 'opacity-1' : 'opacity-0'
            }
            flex justify-between items-center absolute pointer-events-auto overflow-hidden
            px-5 py-3 w-[400px] rounded-xl bg-no-repeat z-[9999]`}
      style={{ boxShadow: '0 0 10px #00000084' }}
      data-testid={'snackbarMessage-' + type}
    >
      <div />
      <div className="flex flex-1 mr-5">
        <Text className={'2xl:leading-5 text-center w-full text-white'}>
          {message}
        </Text>
      </div>
      <span
        data-testid={'closeIcon'}
        className={
          'flex cursor-pointer rounded-xl w-fit h-fit transform hover:scale-125 active:scale-90'
        }
        onClick={handleDeleteSnackbar}
      >
        <CloseIcon color={'white'} height="10" width="10" />
      </span>
    </div>
  );
};
