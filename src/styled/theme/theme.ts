import { DefaultTheme } from 'styled-components';

export default <DefaultTheme>{
  color: {
    primary: (opacity = 1) => `rgba(72, 63, 221, ${opacity})`,
    secondary: (opacity = 1) => `rgba(239, 241, 255, ${opacity})`,
    white: (opacity = 1) => `rgba(256, 256, 256, ${opacity})`,
    dark: (opacity = 1) => `rgba(21, 29, 81, ${opacity})`,
    turquoise: (opacity = 1) => `rgba(92, 214, 192, ${opacity})`,
    purple: (opacity = 1) => `rgba(61, 49, 124, ${opacity})`,
  },
  fonts: {
    main: 'Lucida Sans',
  },
};
