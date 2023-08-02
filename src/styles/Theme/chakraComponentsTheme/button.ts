import { defineStyleConfig } from '@chakra-ui/react';

export const ButtonChakraTheme = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    color: 'brand.primary',
    fontWeight: 'bold',
    borderRadius: '3xl', // <-- border radius is same for all variants and sizes
    bg: 'brand.secondary',
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: 'md',
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'brand.secondary',
      color: 'brand.secondary',
      bgColor: 'brand.primary',
      _hover: {
        bg: 'brand.secondary',
        color: 'brand.primary',
      },
      _active: {
        bg: 'brand.secondary',
        color: 'brand.primary',
        opacity: 0.9,
      },
    },
    solid: {
      color: 'brand.primary',
      fontWeight: 'bold',
      borderRadius: '3xl', // <-- border radius is same for all variants and sizes
      bg: 'brand.secondary',
      _hover: {
        opacity: 0.8,
        bg: 'brand.secondary',
        color: 'brand.primary',
      },
      _active: {
        opacity: 1,
        bg: 'brand.secondary',
        color: 'brand.primary',
      },
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
});
