import store from "../store";

const increase = (payload = null) => {
  return store.dispatch({ type: "LOG_SAGA" });
};

export default increase;
