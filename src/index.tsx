import { render } from "react-dom";
import { Counter } from "./components/Counter";
import { someFn } from "./test";

someFn(213);

render(
  <div><Counter /></div>,
  document.getElementById('root')
)