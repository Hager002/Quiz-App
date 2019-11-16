import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './style/style.scss';

import { Login } from './components/Login';
import { Registrieren } from './components/Registrieren';
import { Home } from './components/Home';
import { Verlauf } from './components/Verlauf';
import { Quiz } from './components/Quiz';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">

      <header className="App-header jumbotron">
        <h1>Quiz Web-App</h1>
      </header>

      <body className="App-body container">

        <BrowserRouter>
          <div className="container">
            <Switch>
              <Route path='/' component={Login} exact />
              <Route path='/registrieren' component={Registrieren}  />
              <Route path='/home' component={Home}  />
              <Route path='/verlauf' component={Verlauf}  />
              <Route path='/quiz' component={Quiz}  />
            </Switch>
          </div>
        </BrowserRouter>

      </body>
    </div>
  );

}


export default App;
