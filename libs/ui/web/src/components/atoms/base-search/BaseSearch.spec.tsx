import React from "react";
import { render } from "@testing-library/react";

import BaseSearch from "./BaseSearch";

describe("BaseSearch", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<BaseSearch />);
    expect(baseElement).toBeTruthy();
  });
});
