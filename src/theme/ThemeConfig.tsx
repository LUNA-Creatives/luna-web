import { ReactNode } from 'react';

import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  responsiveFontSizes,
} from '@material-ui/core';
import { StyledEngineProvider } from '@mui/material';

// import GlobalStyles from './globalStyles';

const FONT_PRIMARY = ['futura-pt', 'sans-serif'].join(',');

let theme = createTheme({
  typography: {
    fontFamily: FONT_PRIMARY,
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
        {/* <GlobalStyles /> */}
        <CssBaseline />

        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
