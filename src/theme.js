import { createTheme } from '@mui/material';
import { orange, purple, yellow } from '@mui/material/colors';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      cb: 700,
      md: 900,
      lg: 1200,
      xl: 1320,
      xxl: 1536,
    },
  },

  typography: {
    fontFamily: [
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      '"Open Sans"',
      '"Helvetica Neue"',
      'sans-serif',
    ].join(','),
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'normal',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {},
    },
    MuiTypography: {
      variants: [
        {
          props: { color: 'portfolioOrange' },
          style: {
            color: orange[400],
          },
        },
      ],
    },
  },
  palette: {
    portfolioYellow: {
      main: yellow[700],
      contrastText: 'inherit',
    },
    portfolioOrange: {
      main: orange[400],
      contrastText: 'inherit',
    },
    portfolioPurple: {
      main: purple[800],
      contrastText: '#fff',
    },
  },
});

export default theme;
