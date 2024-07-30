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
}