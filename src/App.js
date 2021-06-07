import "./App.scss";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Units from "./components/Units";
import UnitDetails from "./components/UnitDetails";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <div className="App">
        <div className="wrapper">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home pageTitle="Home Page" />
            </Route>
            <Route exact path="/units">
              <Units pageTitle="Units Page" />
            </Route>
            <Route path="/units/:id">
              <UnitDetails pageTitle="Unit Details" />
            </Route>
            <Route default component={Home}>
              <Redirect to="/" />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
