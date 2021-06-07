import React from "react";
import { screen } from "@testing-library/react";
import AgeSelector from "../../../../../components/Units/Form/AgeSelector";
import render from "../../../../utils/render";

beforeEach(() => {
  render(<AgeSelector />);
});

describe("age selection form component completely renders correct", () => {
  test("age selection form renders correctly", () => {
    const ageFormGroup = screen.getByRole("group", {
      name: /ages/i,
    });
    expect(ageFormGroup).toHaveTextContent(/ages/i);
  });

  test("age selection 'ages' label renders correctly", () => {
    const formLabel = screen.getByText(/ages/i);
    expect(formLabel).toBeInTheDocument();
  });
  test("age selection 'all' button renders correctly", () => {
    const ageAllBtn = screen.getByRole("button", {
      name: /all/i,
    });
    expect(ageAllBtn).toBeInTheDocument();
  });
  test("age selection 'dark' button renders correctly", () => {
    const ageDarkBtn = screen.getByRole("button", {
      name: /dark/i,
    });
    expect(ageDarkBtn).toBeInTheDocument();
  });
  test("age selection 'feudal' button renders correctly", () => {
    const ageFeudalBtn = screen.getByRole("button", {
      name: /feudal/i,
    });
    expect(ageFeudalBtn).toBeInTheDocument();
  });
  test("age selection 'castle' button renders correctly", () => {
    const ageCastleBtn = screen.getByRole("button", {
      name: /castle/i,
    });
    expect(ageCastleBtn).toBeInTheDocument();
  });
  test("age selection 'imperial' button renders correctly", () => {
    const ageImperialBtn = screen.getByRole("button", {
      name: /imperial/i,
    });
    expect(ageImperialBtn).toBeInTheDocument();
  });
});
