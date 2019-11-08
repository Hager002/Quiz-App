import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';

export class Login extends Component {
    
    render() {
        return (
            <Fragment>
                <Helmet><title>Quiz App - Login</title></Helmet>

                <section className="App-login">
                    <form className="login">
                        <h1>Login</h1>

                        <label>Email Adresse:
                  <input type="email" placeholder="xyz@hotmail.com" />
                        </label>
                        <br></br>
                        <label>Passwort:
                  <input type="password" placeholder="*****" />
                        </label>
                        <br></br>
                        <button variant="primary" type="submit" onClick={() => { this.props.history.replace('/home') }}>
                            Submit </button>
                    </form>
                </section>

                <section className="App-registrieren">
                    <form className="registrieren">
                        <h1>Registrieren</h1>

                        <label>Name:
                  <input type="text" placeholder="Max Mustermann" />
                        </label>
                        <br></br>
                        <label>Geburtsdatum:
                  <input type="date" />
                        </label>
                        <br></br>
                        <label>Email Adresse:
                  <input type="email" placeholder="xyz@hotmail.com" />
                        </label>
                        <br></br>
                        <label>Passwort:
                  <input type="password" placeholder="*****" />
                        </label>
                        <br></br>
                        <button variant="primary" type="submit">
                            Submit </button>
                    </form>
                </section>
            </Fragment>


        )
    }

}