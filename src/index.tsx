import { render } from "react-dom";
import App from "./App";
import { Counter } from "./components/Counter";
import { someFn } from "./test";

someFn(213);

render(
  <App />,
  document.getElementById('root')
)