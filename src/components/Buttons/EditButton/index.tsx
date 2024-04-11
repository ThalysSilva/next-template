import React from 'react';

import LockCloseIcon from '@/assets/icons/LockClose';
import LockOpenIcon from '@/assets/icons/LockOpen';
import { Button, ButtonProps } from '../../Button';
import { Spinner } from '@chakra-ui/react';
import { twMerge } from 'tailwind-merge';
import { Text4 } from '../../Texts';
import { When } from '../../When';

type Props = ButtonProps & {
  onSaveEdit: () => void;
  isEditable: boolean;
};

export function EditButton({
  type = 'button',
  className = '',
  isEditable,
  onSaveEdit,
  isLoading,
  onClick,
  ...rest
}: Props) {
  function handleEditable() {
    if (isEditable) onSaveEdit();
  }

  function handleClick() {
    onClick?.();
    handleEditable();
  }

  return (
    <Button
      className={twMerge('w-full gap-2 ' + className)}
      onClick={handleClick}
      isDisabled={isLoading}
      type={type}
      {...rest}
    >
      <When value={isLoading}>
        <>
          <span className="font-normal text-lg text-inherit leading-6">{`Carregando`}</span>
          <Spinner />
        </>
      </When>
      <When value={!isLoading}>
        <When
          value={isEditable}
          render={
            <>
              <LockOpenIcon />
              <Text4 className="font-bold xl:text-base">{'Salvar Edição'}</Text4>
            </>
          }
          elseRender={
            <>
              <LockCloseIcon />
              <Text4 className="font-bold xl:text-base">{'Editar'}</Text4>
            </>
          }
        />
      </When>
    </Button>
  );
}
