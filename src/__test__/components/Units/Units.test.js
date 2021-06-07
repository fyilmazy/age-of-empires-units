import React from "react";
import { screen } from "@testing-library/react";
import Units from "../../../components/Units";
import render from "../../utils/render";

beforeEach(() => {
  render(<Units />);
});

describe("age selection form component completely renders", () => {
  test("age selection form renders", () => {
    const ageFormGroup = screen.getByRole("group", {
      name: /ages/i,
    });
    expect(ageFormGroup).toHaveTextContent(/ages/i);
  });

  test("cost selector form renders", () => {
    const costSelectorsGroup = screen.getByTestId("costSelectors");
    expect(costSelectorsGroup).toBeInTheDocument();
  });

  test("filtered units table renders", () => {
    const filteredUnitsTable = screen.getByRole("table", {
      name: /sticky table/i,
    });
    expect(filteredUnitsTable).toBeInTheDocument();
  });
});
