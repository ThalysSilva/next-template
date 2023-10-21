import { useEffect, useState } from 'react';

type Props = {
  show: boolean;
};

export function useSideMenuMobile({ show }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeEffects, setActiveEffects] = useState<boolean>(false);

  useEffect(() => {
    if (show) {
      setIsOpen(show);
      const interval = setInterval(() => {
        setActiveEffects(show);
      }, 10);
      return () => clearInterval(interval);
    }
    setActiveEffects(show);
    const interval = setInterval(() => {
      setIsOpen(show);
    }, 200);

    return () => clearInterval(interval);
  }, [show]);

  return { isOpen, activeEffects };
}
