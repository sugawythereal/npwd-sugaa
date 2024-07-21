import { amber, common } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material';

export const MESSAGES_APP_PRIMARY_COLOR = "#FF8F00";
export const MESSAGES_APP_TEXT_COLOR = common.white;

const theme: ThemeOptions = {
  palette: {
    primary: {
      main: MESSAGES_APP_PRIMARY_COLOR,
      dark: amber[800],
      light: amber[800],
      contrastText: MESSAGES_APP_TEXT_COLOR,
    },
  },
};

export default theme;
