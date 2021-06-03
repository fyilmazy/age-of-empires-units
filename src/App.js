import "./App.scss";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Units from "./components/Units";
import UnitDetails from "./components/UnitDetails";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <div className="App">
        <div className="wrapper">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} pageTitle="Home"></Route>
            <Route
              exact
              path="/units"
              component={Units}
              pageTitle="Units"
              history={history}
            ></Route>
            <Route
              path="/units/:id"
              component={UnitDetails}
              pageTitle="Unit Detail"
              history={history}
            ></Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
