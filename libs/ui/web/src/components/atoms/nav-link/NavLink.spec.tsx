import React from "react";
import { render } from "@testing-library/react";

import NavLink from "./NavLink";

describe("NavLink", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<NavLink />);
    expect(baseElement).toBeTruthy();
  });
});
