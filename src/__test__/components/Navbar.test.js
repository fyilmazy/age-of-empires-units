import { screen } from "@testing-library/react";
import render from "../utils/render";
import Navbar from "../../components/Navbar/index";
import { updatePageTitle } from "../../redux/actionCreators/";

beforeEach(() => {
  render(<Navbar />, {
    route: "/",
  });
});

test("Page name renders correctly on home page", () => {
  updatePageTitle("Home Page");
  const pageNameEl = screen.getByRole("heading", { name: /home page/i });
  expect(pageNameEl).toHaveTextContent(/home page/i);
});

test("Page name renders correctly on units page", () => {
  updatePageTitle("Units Page");
  const pageNameEl = screen.getByRole("heading", { name: /units page/i });
  expect(pageNameEl).toHaveTextContent(/units page/i);
});
test("Page name renders correctly on unit details page", () => {
  updatePageTitle("Unit Details");
  const pageNameEl = screen.getByRole("heading", { name: /unit details/i });
  expect(pageNameEl).toHaveTextContent(/unit details/i);
});

test("Renders home button in menu correctly", () => {
  const homeBtn = screen.getByRole("button", { name: /home/i });
  expect(homeBtn).toHaveTextContent(/home/i);
});

test("Home button link is correct", () => {
  const homeBtnLink = screen.getByRole("link", { name: /home/i });
  expect(homeBtnLink).toHaveAttribute("href", "/");
});

test("Renders units button in menu correctly", () => {
  const unitsBtn = screen.getByRole("button", { name: /units/i });
  expect(unitsBtn).toHaveTextContent(/units/i);
});

test("Units button link is correct", () => {
  const unitsBtnLink = screen.getByRole("link", { name: /units/i });
  expect(unitsBtnLink).toHaveAttribute("href", "/units");
});
