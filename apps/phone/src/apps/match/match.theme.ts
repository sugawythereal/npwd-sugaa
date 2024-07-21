import { red, common, amber } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material';

export const MATCH_APP_PRIMARY_COLOR = '#FF8F00';
export const MATCH_APP_TEXT_COLOR = common.white;

const theme: ThemeOptions = {
  palette: {
    primary: {
      main: MATCH_APP_PRIMARY_COLOR,
      dark: amber[800],
      light: amber[800],
      contrastText: MATCH_APP_TEXT_COLOR,
    },
    secondary: {
      main: '#d32f2f',
      light: '#eb4242',
      dark: '#941212',
      contrastText: MATCH_APP_TEXT_COLOR,
    },
    success: {
      main: '#FF8F00',
      contrastText: MATCH_APP_TEXT_COLOR,
    },
  },
};

export default theme;
