import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import axios from "../axios";

export class Registrieren extends Component {
  state = {
    benutzer: [],
    name: "",
    geburtsdatum: "",
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(event);

    const name = document.getElementById("name").value;
    const geburtsdatum = document.getElementById("geburtsdatum").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Match multiple fields: stimmen sich beides, email und passwort, mit denen eines Users aus der datenbank überien
    // const query = '?q={"name": "' + name + '", "geburtsdatum": "' + geburtsdatum + '", "email": "' + email + '", "password": "' + password + '"}';

    axios
      .post("/login", {
        name: name,
        geburtsdatum: geburtsdatum,
        email: email,
        password: password
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { _id } = this.state;
    const name = this.state.name;
    const geburtsdatum = this.state.geburtsdatum;
    const email = this.state.email;
    const password = this.state.password;

    return (
      <Fragment>
        <Helmet>
          <title>Quiz App - Registrieren</title>
        </Helmet>

        <section className="App-registrieren container">
          <form className="reg_form" key={_id} onSubmit={this.handleSubmit}>
            <h1 className="reg_h1">Registrieren</h1>

            <div className="reg_form_fields">
              <div className="input-field ">
                <label htmlFor="name" className="regName__label">
                  Name:{" "}
                </label>
                <input
                  className="regName__input"
                  type="text"
                  name="name"
                  placeholder="Max Musterman"
                  id="name"
                  onChange={this.handleChange}
                />
              </div>

              <div className="input-field">
                <label htmlFor="geburtsdatum" className="regGb__label">
                  Geburtsdatum:{" "}
                </label>
                <input
                  className="regGB__input"
                  type="date"
                  name="geburtsdatum"
                  id="geburtsdatum"
                  onChange={this.handleChange}
                />
              </div>

              <div className="input-field">
                <label htmlFor="email" className="regEmail__label">
                  Email Adresse:{" "}
                </label>
                <input
                  className="regEmail__input"
                  type="email"
                  name="email"
                  placeholder="xyz@hotmail.com"
                  id="email"
                  onChange={this.handleChange}
                />
              </div>

              <div className="input-field">
                <label htmlFor="password" className="regPw__label">
                  Passwort:{" "}
                </label>
                <input
                  className="regPw__input"
                  type="password"
                  name="password"
                  placeholder="*****"
                  id="password"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="input-field regSubmit">
              <button variant="primary" className="regSubmitButton" type="submit" onClick={this.handleSubmit}>
                Submit{" "}
              </button>
            </div>
          </form>
        </section>
      </Fragment>
    );
  }
}
