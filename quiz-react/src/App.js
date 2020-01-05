import React, { useState } from "react";
import Header from './components/Header/header';
import Auth from "./pages/Auth/Auth";
import { UserProvider } from './context/user';
import Registrieren from "./components/Benutzerformular/Registrierung/Registrieren";
import Home from "./pages/Home/Home";
import Verlauf from "./pages/Verlauf/Verlauf";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./style/style.scss";

function App() { 
  const [user, setUser] = useState();
  return (
    <div className="App">
      <Header onLogout={() => setUser()} isLoggedin={user ? true : false}  />
      <div className="App-body container">
        <UserProvider value={user}>
          { user ? (
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/verlauf" component={Verlauf} />
              </Switch>
            </BrowserRouter>
          ) : (
            <Auth onLogin={user => setUser(user)}/>
          )}
        </UserProvider>
      </div>
    </div>
  );
}

export default App;
