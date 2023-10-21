import { MutableRefObject, useRef, useState } from 'react';

type Props = {
  onKeyDownProp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  customRef?: React.LegacyRef<HTMLInputElement>;
  preventEnterSubmit: boolean;
};

export function useInput({ customRef, preventEnterSubmit, onKeyDownProp }: Props) {
  const defaultRef = useRef<HTMLInputElement | null>(null);
  const [inputFileValue, setInputFileValue] = useState('' as string);

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (preventEnterSubmit && event.key === 'Enter') {
      event.preventDefault();
      onKeyDownProp?.(event);
    }
  }

  const inputRef = (customRef || defaultRef) as MutableRefObject<HTMLInputElement | null>;

  return { inputRef, onKeyDown, inputFileValue, setInputFileValue };
}
