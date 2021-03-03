import React from "react";
import { render } from "@testing-library/react";

import BaseButton from "./BaseButton";

describe("BaseButton", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<BaseButton />);
    expect(baseElement).toBeTruthy();
  });
});
