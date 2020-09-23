const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let mainStr = `${str}`;

  let repeatTimes = options.repeatTimes;

  let separator = '+';  
  if (options.separator) separator = options.separator;

  let addition;
  if (options.addition === undefined) addition = '';
    else addition = `${options.addition}`;

  let additionRepeatTimes = options.additionRepeatTimes;

  let additionSeparator = '|';
  if (options.additionSeparator) additionSeparator = options.additionSeparator;

  let add = new Array(additionRepeatTimes);
  add.fill(addition);
  let main = new Array(repeatTimes);
  main.fill(mainStr + add.join(additionSeparator)); 

  return  main.join(separator);
};
  