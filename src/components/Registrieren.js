import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';

export class Registrieren extends Component {
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
                <Helmet><title>Quiz App - Registrieren</title></Helmet>

                <section className="App-registrieren container">

                    <form className="registrieren" onSubmit={this.handleSubmit}>
                        <h1>Registrieren</h1>

                        <div className="input-field">
                            <label htmlFor="name">Name: </label>
                            <input type="text" placeholder="Max Musterman" id="name" onChange={this.handleChange} />
                        </div>

                        <div className="input-field">
                            <label htmlFor="gbdatum">Geburtsdatum: </label>
                            <input type="date" id="gbdatum" onChange={this.handleChange} />
                        </div>

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
                                Submit </button>
                        </div>
                    </form>
                </section>
            </Fragment>

        )
    }

}