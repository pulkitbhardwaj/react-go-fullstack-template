import { render } from "@testing-library/react";
import React from "react";
import AppBar from "./AppBar";

describe("Header", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<AppBar />);
    expect(baseElement).toBeTruthy();
  });
});
