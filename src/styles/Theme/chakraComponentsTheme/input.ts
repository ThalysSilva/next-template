import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  inputAnatomy.keys,
);

const flushed = definePartsStyle({
  field: {
    borderBottomWidth: 2,
    borderColor: 'brand.secondary',
    color: 'text.primary',
    focusBorderColor: 'brand.secondary',
  },
});

const outline = definePartsStyle({
  field: {
    borderColor: 'borderColor.light',
    color: 'text.text.light',
    borderRadius: 6,
    focusBorderColor: 'borderColor.light',
  },
});

export const inputTheme = defineMultiStyleConfig({
  defaultProps: {
    variant: 'flushed',
  } as any,
  variants: {
    flushed,
    outline,
  },
});
