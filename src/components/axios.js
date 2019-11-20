import axios from 'axios';

// configuriere meine Datenbank 

const instance = axios.create({
        baseURL: 'https://quizspiel-4f55.restdb.io/rest',
        headers: {
            "content-type": "application/json",
            'x-apikey': '5dd3d18a4658275ac9dc1bee',
            'cache-control': 'no-cache'
        },
    });

export default instance;