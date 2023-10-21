import { MutableRefObject, useRef } from 'react';

type Props = {
  customRef?: React.LegacyRef<HTMLInputElement>;
};

export function useSlider({ customRef }: Props) {
  const defaultRef = useRef<HTMLInputElement | null>(null);

  const switchRef = (customRef || defaultRef) as MutableRefObject<HTMLInputElement | null>;

  return { switchRef };
}
