const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (parameter = true){
    this.direction = parameter;
    this.alphabet = 'QWERTYUIOPASDFGHJKLZXCVBNM';     
  }

  prepareKey (str, key) {
    let result = ''; 
    let j = 0;
    for (let i = 0; i < str.length; i++) {
      if (this.alphabet.includes(str[i])) {
        result += key[j % (key.length)]; 
        j++;
      } else result += ' ';
    }
    return result.toUpperCase();
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw Error;
    let result = '';
    let str = message.toUpperCase();
    if (this.direction === false) str = str.split('').reverse().join('');
    let preparedKey = this.prepareKey(str, key);
    for ( let i = 0; i < str.length; i++) {
      if (this.alphabet.includes(str[i])) {
        result += String.fromCharCode((((str.charCodeAt(i) - 65) + (preparedKey.charCodeAt(i) - 65))
          % (this.alphabet.length)) + 65);
      } else result += str[i];
    }
    return result;
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) throw Error;
    let result = '';
    let str = encryptedMessage.toUpperCase();
    if (this.direction === false) str = str.split('').reverse().join('');
    let preparedKey = this.prepareKey(str, key);
    for ( let i = 0; i < str.length; i++) {
      if (this.alphabet.includes(str[i])) {
        result += String.fromCharCode((((str.charCodeAt(i) - 65) + (this.alphabet.length) 
          - (preparedKey.charCodeAt(i) - 65)) % (this.alphabet.length)) + 65);
      } else result += str[i];
    }
    return result;
  }
}

module.exports = VigenereCipheringMachine;
