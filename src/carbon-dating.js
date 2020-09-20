const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof(sampleActivity) !== "string") return false; 
    if (!(/^[1]?[\d]\.\d+$/.test(sampleActivity))) return false;
    const sample = Number(sampleActivity);
    if (sample > 15) return false;

    let result = Math.log(MODERN_ACTIVITY / sample) / (Math.log(2) / HALF_LIFE_PERIOD);
    
    return Math.ceil(result);
};
