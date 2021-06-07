import { screen, render } from "@testing-library/react";
import Home from "../../components/Home";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

beforeEach(() => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Home exact path="/" component={Home} pageTitle="Home" />
    </Router>,
  );
});

test("Home page renders Age of Empires image", () => {
  const imgEl = screen.getByRole("img", {
    name: /age of empires image/i,
  });
  expect(imgEl.getAttribute("title")).toEqual("Age of Empires Image");
  expect(imgEl.getAttribute("class")).toEqual(
    "MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img",
  );
});
