import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6200EA", // Violet tech
    },
    secondary: {
      main: "#00E5FF", // Cyan tech
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
  },
  typography: {
    fontFamily: "var(--font-geist)",
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.5rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    h4: {
      fontWeight: 500,
      fontSize: "1.5rem",
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 20px",
        },
        containedPrimary: {
          background: "linear-gradient(45deg, #6200EA 30%, #B388FF 90%)",
          "&:hover": {
            background: "linear-gradient(45deg, #5000D0 30%, #A070FF 90%)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        },
      },
    },
  },
});

export default theme;
