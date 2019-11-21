import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Frage from './Frage.js';
import OptionA from './OptionA';
import OptionB from './OptionB';

export class Gameboard extends Component {

    render() {

        return (
            <Fragment>
                <Helmet><title>Quiz-Gameboard</title></Helmet>
                <div className="questions">
                    <div className="info">
                        <p>
                            <span> </span>
                        </p>
                    </div>

                    <Frage />

                    <div className="options-container">
                        <OptionA/> 
                        <OptionB/> 
                        <p className="option"> currentQuestion.optionC </p>
                        <p className="option"> currentQuestion.optionD </p>
                    </div>

                    <div className="button-container">
                        <button className="previous">Previous</button>
                        <button className="next">Next</button>
                        <button className="quit">Quit</button>
                    </div>
                </div>
            </Fragment>
        );
    }

}

