export class StringUtils {
    static swapCharacters(string, numberOfCharacters) {
        const start = string.substring(string.length - numberOfCharacters, string.length);
        const mid = string.substring(numberOfCharacters, string.length - numberOfCharacters);
        const end = string.substring(0, numberOfCharacters);
        return start + mid + end;
    }

    static addingLastCharacters(string, numberOfCharacters) {
        const characters = string.substring(string.length - numberOfCharacters, string.length);
        return characters + string + characters;
    }

    static removeCharacters(string, startIndex, endIndex) {
        const characters = string.split('');
        characters.splice(startIndex, endIndex - startIndex);
        return characters.join('');
    }

    static changeToLowerCase(string, startIndex, endIndex) {
        const firstPart = string.substring(startIndex, endIndex + 1).toLowerCase();
        const secondPart = string.substring(endIndex + 1, string.length);
        return firstPart + secondPart;
    }

    static reverseString(string) {
        return string.split("").reverse().join("");
    }

    static changingEachCharacter(string) {
        let result = [];
        for (let i = 0; i < string.length; i++) {
            switch (string[i]) {
                case ' ':
                    result.push(' ');
                    break;

                case 'z':
                    result.push('a');
                    break;

                case 'Z':
                    result.push('A');
                    break;

                default:
                    result.push(String.fromCharCode(1 + string[i].charCodeAt(0)));
                    break;
            }
        }
        return result.join('');
    }

    static capitalizingEachWord(string) {
            const words = string.split(" ");
        
            for (let i = 0; i < words.length; i++) {
                if (words[i]) { 
                words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            }
        }
        
        return words.join(" ");
    }

    static checkIfStringIsEvenAndExtractFirstHalf(string) {
        
        if (string.length % 2 == 0) {
            let resultString = string.slice(0, string.length / 2);
            return resultString
        } else {
            let resultString = `your string is not even`;
            return resultString;
        }
    }

    static deleteFirstAndLastCharacters(string) {
        return string.substring(1, string.length - 1);
    }

    static concatenateTwoStringExceptFirstCharacter(firstString, secondString) {
        return firstString.substring(1, firstString.length) + secondString.substring(1, secondString.length);
    }

    static moveNumberOfLastCharactersToStart(string, number) {
        const last = string.substring(string.length - number, string.length);

        return last + string;
    }

    static createStringUsingMiddleNumberOfCharactersOfOddString(string, number) {

        if (string.length % 2 !== 0) {
            const mid = Math.floor(string.length / 2);
            return string.slice(mid - Math.floor(number / 2), mid + Math.ceil(number / 2)); 
        } 
    }

    static concatenateTwoStringIfLengthDoesNotMatch(firstString, secondString) {
        const m = Math.min(firstString.length, secondString.length);

        const firstStringReverse = this.reverseString(firstString);
        const secondStringReverse = this.reverseString(secondString);

        const changedFirstString = firstStringReverse.substring(firstString.length - m);
        const changedSecondString = secondStringReverse.substring(secondStringReverse.length - m)

        return this.reverseString(changedFirstString) + this.reverseString(changedSecondString);
    }
}