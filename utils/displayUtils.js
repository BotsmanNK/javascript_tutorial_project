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
 }