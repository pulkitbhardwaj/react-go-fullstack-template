import React from "react";
import { render } from "@testing-library/react";

import Video from "./Video";

describe("Video", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Video />);
    expect(baseElement).toBeTruthy();
  });
});
