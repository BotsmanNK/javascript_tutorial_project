export class DisplayUtils {
    static displayCurrentDay(dayName) {
        console.log(`Today is : ${dayName}.`);
    }

    static displayCurrentTime(time) {
        console.log(`Time right now is : ${time}`);
    }

    static displayTriangleArea(area, a, b, c) {
        console.log(`The area of a triangle where three sides are ${a}, ${b}, ${c} is : ${area}`);
    }

    static displayCurrentDayMonthYear(currentDay) {
        console.log(`Current date is ${currentDay}`);
    }
    
    static displayLeapYear(date) {
        console.log(`Current year is leap year: ${date}`);
    }

    static displayFirstJanuarySunday(year) {
        console.log(`1st Januray Sunday will be in ${year}`);
    }

    static displayMatchingResult(status) {
        console.log(status ? 'Good work' : 'Not matched');
    }

    static displayDaysLeftBeforeXmax(daysLeft) {
        console.log(`${daysLeft} days is left before Christmas`);
    }

    static displayCelsiusToFarenheit(celsiusTemp, celsiusToFarenheit) {
        console.log(`${celsiusTemp}°C is ${celsiusToFarenheit} °F.`);
    }

    static displayFarenheitToCelsius(fahrenheitTemp, farenheitToCelsius) {
        console.log(`${fahrenheitTemp}°F is ${farenheitToCelsius} °C`);
    }

    static displayFilenameExtension(fileExtension) {
        console.log(`Filename extension is ${fileExtension}`);
    }

    static displayDifferenceBetweenGivenNumberAnd13(difference, status) {
        const resultString = status ?
            `Difference between 13 and given number is ${difference}` :
            `Doubled difference between 13 and given number is ${difference}`;
        console.log(resultString);
    }

    static displaySumOfTwoGivenNumber(sum, status) {
        const resultString = status ?
            `Tripled the sum of given numbers is ${sum}` :
            `Sum of two given numbers is ${sum}`;
        console.log(resultString);
    }

    static displayAbsDifferenceBetweenGivenNumberAnd19(difference, status) {
        const resultString = status ?
            `Tripled the absolute difference of a given number and 19 is ${difference}` :
            `Absoulte difference between given number and 19 is ${difference}`;
        console.log(resultString);
    }

    static displayTrueOrFalseIfPair(status) {
        const resultString = status ? `True` : `False`;
        console.log(resultString);
    }

    static displayCheckRangeStatus(status) {
        const resultString = `Number is ${status ? '' : 'not '}within 20 of 100 or 400`;
        console.log(resultString);
    }

    static displayNumbersSigns(status) {
        const resultString = status ?
            `One number is negative other one positive` :
            `Both numbers have same sign`;
        console.log(resultString);
    }

    static displayUserString(status, string) {
        const resultString = status ?
            `Your word does start with Py your word is: ${string}` :
            `Your word doesn't start with Py your word is: ${string}`;
        console.log(resultString);
    }

    static displayUserStringDeletion(string) {
        const resultString = `Your new word after deletion is ${string}`;
        console.log(resultString);
    }

    static displayUserSwap(status, string) {
        const resultString = status ?
            `Word after chaning position of first and last character is: ${string}` :
            `Error, no character found for swap, please try again.`;
        console.log(resultString);
    }

    static displayUserFinEnd(string) {
        const resultString = `Your word after adding first character to front and back is: ${string}`;
        console.log(resultString);
    }

    static displayUserNumberCheck3And7(status) {
        const resultString = status ?
            `Your number is mutiple of 3 or 7` :
            `Your number is not mutiple of 3 or 7`;
        console.log(resultString);
    }

    static displayErrorUserInputNumberCheck3And7() {
        console.log(`Please enter a positive number`);
    }

    static displayUserThreeCharacter(string) {
        console.log(`Your new word is ${string}`);
    }

    static displayErrorUserInputLastThreeCharacter() {
        console.log(`Your word should be more than three characters`);
    }

    static displayUserStatusStartJava(status) {
        const resultString = status ?
            `Your word does start wtih Java` :
            `Your word does not start with Java`;
        console.log(resultString);
    }

    static displayTwoUserNumberIsWithinRange50And99(status) {
        const resultString = status ?
            `Either of them falls into a range of 50 and 99` :
            `Neither of them falls into a range of 50 and 99`;
        console.log(resultString);
    }

    static displayThreeUserNumberIsWithinRange50And99(status) {
        const resultString = status ?
            `Either of them falls into a range of 50 and 99` :
            `Neither of them falls into a range of 50 and 99`;
        console.log(resultString);
    }

    static displayStringHaveScript(status, string) {
        const resultString = status ?
            `Your string did include 'Script' in it, this is your new string: ${string}` :
            `Your string did not include 'Script' in it, this is your original string: ${string}`;
        console.log(resultString);
    }

    static displayLargestNumberAmongThree(number) {
        const resultString = `Your largest number among three is ${number}`;
        console.log(resultString);
    }

    static displayClosestNumberToHundred(number) {
        const resultString = `Closest number to 100 is: ${number}`;
        console.log(resultString);
    }

    static displayTwoNumberAreWithin40And60Or70And100(status) {
        const resultString = status ?
            `One of the numbers are with range of 40 and 60 or 70 and 100` :
            `One of the numbers are not within range of 40 and 60 or 70 and 100`;
        console.log(resultString);
    }

    static displayLargestNumberAmongTwoWithin40And60(status, number) {
        const resultString = status ?
            `The largest number within range is ${number}` :
            `One of the numbers are not within range of 40 and 60`;
        console.log(resultString);
    }

    static displayUserCharacterExistsWithinUserString(status) {
        const resultString = status ?
            `Your character exists between 2nd and 4th positions in a given string` :
            `Your character does not exists between 2nd and 4th positions in a given string`
        console.log(resultString)
    }

    static displayThreePositiveNumberHaveSameLastDigit(status) {
        const resultString = status ?
            `Three numbers do have same last digit` :
            `Three numbers don't have same last digit`;
        console.log(resultString);
    }

    static displayThreeCharactersToLowerCaseFromString(status, string) {
        const resultString = status ?
            `Your new string is: ${string}` :
            `Your string length was less than three characters your new string is: ${string}`;
        console.log(resultString);
    }

    static displayStundentExam(status) {
        const resultString = status;
        console.log(resultString);
    }

    static displaySumOfTwoGivenNumberInRange50And80(status) {
        const resultString = status ?
            `65` : `80`;
        console.log(resultString);
    }

    static displayIfNumberOrSumOrDiffrenceIs8(status) {
        const resultString = status ?
            `Either one of two numbers, their sum or difference was 8` :
            `Neither one of two numbers, their sum or difference was 8`;
        console.log(resultString);
    }

    static displayCheckSetThreeNumbers(result) {
        console.log(`The final result is: ${result}`);
    }

    static displayCheckStrictSoftMode(result) {
        console.log(`The three given number is increasing in: ${result}`);
    }

    static displayThreeNumbersHaveSameRightDigit(result) {
        console.log(`The result of check shows that: ${result}`);
    }

    static displayThreeNumbersGreaterThan20(result) {
        console.log(`After evaluation the result is: ${result}`);
    }

    static displayIfNumberOrSumOrDiffrenceIs15(status) {
        const resultString = status ?
            `Either one of two numbers, their sum or difference was 15` :
            `Neither one of two numbers, their sum or difference was 15`;
        console.log(resultString);
    }
 }