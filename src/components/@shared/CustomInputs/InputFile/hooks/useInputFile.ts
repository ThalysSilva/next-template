import { useEffect, useRef, useState } from 'react';
type Props = {
  onSetFile?: (file?: File) => void;
};
export function useInputFile({ onSetFile }: Props) {
  const [file, setFile] = useState<File>();
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!file) return;
    onSetFile?.(file);
  }, [file]);

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputFile = event.target as HTMLInputElement;
    if (!inputFile.files) return setFile(undefined);
    setFile(inputFile.files[0]);
  }

  function onClick() {
    if (!ref.current) return;
    ref.current.click();
  }

  return { ref, onClick, file, onChange };
}
