import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from 'react-bootstrap';

export class Login extends Component {
    State = {
        email: '',
        password: ''

    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <Fragment>
                <Helmet><title>Quiz App - Login</title></Helmet>

                <section className="App-login container">

                    <form className="login" onSubmit={this.handleSubmit}>
                        <h1>Login</h1>

                        <div className="input-field">
                            <label htmlFor="email">Email Adresse: </label>
                            <input type="email" placeholder="xyz@hotmail.com" id="email" onChange={this.handleChange} />
                        </div>

                        <div className="input-field">
                            <label htmlFor="password">Passwort: </label>
                            <input type="password" placeholder="*****" id="password" onChange={this.handleChange} />
                        </div>

                        <div className="input-field">
                            <button variant="primary" type="submit">
                                Anmelden </button>
                        </div>

                        <hr></hr>

                        <Button className="button-reg"
                            onClick={() => { this.props.history.replace('/registrieren') }}>
                            Neues Konto erstellen 
                        </Button>
                    </form>

                </section>

            </Fragment>

        )
    }

}