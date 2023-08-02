import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';
import { accordionAnatomy as parts } from '@chakra-ui/anatomy';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const outline = definePartsStyle(() => {
  return {
    container: {
      borderRadius: 'xl',
      padding: '0px',
    },
    button: {
      color: 'gray.500',
      border: '1px solid',
      borderRadius: 'xl',
      borderColor: 'neutral.400',
      padding: ['20px 20px', '20px 20px', '20px 40px', '20px 40px'],
      _hover: {
        color: 'gray.600',
      },
      _focus: {
        color: 'blue.500',
      },
      _expanded: {
        borderBottomRadius: '0px',
        borderBottomWidth: '0px',
        borderColor: 'brand.primaryLight',
      },
    },
    panel: {
      color: 'text.primary',
      borderWidth: '0px 1px 1px',
      borderBottomRadius: 'xl',
      borderColor: 'brand.primaryLight',
      padding: [
        '0px 20px 20px 20px',
        '0px 20px 20px 20px',
        '0px 40px 20px 40px',
        '0px 40px 20px 40px',
      ],
    },
  };
});

const variants = {
  outline,
};

const baseStyle = definePartsStyle({
  container: defineStyle({
    boxShadow: 'sm',
    _focus: {
      boxShadow: 'outline',
    },
  }),
});

export const accordionTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
});
