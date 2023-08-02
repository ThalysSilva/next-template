import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  switchAnatomy.keys,
);

const greenRed = definePartsStyle({
  track: {
    bg: 'red.500',
    _checked: {
      bg: 'green.500',
    },
  },
});

export const switchTheme = defineMultiStyleConfig({ 
  variants: {
    greenRed,
  },    
});
