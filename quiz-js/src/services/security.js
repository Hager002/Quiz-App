const simplecrypt = require('simplecrypt');
const sc = simplecrypt({
  password: "quiz",
  salt: "SALT"
});

module.exports.encrypt = function encrypt(password) {
  return sc.encrypt(password);
}

module.exports.decrypt = function decrypt(hash) {
  return sc.decrypt(hash);
}