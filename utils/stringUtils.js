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
        return string.length % 2 == 0 ? string.slice(0, string.length / 2) : 'your string is not even';
    }

    static deleteFirstAndLastCharacters(string) {
        return string.substring(1, string.length - 1);
    }

    static concatenateTwoStringExceptFirstCharacter(firstString, secondString) {
        return firstString.substring(1, firstString.length) + secondString.substring(1, secondString.length);
    }

    static moveNumberOfLastCharactersToStart(string, number) {
        return string.substring(string.length - number, string.length) + string;
    }

    static createStringUsingMiddleNumberOfCharactersOfOddString(string, number) {
        if (string.length % 2 !== 0) {
            const mid = Math.floor(string.length / 2);
            return string.slice(mid - Math.floor(number / 2), mid + Math.ceil(number / 2)); 
        } 
    }

    static concatenateTwoStringIfLengthDoesNotMatch(firstString, secondString) {
        const m = Math.min(firstString.length, secondString.length);

        return firstString.substring(0, m) + secondString.substring(0, m);
    }

    static changeCaseOfMinimumNumberOfLettersToMakeGivenStringWrittenInUpperOrLowerCase(string) {
        let upperCount = 0; 
        let lowerCount = 0; 
    
        for (let char of string) {
            if (char >= 'A' && char <= 'Z') {
                upperCount++;
            } else if (char >= 'a' && char <= 'z') {
                lowerCount++;
            }
        }
    
        if (upperCount > lowerCount) {
            return string.toUpperCase();
        } else {
            return string.toLowerCase();
        }
    }

    static checkWhetherItIsPossibleToRearrangeCharacters(firstString, secondString) {
        if (firstString.length === 0 || secondString.length === 0) {
            return false;
        }

        if (firstString.length != secondString.length) {
            return false;
        }

        const charCount1 = {};
        const charCount2 = {};

        for (let char of firstString) {
            charCount1[char] = (charCount1[char] || 0) + 1;
        }

        for (let char of secondString) {
            charCount2[char] = (charCount2[char] || 0) + 1;
        }

        for (let char in charCount1) {
            if (charCount1[char] !== charCount2[char]) {
                return false;
            }
        }

        return true;
    }

    static checkWhetherGivenStringConatinsOnlyLatinAndAlternatingCases(string) {
        const latinRegEx = /^[a-zA-Z]+$/;
        if (!latinRegEx.test(string)) {
            return false; 
        }
        for (let i = 1; i < string.length; i++) {
            const currentIsUpper = string[i] === string[i].toUpperCase();
            const previousIsUpper = string[i - 1] === string[i - 1].toUpperCase();

            
            if (currentIsUpper === previousIsUpper) {
                return false;
            }
        }
        return true; 
    }
}