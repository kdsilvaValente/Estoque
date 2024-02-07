import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

// theme.js
export const theme = {
  colors: {
    primary: "#6CE0BB",
    secondary: "#04151F",
    fontprimary: "#000000 ",
    fontsecondary: "#FFFFFF",
  },
  fonts: {
    body: "Inter, sans-serif",
  },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};
