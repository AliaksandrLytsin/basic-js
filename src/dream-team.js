const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!(Array.isArray(members))) return false;
  let filtered = members.filter(member => typeof(member) === 'string');
  let noWhitespaceUpper = filtered.map(word => word.trim().toUpperCase());
  let sorted = noWhitespaceUpper.sort();
  let result = '';
  sorted.forEach(word => result += word[0]);
  return result;
};
