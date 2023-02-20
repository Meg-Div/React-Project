import { Cart } from "../Cart";
import * as ReactDOM from "react-dom";

describe("Cart component tests", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<Cart />, container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders correctly initial document", () => {
    const inputs = container.querySelectorAll("input");
  });
});
