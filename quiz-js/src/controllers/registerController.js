'use strict'

var varregisterController = require('./registerControllerService');

module.exports.register = function register(req, res, next) {
  varregisterController.register(req.swagger.params, res, next);
};