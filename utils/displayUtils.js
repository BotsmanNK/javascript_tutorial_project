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
 }