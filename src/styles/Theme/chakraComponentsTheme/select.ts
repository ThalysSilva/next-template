import { selectAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  selectAnatomy.keys,
);

const outline = definePartsStyle({
  field: {
    borderColor: 'borderColor.light',
    color: 'text.text.light',
    borderRadius: 6,
    focusBorderColor: 'borderColor.light',
  },
});

const filled = definePartsStyle({
  field: {
    _readOnly: {
      borderColor: 'borderColor.light',
      backgroundColor: 'neutral.100',
      color: 'text.text.light',
      fontWeight: 'semibold',
    },
    _active: {
      borderColor: 'borderColor.light',
      backgroundColor: 'neutral.100',
    },
    _focus: { borderColor: 'borderColor.light', backgroundColor: 'neutral.100' },
  },
});

export const selectTheme = defineMultiStyleConfig({
  variants: {
    outline,
    filled,
  },
});
