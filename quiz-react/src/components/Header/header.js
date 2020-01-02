import React from 'react';
import Logout from '../Benutzerformular/Logout/Logout';

export default function Header({ onLogout, isLoggedin }) {
  return (
    <header className="App-header">
        <h1 className="App-header__h1">Quiz Web-App</h1>
        <h2 className="App-header__h2"> Biologie Sekundarstufe 1 </h2> 
        <Logout onClick={onLogout} isLoggedin={isLoggedin} />
    </header>
  );
}