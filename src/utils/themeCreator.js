import { createTheme } from '@mui/material/styles';

export const themeOptions = {
    palette: {
        primary: {
            main: '#E9B10A'
        }, 
        secondary: {
            main: '#142241'
        }
    },
    components: {
        MuiLink: {
          styleOverrides: {
            root: {
              color: 'white',
              textDecoration: 'none',
              display: 'flex', // Enables flexbox
              justifyContent: 'center', // Center on main axis
              alignItems: 'center', // Center on cross axis
              cursor: 'pointer',
            },
          },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none'
                }
            }
        }
      },
};

export const theme = createTheme(themeOptions);