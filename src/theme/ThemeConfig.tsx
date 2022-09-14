import { ReactNode } from 'react';

import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

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
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
