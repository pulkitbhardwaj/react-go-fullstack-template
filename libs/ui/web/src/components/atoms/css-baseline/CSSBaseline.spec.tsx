import { render } from "@testing-library/react";
import React from "react";
import CSSBaseline from "./CSSBaseline";

describe("CssBaseline", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<CSSBaseline />);
    expect(baseElement).toBeTruthy();
  });
});
