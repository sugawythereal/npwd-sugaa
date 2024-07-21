import { common, yellow, amber } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material';

export const NOTES_APP_PRIMARY_COLOR = amber[800];
export const NOTES_APP_ICON_COLOR = common.white;
export const NOTES_APP_TEXT_COLOR = common.white;

const theme: ThemeOptions = {
  palette: {
    primary: {
      main: NOTES_APP_PRIMARY_COLOR,
      dark: amber[800],
      light: amber[800],
      contrastText: NOTES_APP_TEXT_COLOR,
    },
  },
};

export default theme;
