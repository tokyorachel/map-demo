import { Helmet } from "react-helmet-async";
import { Switch, Route } from "react-router-dom";

import About from "./components/About";
import Instructions from "./components/Instructions";
import Leaflet from "./components/Leaflet";
import Navigation from "./components/Navigation";

import "./App.css";

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
            <Leaflet />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
