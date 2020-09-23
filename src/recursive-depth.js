const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.count = 1;
    this.result = 1;
  }
  calculateDepth(arr) {
    for (let item of arr) {
      if (typeof item === 'object') {
        this.count += 1;
        this.calculateDepth(item);
      }
    }
  if (this.result < this.count) 
    this.result = this.count;
  this.count = 1;
  return this.result;
  }
}; 