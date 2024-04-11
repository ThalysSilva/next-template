import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  inputAnatomy.keys,
);

const flushed = definePartsStyle({
  field: {
    borderBottomWidth: 2,
    borderColor: 'brand.secondaryLight',
    color: 'text.primary',
    focusBorderColor: 'brand.secondaryLight',
    _focus: {
      borderColor: 'brand.secondaryLight',
      boxShadow:
        '0 4px 4px -4px var(--chakra-colors-brand-secondaryLight),  inset 0 -6px 4px -7px var(--chakra-colors-brand-secondaryLight)',
    },
  },
});

const outline = definePartsStyle({
  field: {
    borderColor: 'borderColor.secondaryLight',
    color: 'text.text.light',
    borderRadius: 8,
    borderWidth: 1,
    focusBorderColor: 'borderColor.secondaryLight',
    _focus: {
      borderColor: 'borderColor.secondary',
      boxShadow: '0 0 0 1px var(--chakra-colors-borderColor-secondaryLight)',
    },
    _active: { borderColor: 'borderColor.secondaryLight' },
    _hover: { borderColor: 'borderColor.secondaryLight' },
    _focusVisible: { outline: 'none' },
  },
});

const filled = definePartsStyle({
  field: {
    _readOnly: {
      borderColor: 'borderColor.light',
      backgroundColor: 'neutral.100',
    },
    _active: {
      borderColor: 'borderColor.light',
      backgroundColor: 'neutral.100',
    },
    _focus: { borderColor: 'borderColor.light', backgroundColor: 'neutral.100' },
  },
});

export const inputTheme = defineMultiStyleConfig({
  defaultProps: {
    variant: 'flushed',
  } as any,
  variants: {
    flushed,
    outline,
    filled,
  },
});
