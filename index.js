import { DateTimeUtils } from './utils/datetimeUtils.js';
import { DisplayUtils } from './utils/displayUtils.js';
import { GeometryUtils } from './utils/geometryUtils.js';
import { RandomUtils } from './utils/randomUtils.js';
import { ReadLineUtils } from './utils/readlineUtils.js';
import { TemperatureUtils } from './utils/temperatureUtils.js';

   // Write a function to display the current day and time in the following format.  
   // Sample Output : Today is : Tuesday.
   // Current time is : 10 PM : 30 : 38

function displayCurrentDayAndTime() {
    const now = new Date();
    const currentDay = DateTimeUtils.getDay(now);
    const currentTime = DateTimeUtils.getTime(now);

    DisplayUtils.displayCurrentDay(currentDay);
    DisplayUtils.displayCurrentTime(currentTime);
}

displayCurrentDayAndTime();

    // Write a function to get the current date.  
    // Expected Output :
    // mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

function displayCurrentDayMonthYear() {
    const today = new Date();
    const currentDay = DateTimeUtils.getCurrentDay(today);

    DisplayUtils.displayCurrentDayMonthYear(currentDay);
}

displayCurrentDayMonthYear();

    //Write a function to find the area of a triangle where three sides are 5, 6, 7.  

function displayTriangleArea(){
    const a = 5;
    const b = 6;
    const c = 7;
    const area = GeometryUtils.findTriangleArea(a, b, c);

    DisplayUtils.displayTriangleArea(area, a, b, c);
}

displayTriangleArea();

    //Write a function to determine whether a given year is a leap year in the Gregorian calendar.  

function displayLeapYear(){
    const year = new Date();
    const isLeapYear = DateTimeUtils.leapYear(year)
    DisplayUtils.displayLeapYear(isLeapYear);
}

displayLeapYear(); 

    //Write a function to find out if 1st January will be a Sunday between 2014 and 2050. 

function sundayFirstJanuary() {
    let currentDate = new Date(2014, 0, 1);
    for (let i = 0; i <= 36; i++) {
        
        //0 is Sunday
        if (currentDate.getDay() == 0) { 
            let year = currentDate.getFullYear();
            DisplayUtils.displayFirstJanuarySunday(year);
        }

        DateTimeUtils.addYear(currentDate);
    }
}

sundayFirstJanuary();

    //Write a function where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. 
    //The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  


function randomNumberUpToTen() {
    const randomNumber = RandomUtils.getRandomIntInclusive(1, 10);
    const userNumber = ReadLineUtils.readNumberUpToTen();
    
    DisplayUtils.displayMatchingResult(randomNumber == userNumber);
}

randomNumberUpToTen();

    //Write a function to calculate the days left before Christmas. 

function daysLeftBeforeXmax() {
    const dateNow = new Date();
    const currentYear = dateNow.getFullYear();
    const currentMonth = dateNow.getMonth();
    const currentDay = dateNow.getDay();

    // 11 is December, 25 is Christmas date
    const dateXmax = new Date(currentYear, 11, 25);

    if (currentMonth == 11 && currentDay > 25) {
        DateTimeUtils.addYear(dateXmax);
    }

    // oneDay in miliseconds
    const oneDay = 1000 * 60 * 60 * 24; 

    const daysLeft = Math.ceil((dateXmax.getTime() - dateNow.getTime()) / oneDay);

    DisplayUtils.displayDaysLeftBeforeXmax(daysLeft);
}

daysLeftBeforeXmax();

    //Write a function to convert temperatures to and from Celsius, Fahrenheit.  
    //[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
    //Expected Output :
    //60°C is 140 °F
    //45°F is 7.222222222222222°C

function temperatureConverstion() {
    const celsiusTemp = 60;
    const celsiusToFarenheit = TemperatureUtils.celsiusToFarenheit(celsiusTemp);

    const fahrenheitTemp = 45;
    const farenheitToCelsius = TemperatureUtils.farenheitToCelsius(fahrenheitTemp);

    DisplayUtils.displayCelsiusToFarenheit(celsiusTemp, celsiusToFarenheit);
    DisplayUtils.displayFarenheitToCelsius(fahrenheitTemp, farenheitToCelsius);
}

temperatureConverstion();



function multiply(a, b){
    return a * b;
}

let result = multiply(2, 2); 