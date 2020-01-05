'use strict'
const axios = require('../services/axios');
const security = require('../services/security');

module.exports.register = function register(req, res, next) {
  const user = req.undefined.value;
  console.log(user.password);
  user.password = security.encrypt(user.password);
  console.log(user.password);
  axios.post("/accounts", user)
  .then(response => {
    console.log(response.data)
    res.send("OK");
  })
  .catch(error => console.log(error));
};