import React from "react";
import { render } from "@testing-library/react";

import Tag from "../src/Tag";

describe("Tag", () => {
  test("renders the Tag component", () => {
    render(<Tag>Hello world!</Tag>);
  });
});
