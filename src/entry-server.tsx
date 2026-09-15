import { renderToString } from "react-dom/server";
import App from "./App";
import { ThemeProvider } from "./theme/ThemeContext";

export function render() {
  return renderToString(
    <ThemeProvider>
      <App />
    </ThemeProvider>,
  );
}
