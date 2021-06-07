import { screen } from "@testing-library/react";
import Footer from "../../components/Footer";
import render from "../utils/render";

beforeEach(() => {
  render(<Footer />, {
    route: "/",
  });
});

test("Renders footer correctly", () => {
  const footerEl = screen.getByText(/developed by \- 2021/i);
  const footerLinkEl = screen.getByRole("link", {
    name: /fahrettin yılmaz/i,
  });
  expect(footerEl).toBeInTheDocument();
  expect(footerLinkEl).toHaveAttribute("href", "https://github.com/fyilmazy/");
});
