import React, { useState, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Button, Card, CardDeck } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { login } from "../../../services/user-service";
import './login.scss';

export default function Login({ onLogin, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = event => {
    event.preventDefault();
    login({email, password})
      .then(user => onLogin(user))
      .catch(error => console.error(error));
  };

  return (
    <Fragment>
      <Helmet>
        <title>Quiz - Anmelden</title>
      </Helmet>
      <div className="AAA_login">
        <CardDeck>
          <div className="cardInfo">
            <Card>
              <Card.Body className="cardInfo__body">
                <Card.Title className="cardInfo__title">BIO Quiz</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text className="cardInfo__text">
                  Willkommen liebe Schüler und Schülerinnen. Auf dieser Webseite könnte ihr euch auf
                  spaßiegen Weg für eure Biologie-Klausuren vorbereiten. Ihr könnt zu den verschiedensten
                  Topics ein Quiz spielen um euer Wissen zu überprüfen und zu festigen.{" "}
                </Card.Text>
                <Card.Link href="#"></Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="cardLogin">
            <Card>
              <Card.Body className="cardLogin__body">
                <Card.Title className="cardLogin__title">Anmelden</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text>
                  <section className="App-login container">
                    <form className="login" onSubmit={submit} >
                      <div className="input-field__email">
                        <label htmlFor="email" className="email_label">Email Adresse:</label>
                        <input 
                          className="email_input"
                          name="email"
                          type="email"
                          id="email"
                          placeholder="xyz@hotmail.com"
                          value={email}
                          onChange={event => setEmail(event.target.value)}
                        />
                      </div>
                      <div className="input-field__password">
                        <label htmlFor="password" className="password_label">
                          Passwort: 
                        </label>
                        <input
                          className="password_input"
                          name="password"
                          type="password"
                          id="password"
                          placeholder="*****"
                          value={password}
                          onChange={event => setPassword(event.target.value)}
                        />
                      </div>

                      <div className="input-field">
                        <button className="cardLogin__login" variant="primary" name="submit" type="submit"> Anmelden </button>
                      </div>
                    </form>
                  </section>
                </Card.Text>{" "}
                <hr className="trennlinie"></hr>
                <button onClick={onRegister} >
                  Neues Konto erstellen
                </button>
              </Card.Body>
            </Card>
          </div>
        </CardDeck> 
      </div>
    </Fragment>
  );
}