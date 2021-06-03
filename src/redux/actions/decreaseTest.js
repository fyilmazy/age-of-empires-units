import store from "../store";

const decrease = (payload = null) => {
  return store.dispatch({ type: "DECREASE_TEST" });
};

export default decrease;
