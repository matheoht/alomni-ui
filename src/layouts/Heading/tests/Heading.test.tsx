import React from "react";
import { render } from "@testing-library/react";

import Heading from "../src/Heading";

describe("Heading", () => {
  test("renders the Heading component", () => {
    render(<Heading type="h3">hello</Heading>);
  });
});
