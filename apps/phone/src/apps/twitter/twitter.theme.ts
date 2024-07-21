import { common } from '@mui/material/colors';

export const TWITTER_APP_PRIMARY_COLOR = '#FF8F00';
export const TWITTER_APP_TEXT_COLOR = common.white;

const theme = {
  palette: {
    primary: {
      main: TWITTER_APP_PRIMARY_COLOR,
      dark: '#FF8F00',
      light: '#FF8F00',
      contrastText: TWITTER_APP_TEXT_COLOR,
    },
    secondary: {
      main: '#999',
    },
  },
};

export default theme;
