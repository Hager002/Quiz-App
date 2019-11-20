import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from 'react-bootstrap';
import axios from '../axios';

export class Login extends Component {

    state = {
        benutzer: [],
        email: '',
        password: ''

    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Match multiple fields: stimmen sich beides, email und passwort, mit denen eines Users aus der datenbank überien
        const query = '?q={"email": "' + email + '", "password": "' + password + '"}';

        axios
            .get('/login')
            .then(response => {
                this.setState({
                    benutzer: response.data
                })
                console.log(response.data);
            })

            .catch(error => {
                console.log(error);
            })
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value,
        })
    }
    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    render() {

        /* const benutzer = this.state.benutzer.map(
            user => (
                <div key={user._id}>
                    <span> Email: {user.email}</span>
                    <span> Passwort: {user.password}</span>
                </div>
            )
        ) */
        const email = this.state.email;
        const password = this.state.password;
        const { _id } = this.state;


        return (
            <Fragment>
                <Helmet><title>Quiz App - Login</title></Helmet>

                <section className="App-login container">

                    <form className="login" key={_id} onSubmit={this.handleSubmit}>
                        <h1>Login</h1>

                        <div className="input-field">
                            <label htmlFor="email">Email Adresse: <span>{email}</span></label>
                            <input name="email" type="email" id="email"
                                placeholder="xyz@hotmail.com" onClick={this.handleEmailChange} />
                        </div>

                        <div className="input-field">
                            <label htmlFor="password">Passwort: <span>{password}</span></label>
                            <input name="password" type="password" id="password"
                                placeholder="*****" onClick={this.handlePasswordChange} />
                        </div>

                        <div className="input-field">
                            <button variant="primary"
                                name="submit" type="submit" id="buttonSubmit"
                                onClick={this.handleSubmit}> Anmelden </button>
                        </div>

                        <hr></hr>

                    </form>

                    <Button className="button-reg"
                        onClick={() => { this.props.history.replace('/registrieren') }}>
                        Neues Konto erstellen
                        </Button>

                </section>

            </Fragment>

        )
    }

}