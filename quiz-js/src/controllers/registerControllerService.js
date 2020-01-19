'use strict'
const axios = require('../services/axios');
const security = require('../services/security');

module.exports.register = function register(req, res, next) {
  const user = req.undefined.value;
  user.password = security.encrypt(user.password);
  axios.post("/accounts", user)
  .then(response => {
    res.send(response.data);
  })
  .catch(error => console.log(error));
};