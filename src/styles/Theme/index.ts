import { extendTheme, ThemeOverride } from '@chakra-ui/react';
import * as colors from './colors';
import { inputTheme } from './chakraComponentsTheme/input';
import { ButtonChakraTheme } from './chakraComponentsTheme/button';
import { accordionTheme } from './chakraComponentsTheme/accordion';
import { textAreaTheme } from './chakraComponentsTheme/textArea';
import { switchTheme } from './chakraComponentsTheme/switch';

export const config: ThemeOverride = {
  fonts: {
    heading: 'Titillium Web',
    body: 'Titillium Web',
  },
  styles: {
    global: {
      body: {
        color: 'text.primary',
      },
      html: {
        scrollBehavior: 'smooth',
      },
    },
  },
  colors: colors,
  components: {
    Button: ButtonChakraTheme,
    Input: inputTheme,
    Accordion: accordionTheme,
    Textarea: textAreaTheme,
    InputGroup: {
      baseStyle: {
        borderColor: 'brand.secondary',
      },
    },
    Switch: switchTheme
  },
  breakpoints: {
    xs: '475px',
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  },
};

export const theme = extendTheme(config);
