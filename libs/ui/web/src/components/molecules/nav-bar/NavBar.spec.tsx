import { render } from "@testing-library/react";
import React from "react";
import NavBar from "./NavBar";

describe("Nav", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<NavBar />);
    expect(baseElement).toBeTruthy();
  });
});
