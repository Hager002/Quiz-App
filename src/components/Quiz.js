import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import questions from '../api/questions.json';

export class Quiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            currentQuestion: {},
            nextQuestion: {},
            previousQuestion: {},
            answer: '',
            numberOfQuestions: 0,
            numberOfAnsweredQuestions: 0,
            currentQuestionIndex: 0,
            score: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            time: {}
        };
    }
    // die oben genannten states definieren

    render() {

        console.log(questions);
        return (
            <Fragment>
                <Helmet><title>Quiz-Page</title></Helmet>
                <div className="questions">

                    {/* Eventuell: 50/50 Jocker */}

                    {/* Anzeige der Fragenanzahl & übrige Zeit */}
                    <div className="info">
                        <p>
                            <span>1 of 10</span>
                            <span className="mdi mdi-clock-outline mdi-24px"></span>
                        </p>
                    </div>

                    <h5>Meine Frage?</h5>
                    <div className="options-container">
                        <p className="option"> A: 1.Antwort </p>
                        <p className="option"> B: 2.Antwort </p>
                    </div>
                    <div className="options-container">
                        <p className="option"> C: 3.Antwort </p>
                        <p className="option"> D: 4.Antwort </p>
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