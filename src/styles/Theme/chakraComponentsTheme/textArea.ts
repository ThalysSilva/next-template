import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const outline = defineStyle({
  borderColor: 'borderColor.primary',
  color: 'text.primary',
  borderRadius: 6,
  padding: 4,
  focusBorderColor: 'borderColor.primary',
});

export const textAreaTheme = defineStyleConfig({
  defaultProps: {
    variant: 'outline',
  } as any,
  variants: {
    outline,
  },
});
