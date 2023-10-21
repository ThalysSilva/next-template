import { MutableRefObject, useRef } from 'react';

type Props = {
  onKeyDownProp?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  customRef?: React.LegacyRef<HTMLTextAreaElement>;
  preventEnterSubmit: boolean;
};

export function useTextArea({ customRef, preventEnterSubmit, onKeyDownProp }: Props) {
  const defaultRef = useRef<HTMLTextAreaElement | null>(null);

  function onKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (preventEnterSubmit && event.key === 'Enter') {
      event.preventDefault();
      onKeyDownProp?.(event);
    }
  }

  const textAreaRef = (customRef || defaultRef) as MutableRefObject<HTMLTextAreaElement | null>;

  return { textAreaRef, onKeyDown };
}
