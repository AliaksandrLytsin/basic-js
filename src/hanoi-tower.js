const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let resolve = {};
  resolve['turns'] = Math.pow(2, disksNumber) - 1;
  resolve['seconds'] = Math.floor((3600 / turnsSpeed) * resolve.turns);
  return resolve;
};
