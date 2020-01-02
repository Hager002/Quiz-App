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

    instance.interceptors.request.use(request => {
        console.log('Starting Request', request)
        return request
      })
      
    instance.interceptors.response.use(response => {
        console.log('Response:', response)
        return response
      })


export default instance;