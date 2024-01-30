import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

// theme.js
export const theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745",
    danger: "#dc3545",
  },
  fonts: {
    body: "Arial, sans-serif",
    heading: "Roboto, sans-serif",
  },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};
