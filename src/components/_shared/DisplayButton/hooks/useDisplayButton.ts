import colors from '@/styles/Theme/colors';
import { useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';
import { useButton } from '../../Button/hooks/useButton';

export function useDisplayButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { light: lightColor } = colors.text;

  const { getAnimation } = useButton();

  function handleClose() {
    setIsOpen(false);
  }

  function toggleIsOpen() {
    setIsOpen((prev) => !prev);
  }

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return { isOpen, handleClose, toggleIsOpen, isWideVersion, lightColor, getAnimation };
}
