import React from "react";
import { render } from "@testing-library/react";

import FormHelper from "./FormHelper";

describe("FormHelper", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FormHelper />);
    expect(baseElement).toBeTruthy();
  });
});
