import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00A76F",
      light: "#5BE49B",
      dark: "#007867",
    },
    secondary: {
      main: "#8333FF",
      light: "#C684FF",
      dark: "#5119B7",
    },
    info: {
      main: "#00B8D9",
      light: "#61F3F3",
      dark: "#006C9C",
    },
    success: {
      main: "#22C55E",
      light: "#77ED8B",
      dark: "#118D57",
    },
    warning: {
      main: "#FFAB00",
      light: "#FFD666",
      dark: "#B76E00",
    },
    error: {
      main: "#FF5630",
      light: "#FFAC82",
      dark: "#B71D18",
    },
  },
});

export default theme;
