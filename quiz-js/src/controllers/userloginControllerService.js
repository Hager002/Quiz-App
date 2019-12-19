"use strict";
const axios = require("../services/axios");
const simplecrypt = require("simplecrypt");

module.exports.loginUser = async function loginUser(req, res, next) {
  //  console.log(JSON.stringify(req));
  let response = await axios.get("/accounts", {
    params: {
      q: { "email" : req.email.value }
    }
  });
  if (response) {
    if (response.data[0]) {
      if (response.data[0].password === req.password.value) {
        res.send(response.data[0]);
      } else {
        res.status(401);
        res.send(`Wrong password for user ${req.email.value}!`);
      }
    } else {
      res.status(404);
      res.send(`User ${req.email.value} not found!`);
    }
  } else {
    res.status(301);
    res.send(`Connection error while accessing database`);
  }
};