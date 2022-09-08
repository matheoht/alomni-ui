import React from "react";
import { render } from "@testing-library/react";

import Heading from "../src/Heading";

describe("Heading", () => {
  it("renders the Heading component", () => {
    render(<Heading>hello</Heading>);
  });

  it("props working", () => {
    const heading = render(<Heading type="h3">Hello world!</Heading>);
    heading.getByText("Hello world!");
  });
});
