import { grey, common, green, amber } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material';

export const DARKCHAT_APP_PRIMARY_COLOR = amber[800];
export const DARKCHAT_APP_TEXT_COLOR = common.white;
export const DARKCHAT_APP_SECONDARY_COLOR = amber[800];

const theme: ThemeOptions = {
  palette: {
    primary: {
      main: DARKCHAT_APP_PRIMARY_COLOR,
      dark: amber[800],
      light: amber[800],
      contrastText: DARKCHAT_APP_TEXT_COLOR,
    },
    secondary: {
      main: DARKCHAT_APP_SECONDARY_COLOR,
    },
  },
};

export default theme;
