import { common, red, amber } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material';

export const MARKETPLACE_APP_PRIMARY_COLOR = amber[800];
export const MARKETPLACE_APP_ICON_COLOR = common.white;
export const MARKETPLACE_APP_TEXT_COLOR = common.black;

const theme: ThemeOptions = {
  palette: {
    primary: {
      main: MARKETPLACE_APP_PRIMARY_COLOR,
      dark: amber[800],
      light: amber[800],
      contrastText: MARKETPLACE_APP_TEXT_COLOR,
    },
  },
};

export default theme;
