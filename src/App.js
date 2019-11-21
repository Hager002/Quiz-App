import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './style/style.scss';

import { Login } from './components/Benutzerformular/Login';
import { Registrieren } from './components/Benutzerformular/Registrieren';
import { Home } from './components/Home/Home';
import { Verlauf } from './components/Verlauf';
import { Quiz } from './components/Gameboard/Quiz';
import { Ergebnis } from './components/Ergebnis';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  Themeninhalt from './components/Themeninhalte';
import Test from './components/Benutzerformular/test';
import Frage from './components/Gameboard/Frage';
import OptionA from './components/Gameboard/OptionA';
import {Gameboard} from './components/Gameboard/Gameboard.js';

function App() {

  return (
    <div className="App">

      <header className="App-header jumbotron">
        <h1>Quiz Web-App</h1>
        <h2> Physik 5 </h2>
      </header>

      <div className="App-body container">

        <BrowserRouter>
          <div className="container">
            <Switch>
              <Route path='/' component={Login} exact />
              <Route path='/registrieren' component={Registrieren}  />
              <Route path='/home' component={Home}  />
              <Route path='/verlauf' component={Verlauf}  />
              <Route path='/quiz' component={Quiz}  />
              <Route path='/themeninhalt' component={Themeninhalt} />
              <Route path='/ergebnis' component={Ergebnis}/>
              <Route path='/test' component={Test}/>
              <Route path='/frage' component={Frage}/>
              <Route path='/optionA' component={OptionA}/>
              <Route path='/gameboard' component={Gameboard}/>
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    </div>
  );

}


export default App;
