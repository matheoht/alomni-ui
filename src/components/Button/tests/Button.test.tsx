import React from "react";
import { render } from "@testing-library/react";

import Button from "../src/Button";

describe("Button component", () => {
  it("renders the Button component", () => {
    render(<Button>Hello world!</Button>);
  });
});
