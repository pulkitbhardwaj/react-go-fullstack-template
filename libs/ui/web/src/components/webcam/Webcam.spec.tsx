import React from "react";
import { render } from "@testing-library/react";

import Webcam from "./Webcam";

describe("Webcam", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Webcam />);
    expect(baseElement).toBeTruthy();
  });
});
