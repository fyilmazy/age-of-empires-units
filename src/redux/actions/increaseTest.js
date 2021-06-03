import store from "../store";

const increase = (payload = null) => {
  return store.dispatch({ type: "INCREASE_TEST" });
};

export default increase;
