import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Button, Card, CardDeck } from "react-bootstrap";
import axios from "../axios";

class Login extends Component {
  state = {
    benutzer: [],
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(event);

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    var valid = false;

    axios
      .get("/login")
      .then(response => {
        this.setState({
          benutzer: response.data
        });
        console.log(response.data);

        for (let i = 0; i < response.data.length; i = i + 1) {
          if (email === response.data[i].email && password === response.data[i].password) {
            valid = true;
            console.log("You are logged in");
            this.props.history.replace("/home"); // or window.location.href="/home"
            break;
          }
          if (email !== response.data[i].email || password !== response.data[i].password) {
            valid = false;
            //console.log("Sie haben name oder passwort falsch eingegeben");
          }
          if (email !== response.data[i].email && password !== response.data[i].password) {
            valid = false;
            //console.log("Sie haben name und passwort falsch eingegeben");
          }
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };
  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
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
                    Willkommen liebe Schüler und Schülerinnen. Auf dieser Webapplikation könnte ihr euch auf
                    einem Spaßiegen weg für eure Biologie-Klausuren vorbereiten. Ihr könnt euch zu den
                    verschiedensten Topics den Stoff durchlesen und zu diesen ein Quiz spielen um euer Wissen
                    zu überprüfen und zu festigen.{" "}
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
                            Email Adresse: {/* <span>{email}</span> */}
                          </label>
                          <input
                            className="email_input"
                            name="email"
                            type="email"
                            id="email"
                            placeholder="xyz@hotmail.com"
                            onClick={this.handleEmailChange}
                          />
                        </div>

                        <div className="input-field__password">
                          <label htmlFor="password" className="password_label">
                            Passwort: {/* <span>{password}</span> */}
                          </label>
                          <input
                            className="password_input"
                            name="password"
                            type="password"
                            id="password"
                            placeholder="*****"
                            onClick={this.handlePasswordChange}
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
