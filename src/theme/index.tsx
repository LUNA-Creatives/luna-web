import { ReactNode } from 'react';

import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  responsiveFontSizes,
} from '@material-ui/core';
import { StyledEngineProvider } from '@mui/material';

import GlobalStyles from './globalStyles';

let theme = createTheme({
  palette: {
    primary: {
      contrastText: '#ffffff',
      light: '#f4f4f4',
      main: '#a9a9a9',
      dark: '#171717',
    },
    secondary: {
      light: '#67F89D',
      main: '#6CCFF6',
      dark: '#798DF7',
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
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
