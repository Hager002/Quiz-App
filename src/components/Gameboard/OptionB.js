import React, { Component } from 'react'
import axios from '../axios';

class OptionB extends Component {

    state = {
        quizes: [],
        optionB: '',
        aktuelleFrage: {},
        aktuelleFrageIndex: 0
    }

    componentDidMount() {
        const { optionB, aktuelleFrage } = this.state;

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
            optionB, aktuelleFrage
        );
    }

    displayAllQuestions = (
        optionB = this.optionB, aktuelleFrage) => {
        let aktuelleFrageIndex = this.state;

        if (this.state.optionB) {
            optionB = this.state.optionB;
            aktuelleFrage = optionB[aktuelleFrageIndex];

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
                <span>{quiz.optionB}</span>
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

export default OptionB;
