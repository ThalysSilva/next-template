'use client';

import React from 'react';

import { RegisterOptions } from 'react-hook-form';
import { useInputFile } from './hooks/useInputFile';
import { twMerge } from 'tailwind-merge';
import { Button } from '../../Button';
import { Input } from '../../Input';
import { When } from '../../When';

type Props = {
  onSetFile?: (file?: File) => void;
  changeTitleToPhotoName?: boolean;
  rightIcon?: React.ReactNode;
  withoutControl?: boolean;
  rules?: RegisterOptions;
  className?: string;
  accept?: string;
  text?: string;
  id?: string;
  buttonClassName?:string;
};

export function InputFile({
  text = 'Escolher foto',
  changeTitleToPhotoName,
  withoutControl = false,
  className = '',
  onSetFile,
  rightIcon,
  accept,
  rules,
  id,
  buttonClassName
}: Props) {
  const { ref: customRef, onClick, file, onChange } = useInputFile({ onSetFile });

  return (
    <div
      className={twMerge([
        'flex gap-4 w-full items-center bg-backgroundCart-primary rounded-lg',
        className,
      ])}
    >
      <Input
        withoutControl={withoutControl}
        containerClassName="hidden"
        customRef={customRef}
        onChange={onChange}
        accept={accept}
        rules={rules}
        type="file"
        id={id}
      />
      <Button className={twMerge([
        'w-full',
        buttonClassName,
      ])} type={'button'} onClick={onClick}>
        <When
          value={changeTitleToPhotoName}
          render={file?.name ? file?.name : text}
          elseRender={text}
        />
        <When value={!!rightIcon} render={rightIcon} />
      </Button>
    </div>
  );
}
