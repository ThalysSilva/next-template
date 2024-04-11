import { useEffect, useState } from 'react';

import { useBreakpointValue } from '@chakra-ui/react';
import colors from '@/styles/Theme/colors';

type Props = {
  show?: boolean;
};

export function useDefaultModal({ show }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [activeEffects, setActiveEffects] = useState<boolean>(false);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  useEffect(() => {
    if (show) {
      setIsOpen(show);
      const timeout = setTimeout(() => {
        setActiveEffects(show);
      }, 10);
      return () => clearTimeout(timeout);
    }
    setActiveEffects(!!show);
    const timeout = setTimeout(() => {
      setIsOpen(!!show);
    }, 200);

    return () => clearTimeout(timeout);
  }, [show]);

  const { light } = colors.text;

  return { isWideVersion, light, isOpen, activeEffects };
}
