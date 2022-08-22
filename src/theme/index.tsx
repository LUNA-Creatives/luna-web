import { ReactNode } from 'react';

import { createTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
import { StyledEngineProvider } from '@mui/material';

import GlobalStyles from './globalStyles';

const theme = createTheme({
  typography: {
    fontFamily: ['hero-new', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      light: '#67F89D',
      main: '#6CCFF6',
      dark: '#798DF7',
    },
  },
});

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
