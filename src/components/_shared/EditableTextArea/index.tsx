'use client';

import React from 'react';
import { When } from '../When';
import { TextArea } from '../TextArea';
import { useFormContext } from 'react-hook-form';

type Props = {
  id: string;
  isEditable: boolean;
  defaultValue?: string;
};

export function EditableTextArea({ id, isEditable, defaultValue }: Props) {
  const { watch } = useFormContext();

  const answer = watch(id);
  return (
    <When
      value={isEditable}
      render={<TextArea  id={id} defaultValue={defaultValue} />}
      elseRender={<p className="p-4 bg-background-blueLight rounded-md ">{answer || defaultValue}</p>}
    />
  );
}
