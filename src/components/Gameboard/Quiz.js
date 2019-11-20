import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import questions from './questions.json';

export class Quiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: questions,
            currentQuestion: {},
            nextQuestion: {},
            previousQuestion: {},
            answer: '',

            numberOfQuestions: 0,
            numberOfAnsweredQuestions: 0,
            currentQuestionIndex: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
        };
    }

    // componentDidMount = Lifecycle Methode 
    componentDidMount() {
        const {
            questions, previousQuestion, currentQuestion, nextQuestion
        } = this.state;

        this.displayAllQuestions(
            questions, previousQuestion, currentQuestion, nextQuestion
        );
    }

    displayAllQuestions = (
        questions = this.state.questions, previousQuestion, currentQuestion, nextQuestion
    ) => {
        let { currentQuestionIndex } = this.state;

        if (this.state.questions) {
            questions = this.state.questions;
            previousQuestion = questions[currentQuestionIndex - 1];
            currentQuestion = questions[currentQuestionIndex];
            nextQuestion = questions[currentQuestionIndex + 1];
            const answer = currentQuestion.answer;

            this.setState({
                previousQuestion: previousQuestion,
                currentQuestion: currentQuestion,
                nextQuestion: nextQuestion,
                numberOfQuestions: questions.length,
                answer: answer
            });

        } else { }
    };

    handleOptionClick = (event) => {
        console.log(event.target.innerHTML, this.state.answer); 
        if (event.target.innerHTML.trim() === this.state.answer.trim()) {
            this.correctAnswer();
        } else {
            this.wrongAnswer();
        }
    }

    correctAnswer = () => {
        console.log('Richtig');
        this.setState(({
            correctAnswers: this.state.correctAnswers + 1,
            currentQuestionIndex: this.state.currentQuestionIndex + 1,
            numberOfAnsweredQuestions: this.state.numberOfAnsweredQuestions + 1
        }),
            () => {
                this.displayAllQuestions(
                    this.state.questions,
                    this.state.previousQuestion,
                    this.state.currentQuestion,
                    this.state.nextQuestion
                    );
            }
        );
    }

    wrongAnswer = () => {
        console.log('Falsch');
        this.setState(({
            wrongAnswers: this.state.wrongAnswers + 1,
            currentQuestionIndex: this.state.currentQuestionIndex + 1,
            numberOfAnsweredQuestions: this.state.numberOfAnsweredQuestions + 1
        }),
            () => {
                this.displayAllQuestions(
                    this.state.questions,
                    this.state.previousQuestion,
                    this.state.currentQuestion,
                    this.state.nextQuestion);
            }
        );
    }

    // Buttons: Next, Previous & Quit
    handleButtonClickNext = () => {
        if (this.state.nextQuestion !== undefined) {
            this.setState(({
                currentQuestionIndex: this.state.currentQuestionIndex + 1
            }), () => {
                this.displayAllQuestions(
                    this.state.state,
                    this.state.previousQuestion,
                    this.state.currentQuestion,
                    this.state.nextQuestion)
            })
        }
    }

    handleButtonClickPrevious = () => {
        if (this.state.previousQuestion !== undefined) {
            this.setState(({
                currentQuestionIndex: this.state.currentQuestionIndex - 1
            }), () => {
                this.displayAllQuestions(
                    this.state.state,
                    this.state.previousQuestion,
                    this.state.currentQuestion,
                    this.state.nextQuestion)
            })
        }
    }

    handleButtonClickQuit = () => {
        if (window.confirm('Quit?')) {
            this.props.history.push('/home');
        } else { }
    }


    render() {

        //console.log(questions)
        const {currentQuestion} = this.state;
        const {currentQuestionIndex} = this.state;
        const {numberOfQuestions} = this.state;

        return (
            <Fragment>
                <Helmet><title>Quiz-Gameboard</title></Helmet>
                <div className="questions">
                    <div className="info">
                        <p>
                            <span>{currentQuestionIndex + 1} of {numberOfQuestions} </span>
                        </p>
                    </div>

                    <h2 className="question">{currentQuestion.question}</h2>

                    <div className="options-container">
                        <p onClick={this.handleOptionClick} className="option"> {currentQuestion.optionA} </p>
                        <p onClick={this.handleOptionClick} className="option"> {currentQuestion.optionB} </p>
                        <p onClick={this.handleOptionClick} className="option"> {currentQuestion.optionC} </p>
                        <p onClick={this.handleOptionClick} className="option"> {currentQuestion.optionD} </p>
                    </div>

                    <div className="button-container">
                        <button onClick={this.handleButtonClickPrevious} className="previous">Previous</button>
                        <button onClick={this.handleButtonClickNext} className="next">Next</button>
                        <button onClick={this.handleButtonClickQuit} className="quit">Quit</button>
                    </div>
                </div>
            </Fragment>
        );
    }

}

