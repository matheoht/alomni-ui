import React from "react";
import { render } from "@testing-library/react";

import Anchor from "../src/Anchor";

describe("Anchor", () => {
  test("renders the Anchor component", () => {
    render(<Anchor>Hello world!</Anchor>);
  });
});
