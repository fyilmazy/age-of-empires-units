import { render } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import store from "../redux/store";

beforeEach(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
});
test("App component renders", () => {
  //screen.debug();
  const rootDiv = document.querySelector(".App");
  expect(rootDiv.getAttribute("class")).toEqual("App");
});
