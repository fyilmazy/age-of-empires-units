import { render as rtlRender } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";

/**
 * Function takes any component, route and options as parameters.
 * Wraps the given component with Provider and Router.
 */

const render = (
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [(route = "/")] }),
    ...renderOptions
  } = {},
) => {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <Router history={history}>{children}</Router>
      </Provider>
    );
  }
  history.push("/");
  return { ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }), history };
};

export default render;
