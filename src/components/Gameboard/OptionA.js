import React, { Component } from 'react'
import axios from '../axios';

class OptionA extends Component {

    state = {
        quizes: [],
        optionA: '',
        aktuelleFrage: {},
        aktuelleFrageIndex: 0
    }

    componentDidMount() {
        const { optionA, aktuelleFrage } = this.state;

        axios.get('/fragenundantworten')
            .then(response => {
                this.setState({
                    quizes: response.data
                })
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })

        this.displayAllQuestions(
            optionA, aktuelleFrage
        );
    }

    displayAllQuestions = (
        optionA = this.optionA, aktuelleFrage) => {
        let aktuelleFrageIndex = this.state;

        if (this.state.optionA) {
            optionA = this.state.optionA;
            aktuelleFrage = optionA[aktuelleFrageIndex];

            this.setState({
                aktuelleFrage: aktuelleFrage
            })
        } else { }
    }

    dataSendHandler = (event) => {
        const optionA = document.getElementById('frage').value;

        axios.post('/fragenundantworten', {
            optionA: optionA,
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const quizes = this.state.quizes.map(quiz => (
            <div key={quiz._id}>
                <span>{quiz.optionA}</span>
            </div>
        ));
        const { aktuelleFrageIndex } = this.state;

        return (
            <div>
                <p className="option"> {quizes[aktuelleFrageIndex]} </p>
            </div>
        )
    }
}

export default OptionA;
