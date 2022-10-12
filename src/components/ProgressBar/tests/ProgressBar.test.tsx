import React from "react";
import { render } from "@testing-library/react";

import ProgressBar from "../src/ProgressBar";

describe("ProgressBar", () => {
  test("renders the ProgressBar component", () => {
    render(<ProgressBar value={12} maxvalue={200}>Hello world!</ProgressBar>);
  });
});
