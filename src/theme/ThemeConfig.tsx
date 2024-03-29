import { ReactNode } from 'react';

import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import ComponentsOverrides from './overrides';

const FONT_PRIMARY = ['futura-pt', 'sans-serif'].join(',');
const FONT_SECONDARY = ['minion-pro', 'serif'].join(',');

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
    h2: {
      fontWeight: 500,
      fontSize: 40,
      '@media (max-width:1024px)': {
        fontSize: 32,
      },
    },
    h3: {
      fontWeight: 500,
      fontSize: 40,
      '@media (max-width:1024px)': {
        fontSize: 24,
      },
    },
    h5: {
      fontSize: 24,
      '@media (max-width:1024px)': {
        fontSize: 18,
      },
    },
    h6: {
      lineHeight: 1.5,
      fontSize: 24,
      '@media (max-width:1024px)': {
        fontSize: 16,
      },
    },
    body1: {
      fontFamily: FONT_SECONDARY,
      lineHeight: 1.5,
      fontSize: 24,
      '@media (max-width:1024px)': {
        fontSize: 16,
      },
    },
    body2: {
      fontFamily: FONT_SECONDARY,
      fontSize: 18,
      '@media (max-width:1024px)': {
        fontSize: 14,
      },
    },
    subtitle1: {
      letterSpacing: ' 0.19em',
      fontFamily: FONT_PRIMARY,
      lineHeight: 2.1,
      fontSize: 18,
      '@media (max-width:1024px)': {
        fontSize: 12,
      },
    },
    subtitle2: {
      fontFamily: FONT_PRIMARY,
      lineHeight: 2.1,
      fontSize: 12,
    },
  },
  palette: {
    background: {
      default: '#171717',
    },
    primary: {
      light: '#6CCFF6',
      main: '#F0F9FE',
      dark: '#171717',
    },
    secondary: {
      light: '#FCEAE4',
      main: '#6CCFF6',
      dark: '#F7E584',
    },
  },
});

theme = responsiveFontSizes(theme);

theme.components = ComponentsOverrides();

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
