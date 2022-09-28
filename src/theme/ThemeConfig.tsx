import { ReactNode } from 'react';

import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

const FONT_PRIMARY = ['futura-pt', 'sans-serif'].join(',');
const FONT_SECONDARY = ['playfair-display', 'serif'].join(',');

let theme = createTheme({
  typography: {
    fontFamily: FONT_PRIMARY,
    h1: {
      fontWeight: 500,
      fontSize: 64,
      '@media (max-width:1024px)': {
        fontSize: 32,
      },
    },
    h5: {
      fontSize: 18,
      '@media (max-width:1024px)': {
        fontSize: 14,
      },
    },
    body1: {
      fontFamily: FONT_SECONDARY,
      lineHeight: 2.1,
      fontSize: 24,
      '@media (max-width:1024px)': {
        fontSize: 16,
      },
    },
    body2: {
      fontFamily: FONT_SECONDARY,
      lineHeight: 2.1,
      fontSize: 18,
      '@media (max-width:1024px)': {
        fontSize: 12,
      },
    },
  },
  palette: {
    primary: {
      contrastText: '#ffffff',
      light: '#6CCFF6',
      main: '#F0F9FE',
      dark: '#171717',
    },
    secondary: {
      light: '#B85D69',
      main: '#EBCDC3',
      dark: '#6E9075',
    },
  },
});

theme = responsiveFontSizes(theme);

type ThemeConfigProps = {
  children: ReactNode;
};

export const ThemeConfig = ({ children }: ThemeConfigProps) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
