import React, { Component, Fragment } from 'react';
import AppThema from './App-Thema';
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

                    <AppThema />
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
                        onClick={() => { this.props.history.replace('/themeninhalt') }}>
                        Start
                </Button>

                </div>
            </Fragment>

        )
    }

}

