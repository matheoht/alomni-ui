import React from "react";
import { render } from "@testing-library/react";

import Button from "../src/Button";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button label="Hello world!" />);
  });

  test("try to render", () => {
    render(<Button label="Hello world!" />);
  });
});
