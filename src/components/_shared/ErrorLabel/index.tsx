import React from 'react';

import { When } from '../When';

export type Props = {
  messageError?: string;
};

export function ErrorLabel({ messageError }: Props) {
  return (
    <When value={messageError}>
      <div
        data-testid={'messageValidation'}
        className={'flex flex-row gap-2 items-center pl-4 h-max mt-2'}
      >
        <label className={'text-alerts-red font-light text-xs leading-4'}>{messageError}</label>
      </div>
    </When>
  );
}
