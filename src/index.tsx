import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { someFn } from "./test";
import ThemeProvider from "./theme/ThemeProvider";

someFn(213);

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)