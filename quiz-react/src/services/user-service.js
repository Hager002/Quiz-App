import axios from 'axios';

const baseURL = process.env.USER_SERVICE_URL || "http://localhost:5000"; // backend Server

const instance = axios.create({
  baseURL: baseURL,
});

/*instance.interceptors.request.use(request => {
  console.log('Starting Request', request)
  return request
})

instance.interceptors.response.use(response => {
  console.log('Response:', response)
  return response
})*/

export function register(user) {
  return instance.post("/register", user)
    .then(response => response.data)
    .catch(error => console.error(error));
};

export function login({email, password}) {
  return instance.get("/login", {  
    params: {
      email: email,
      password: password
    }
  })
   // .then(response => response)
    .catch(error => error.response);
};