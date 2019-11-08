import React, { Component, Fragment } from 'react';
import AppFach from './App-Fach';
import AppSchwierigkeitsgrad from './App-Schwierigkeitsgrad';
import { AppModal } from './App-Modal';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Navigation from '../App-Navigation';


export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { deps: [], addModalShow: false }
    }

    render() {
        let addModalclose = () => this.setState({ addModalShow: false });

        return (
            <Fragment>
                <Helmet><title>Quiz App - Game</title> </Helmet>

                <header>
                <div className="App-navi"> <Navigation /></div>
                <button className="logout">Logout</button>
                </header>

                <div id="game">

                    <AppFach />
                    <AppSchwierigkeitsgrad />

                    {/* Eventuell: Instruction */}
                    <ButtonToolbar >
                        <Button
                            className="ButtonInstruction"
                            variant="primary"
                            onClick={() => this.setState({ addModalShow: true })}>
                            Bedienungsanleitung
                        </Button>
                        <AppModal
                            show={this.state.addModalShow}
                            onHide={addModalclose}
                        />
                    </ButtonToolbar>

                    <Button className="StartQuiz"
                        onClick={() => { this.props.history.replace('/quiz') }}>
                        Starte das Quiz
                </Button>

                </div>
            </Fragment>

        )
    }

}

