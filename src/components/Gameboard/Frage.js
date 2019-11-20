import React, { Component } from 'react'
import axios from '../axios';

class Frage extends Component {

    state = {
        quizes: [],
        frage: ''
    }

    componentDidMount() {
        const { frage } = this.state;

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
                <span>Frage: {quiz.frage}</span>
            </div>
        ));

        return (
            <div>
                <p>{quizes[0]}</p>
            </div>
        )
    }
}

export default Frage;
