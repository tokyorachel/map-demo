import { Helmet } from "react-helmet-async";
import { Switch, Route, Redirect } from "react-router-dom";

import About from "./components/About";
import Instructions from "./components/Instructions";
import MapUI from "./components/MapUI";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="app">
      <Helmet>
        <title>Map Demo</title>
      </Helmet>

      <header className="app-header">
        <Navigation />
      </header>

      <main>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/instructions">
            <Instructions />
          </Route>
          <Route path="/map">
            <MapUI />
          </Route>
          <Route exact path="/" render={() => <Redirect to="/map" />} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
