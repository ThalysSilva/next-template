import { MutableRefObject, useRef } from 'react';

type Props = {
  customRef?: React.LegacyRef<HTMLInputElement>;
};

export function useRadioGroup({ customRef }: Props) {
  const defaultRef = useRef<HTMLInputElement | null>(null);

  const radioGroupRef = (customRef || defaultRef) as MutableRefObject<HTMLInputElement | null>;

  return { radioGroupRef };
}
