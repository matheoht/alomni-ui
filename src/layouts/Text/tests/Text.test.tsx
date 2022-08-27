import React from "react";
import { render } from "@testing-library/react";

import Text from "../src/Text";

describe("Text", () => {
  test("renders the Text component", () => {
    render(<Text size="md">hello</Text>);
  });
});
