import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./style/style.scss";

import Login from "./components/Benutzerformular/Login";
import { Registrieren } from "./components/Benutzerformular/Registrieren";
import Home from "./components/Home/Home";
import { Verlauf } from "./components/Verlauf/Verlauf";
import Ergebnis from "./components/Gameboard/FragenNeu/Ergebnis/Ergebnis";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Themeninhalt, { Themeninhalte } from "./components/TopicInhalte/Themeninhalte";
import { Gameboard } from "./components/Gameboard/Gameboard.js";

function App() {
  return (
    <div className="App">
      <header className="App-header ">
        <h1 className="App-header__h1">Quiz Web-App</h1>
        <h2 className="App-header__h2"> Biologie Sekundarstufe 1 </h2>
      </header>

      <div className="App-body container">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={Login} exact />
              <Route path="/registrieren" component={Registrieren} />
              <Route path="/home" component={Home} />
              <Route path="/verlauf" component={Verlauf} />
              <Route path="/inhalte" component={Themeninhalt} />
              <Route path="/ergebnis" component={Ergebnis} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
