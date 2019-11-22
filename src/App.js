import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./style/style.scss";

import { Login } from "./components/Benutzerformular/Login";
import { Registrieren } from "./components/Benutzerformular/Registrieren";
import { Home } from "./components/Home/Home";
import { Verlauf } from "./components/Verlauf/Verlauf";
import { Ergebnis } from "./components/Gameboard/Ergebnis/Ergebnis";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Gameboard } from "./components/Gameboard/Gameboard.js";

function App() {
  return (
    <div className="App">
      <header className="App-header jumbotron">
        <h1>Quiz Web-App</h1>
        <h2> Biologie Sekundarstufe 1 </h2>
      </header>

      <div className="App-body container">
        <BrowserRouter>
          <div className="container">
            <Switch>
              <Route path="/" component={Login} exact />
              <Route path="/registrieren" component={Registrieren} />
              <Route path="/home" component={Home} />
              <Route path="/gameboard" component={Gameboard} />
              <Route path="/verlauf" component={Verlauf} />
              <Route path="/ergebnis" component={Ergebnis} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
