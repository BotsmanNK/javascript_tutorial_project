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
        console.log(`${daysLeft} days is left before Christmas`)
    }

    static displayCelsiusToFarenheit(celsiusTemp, celsiusToFarenheit) {
        console.log(`${celsiusTemp}°C is ${celsiusToFarenheit} °F.`)
    }

    static displayFarenheitToCelsius(fahrenheitTemp, farenheitToCelsius) {
        console.log(`${fahrenheitTemp}°F is ${farenheitToCelsius} °C`)
    }
}