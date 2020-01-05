'use strict'

var varloginController = require('./loginControllerService');

module.exports.login = function login(req, res, next) {
  varloginController.login(req.swagger.params, res, next);
};