import React from "react";
import { screen } from "@testing-library/react";
import CostSelectors from "../../../../../components/Units/Form/CostSelectors";
import render from "../../../../utils/render";

beforeEach(() => {
  render(<CostSelectors />);
});

describe("age selection form component completely renders correct", () => {
  test("age selection form renders correctly", () => {
    screen.logTestingPlaygroundURL();
    const ageFormGroup = screen.getByRole("group", {
      name: /ages/i,
    });
    expect(ageFormGroup).toHaveTextContent(/ages/i);
  });
});
