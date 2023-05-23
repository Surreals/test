import { createTheme } from "@mui/material/styles";

export const themeOptions = {
  palette: {
    primary: {
      main: "#E9B10A",
    },
    secondary: {
      main: "#142241",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "white",
          textDecoration: "none",
          display: "flex", // Enables flexbox
          justifyContent: "center", // Center on main axis
          alignItems: "center", // Center on cross axis
          cursor: "pointer",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "&:before": {
            content: "none",
          },
          "&:after": {
            content: "none",
          },
        },
        select: {
          color: "white",
        },
        icon: {
          color: "white",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          width: "100%",
          maxWidth: "100% !important",
          position: "absolute",
          left: "0 !important",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        list: {
          paddingLeft: 8,
          paddingRight: 8,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderColor: "#ffffff33",
          "&.MuiMenuItem-root": { color: "#ffffff" },
          // "&.MuiMenuItem-root.Mui-selected": {color: "#E9B10A"},
          "&.MuiMenuItem-root:hover": {
            backgroundColor: "rgba(255, 255, 255, .1)",
            "&:after": {
              content: "''",
              borderRight: "3px solid #E9B10A",
              height: "100%",
              position: "absolute",
              top: 0,
              right: 0,
            },
            color: "#E9B10A",
            "&.Mui-focusVisible": { background: "rgba(255, 255, 255, .1)" },
          },
        },
      },
    },
  },
};

export const theme = createTheme(themeOptions);
