import React from "react";
import { render } from "@testing-library/react";

import Portal from "./Portal";

describe("Portal", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Portal />);
    expect(baseElement).toBeTruthy();
  });
});
