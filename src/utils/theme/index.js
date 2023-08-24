import { createTheme } from "@mui/material";
import typography from "./typography";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "rgba(244, 246, 250, 1)",
      blue:"rgba(21, 153, 218, 1)",
      lightBlue:"rgba(21, 153, 218, 0.1)",

    },
    background: {
      default: "#FFFFF",
    },
    text: {
      secondary: "rgba(5, 25, 44, 1)",
    },
  },typography

});

export default theme;
