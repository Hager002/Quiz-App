import React, { Component } from 'react'
import axios from '../axios';

class Frage extends Component {

    state = {
        quizes: [],
        frage: '',
        aktuelleFrage: {},
        aktuelleFrageIndex: 0
    }

    componentDidMount() {
        const { frage, aktuelleFrage } = this.state;

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
            frage, aktuelleFrage
        );
    }

    displayAllQuestions = (
        frage = this.state.frage, aktuelleFrage) => {
        let aktuelleFrageIndex = this.state;

        if (this.state.frage) {
            frage = this.state.frage;
            aktuelleFrage = frage[aktuelleFrageIndex];

            this.setState({
                aktuelleFrage: aktuelleFrage
            })
        } else { }
    }

    dataSendHandler = (event) => {
        const frage = document.getElementById('frage').value;

        axios.post('/fragenundantworten', {
            frage: frage,
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
                <span>{quiz.frage}</span>
            </div>
        ));
        const { aktuelleFrageIndex } = this.state;

        return (
            <div>
                <h2>{quizes[aktuelleFrageIndex]}</h2>
            </div>
        )
    }
}

export default Frage;
