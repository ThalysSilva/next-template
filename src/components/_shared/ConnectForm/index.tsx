'use client';

import { useFormContext } from 'react-hook-form';
import { UseFormReturn } from 'react-hook-form';

type Props = {
  children: (methods: UseFormReturn) => JSX.Element;
};

export function ConnectForm({ children }: Props) {
  const methods = useFormContext();

  return children({ ...methods });
}
