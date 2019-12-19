import React, { Component } from 'react'
import axios from '../axios';

class Test extends Component {

    state = {
        users: [
        ],
        email: '',
        password: ''
    }

    componentDidMount() {
        axios.get('/login')
            .then(response => {
                this.setState({
                    users: response.data
                })
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    dataSendHandler = (event) => {
        const email = this.state.email;
        const password = this.state.password;

        axios.post('/login', {
            email: email,
            password: password
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {

        const users = this.state.users.map(user => (
            <div key={user._id}>
                <span>Email: {user.email}</span>
                <span>Passwort: {user.password}</span>
            </div>
        ))

        return (
            <div>
                <p>{users}</p>
                <input type="email" onChange={(event) => { this.setState({ email: event.target.value }) }} />
                <input type="text" onChange={(event) => { this.setState({ password: event.target.value }) }} />
                <button onClick={this.dataSendHandler}>Senden</button>
            </div>
        )
    }
}
export default Test;




/* handleSubmit(event) {

        event.preventDefault();
        console.log(event);

        const name = document.getElementById('name').value;
        const password = document.getElementById('password').value;

        const query =
            '?q={"name": "' + name + '", "password": "' + password + '"}';
        axios
            .get('https://quizspiel-4f55.restdb.io/rest/login' + query, {
                headers: {
                    "content-type": "application/json",
                    'x-apikey': '5dd3d18a4658275ac9dc1bee',
                    'cache-control': 'no-cache'
                }
            })
            .then(response => {
                console.log(response);
                if (response.data.length > 0) {
                    alert("login erfolgreich");
                } else {
                    alert("name oder passwort falsch");
                }
            });
    } */