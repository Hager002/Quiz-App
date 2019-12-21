import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Button, Card, CardDeck } from "react-bootstrap";
import axios from "../../axios";
import {login} from "../../../services/user-service";
import './login.scss';

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(event);
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login({email, password});
  };

  render() {
    const email = this.state.email;
    const password = this.state.password;
    const { _id } = this.state;

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
                      <form
                        className="login"
                        key={_id}
                        onSubmit={this.handleSubmit}
                        method="GET"
                        action="Home.js"
                      >
                        <div className="input-field__email">
                          <label htmlFor="email" className="email_label">
                            Email Adresse: 
                          </label>
                          <input
                            className="email_input"
                            name="email"
                            type="email"
                            id="email"
                            placeholder="xyz@hotmail.com"
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
                          />
                        </div>

                        <div className="input-field">
                          <button
                            className="cardLogin__login"
                            variant="primary"
                            name="submit"
                            type="submit"
                            id="buttonSubmit"
                            onClick={this.handleSubmit}
                          >
                            {" "}
                            Anmelden{" "}
                          </button>
                        </div>
                      </form>
                    </section>
                  </Card.Text>{" "}
                  <hr className="trennlinie"></hr>
                  <Card.Link href="/registrieren" className="cardLogin__reg">
                    Neues Konto erstellen
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          </CardDeck>
        </div>
      </Fragment>
    );
  }
}

export default Login;
