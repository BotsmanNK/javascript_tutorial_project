const prompt = require('prompt-sync')();

class ReadLineUtils {
    static readNumberUpToTen() {
        return Number(prompt("Please enter a number between 1 to 10 "));
    }
}

module.exports = ReadLineUtils;