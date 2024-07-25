import { DateTimeUtils } from './utils/datetimeUtils.js';
import { DisplayUtils } from './utils/displayUtils.js';
import { FileUtils } from './utils/fileUtils.js';
import { GeometryUtils } from './utils/geometryUtils.js';
import { RandomUtils } from './utils/randomUtils.js';
import { ReadLineUtils } from './utils/readlineUtils.js';
import { TemperatureUtils } from './utils/temperatureUtils.js';
import { MathUtils } from './utils/mathUtils.js';

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


async function randomNumberUpToTen() {
    const randomNumber = RandomUtils.getRandomIntInclusive(1, 10);
    const userNumber = await ReadLineUtils.readNumberUpToTen();
    DisplayUtils.displayMatchingResult(randomNumber == userNumber);
}

await randomNumberUpToTen();

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
    const fahrenheitTemp = 45;
    
    //2 is number of digits where to round
    const celsiusToFarenheit = MathUtils.round(TemperatureUtils.celsiusToFarenheit(celsiusTemp), 2);
    const farenheitToCelsius = MathUtils.round(TemperatureUtils.farenheitToCelsius(fahrenheitTemp), 2);

    DisplayUtils.displayCelsiusToFarenheit(celsiusTemp, celsiusToFarenheit);
    DisplayUtils.displayFarenheitToCelsius(fahrenheitTemp, farenheitToCelsius);
}

temperatureConverstion();

    //Write a function to get the filename extension.

function filenameExtension() {
    const fileName = 'babel.js';
    const fileExt = FileUtils.getFileExtension(fileName);

    DisplayUtils.displayFilenameExtension(fileExt);
}

filenameExtension();

    //Write a function to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.  

async function differenceBetweenNumberAnd13() {
    const userNumber = await ReadLineUtils.readInitialNumber();
    const status = userNumber <= 13;
    const difference = userNumber - 13;
    const result = status ? difference : difference * 2;

    DisplayUtils.displayDifferenceBetweenGivenNumberAnd13(result, status);
}

await differenceBetweenNumberAnd13();

    //Write a function to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

async function computeSumOfTwoIntegers() {
    const firstUserNumber = await ReadLineUtils.readFirstNumber();
    const secondUserNumber = await ReadLineUtils.readSecondNumber();
    
    const sum = firstUserNumber + secondUserNumber;
    const status = firstUserNumber == secondUserNumber;
    const result = status ? sum * 3 : sum;

    DisplayUtils.displaySumOfTwoGivenNumber(result, status);
}

await computeSumOfTwoIntegers();

    //Write a function to compute the absolute difference between a specified number and 19. 
    //Returns triple the absolute difference if the specified number is greater than 19.  

async function absoluteDifference() {
    const userNumber = await ReadLineUtils.readDifferenceNumber();

    const difference = Math.abs(userNumber - 19);
    const status = userNumber > 19;
    const result = status ? difference * 3 : difference;

    DisplayUtils.displayAbsDifferenceBetweenGivenNumberAnd19(result, status);
}

await absoluteDifference();

    //Write a function to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.  

async function pairNumbers() {
    const firstUserNumber = await ReadLineUtils.readFirstPairNumber();
    const secondUserNumber = await ReadLineUtils.readSecondPairNumber();

    const sum = firstUserNumber + secondUserNumber;
    const result = firstUserNumber == 50 || secondUserNumber == 50 || sum == 50;

    DisplayUtils.displayTrueOrFalseIfPair(result);
}

await pairNumbers();

    //Write a function to check whether a given integer is within 20 of 100 or 400.  

async function checkRangeStatus() {
    const userNumber = await ReadLineUtils.readNumberWithinRanges();

    const isWithinFirstRange = userNumber >= 80 && userNumber <= 120;
    const isWithinSecondRange = userNumber >= 380 && userNumber <= 420;
    const result = isWithinFirstRange || isWithinSecondRange;

    DisplayUtils.displayCheckRangeStatus(result);
}

await checkRangeStatus();

    //Write a function to check two given integers whether one is positive and another one is negative.  

async function checkNumberSigns() {
    const firstUserNumber = await ReadLineUtils.readFirstNumberSign();
    const secondUserNumber = await ReadLineUtils.readSecondNumberSign();

    const isNegativeAndPositive = firstUserNumber < 0 && secondUserNumber > 0;
    const isPositiveAndNegative = firstUserNumber > 0 && secondUserNumber < 0;
    const result = isNegativeAndPositive || isPositiveAndNegative;

    DisplayUtils.displayNumbersSigns(result);
}

await checkNumberSigns();

function multiply(a, b){
    return a * b;
}

let result = multiply(2, 2); 