import React, { useState, Fragment } from "react";
import { Helmet } from "react-helmet";
import { register } from '../../../services/user-service';
import "./registrieren.css"; 

export default function Registrieren({ onLogin }) {
  const [name, setName] = useState("");
  const [geburtsdatum, setGeburtsdatum] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = event => {
    event.preventDefault();
    register({name, geburtsdatum, email, password})
      .then(user => onLogin(user))
      .catch(error => console.error(error));
  };

  return (
    <Fragment>
      <Helmet>
        <title>Quiz App - Registrieren</title>
      </Helmet>
      <section className="registration container">
        <form className="reg_form" onSubmit={submit}>
          <h3>Registrieren</h3>
          <div className="reg_form_fields">

            <div className="input-field ">
              <label for="name" htmlFor="name" className="regName__label">Name: </label>
              <input className="regName__input" type="text" name="name" placeholder="Max Musterman" id="name" value={name} onChange={event => setName(event.target.value)}/>
            </div>

            <div className="input-field">
              <label for="geburtsdatum" htmlFor="geburtsdatum" className="regGb__label">Geburtsdatum: </label>
              <input className="regGB__input" type="date" name="geburtsdatum" id="geburtsdatum" value={geburtsdatum} onChange={event => setGeburtsdatum(event.target.value)}/>
            </div>

            <div className="input-field">
              <label for="email" htmlFor="email" className="regEmail__label">Email Adresse: </label>
              <input className="regEmail__input" type="email" name="email" placeholder="xyz@hotmail.com" id="email" value={email} onChange={event => setEmail(event.target.value)}/>
            </div>

            <div className="input-field">
              <label for="password" htmlFor="password" className="regPw__label">Passwort: </label>
              <input className="regPw__input" type="password" name="password" placeholder="*****" id="password" value={password} onChange={event => setPassword(event.target.value)}/>
            </div>
          </div>

          <div className="input-field regSubmit">
            <button variant="primary" className="regSubmitButton" type="submit">Submit</button>
          </div>
          
        </form>
      </section>
    </Fragment>
  );
}

