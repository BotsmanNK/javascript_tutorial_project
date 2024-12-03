import { DateTimeUtils } from './utils/datetimeUtils.js';
import { DisplayUtils } from './utils/displayUtils.js';
import { FileUtils } from './utils/fileUtils.js';
import { GeometryUtils } from './utils/geometryUtils.js';
import { RandomUtils } from './utils/randomUtils.js';
import { ReadLineUtils } from './utils/readlineUtils.js';
import { TemperatureUtils } from './utils/temperatureUtils.js';
import { MathUtils } from './utils/mathUtils.js';
import { StringUtils } from './utils/stringUtils.js';
import { ArrayUtils } from './utils/arrayUtils.js';

   // Write a function to display the current day and time in the following format.  
   // Sample Output : Today is : Tuesday.
   // Current time is : 10 PM : 30 : 38
/*
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

    const isWithinFirstRange = MathUtils.withinRange(userNumber, 80, 120);
    const isWithinSecondRange = MathUtils.withinRange(userNumber, 380, 420);
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

    //Write a function to create another string by adding "Py" in front of a given string. 
    //If the given string begins with "Py" return the original string.  

async function addPyToString() {
    const userString = await ReadLineUtils.readUserString();

    const checkStart = userString.substring(0, 2) === 'Py';
    const result = checkStart ? userString : 'Py' + userString;
    DisplayUtils.displayUserString(checkStart, result);
}

await addPyToString();

    //Write a function to remove a character at the specified position in a given string and return the modified string.  

async function removeCharacterAtPostion() {
    const userString = await ReadLineUtils.readUserStringDeletion();
    const userPosition = await ReadLineUtils.readUserPosition();

    const result = userString.substring(0, userPosition) + userString.substring(userPosition + 1, userString.length);

    DisplayUtils.displayUserStringDeletion(result);
}

await removeCharacterAtPostion();

    //Write a function to create a new string from a given string by changing the position of the first and last characters. 
    //The string length must be broader than or equal to 1.  

async function switchFirstAndLastCharacthersPosition() {
    let resultString = await ReadLineUtils.readUserStringSwap();
    const length = resultString.length;

    const result = length != 0;
    if (length > 1) {
        const midString = resultString.substring(1, length - 1);
        resultString = resultString.charAt(length - 1) + midString + resultString.charAt(0);
    }

    DisplayUtils.displayUserSwap(result, resultString);
}

await switchFirstAndLastCharacthersPosition();

    //Write a function to create another string from a given string with the first character of the given string 
    //added to the front and back.  

async function addFirstCharatherToStartAndEnd() {
    const userString = await ReadLineUtils.readUserStringFinEnd();

    const firstCharacther = userString.substring(0, 1);
    const resultString = firstCharacther + userString + firstCharacther;

    DisplayUtils.displayUserFinEnd(resultString);
}

await addFirstCharatherToStartAndEnd();

    //Write a function to check whether a given positive number is a multiple of 3 or 7.  

async function checkingIfNumberIsMutiple() {
    const userNumber = await ReadLineUtils.readUserNumberCheck();
    if (userNumber < 0) {
        DisplayUtils.displayErrorUserInputNumberCheck3And7();
        return;
    }

    const userNumberCheck = userNumber % 3 === 0 || userNumber % 7 === 0;

    DisplayUtils.displayUserNumberCheck3And7(userNumberCheck);
}

await checkingIfNumberIsMutiple();

    //Write a function to create a string from a given string. 
    //This is done by taking the last 3 characters and adding them at both the front and back.
    //The string length must be 3 or more.

async function addLastThreeCharactersToString() {
    const userString = await ReadLineUtils.readUserStringThreeCharacters();

    if (userString.length < 3) {
        DisplayUtils.displayErrorUserInputShouldBeMoreThanThreeCharacter();
        return;
    }

    const result = StringUtils.addingLastCharacters(userString, 3);

    DisplayUtils.displayUserThreeCharacter(result);
}

await addLastThreeCharactersToString();

    //Write a function to check whether a string starts with 'Java' if it does not otherwise.  

async function checkStringStartsWithJava() {
    const userString = await ReadLineUtils.readUserStringToCheckJava();

    const status = userString.substring(0, 4) == `Java`;
    
    DisplayUtils.displayUserStatusStartJava(status);
}

await checkStringStartsWithJava();

    //Write a function to check whether two given integer values are in the range 50..99 (inclusive). 
    //Return true if either of them falls within the range.

async function checkNumberIsWithinRange50And99() {
    const userNumberOne = await ReadLineUtils.readUserFirstNumberIsWithinRange50And99();
    const userNumberTwo = await ReadLineUtils.readUserSecondNumberIsWithinRange50And99();
    
    const checkFirstNumberRange = MathUtils.withinRange(userNumberOne, 50, 99);
    const checkSecondNumberRange = MathUtils.withinRange(userNumberTwo, 50, 99);
    const result = checkFirstNumberRange || checkSecondNumberRange;

    DisplayUtils.displayTwoUserNumberIsWithinRange50And99(result);
}

await checkNumberIsWithinRange50And99();

    //Write a function to check whether three given integer values are in the range 50..99 (inclusive). 
    //Return true if one or more of them are in the specified range.

async function checkIfThreeNumbersIsWithinRange50And99() {
    const userNumberOne = await ReadLineUtils.readUserFirstNumberIsWithinRange50And99();
    const userNumberTwo = await ReadLineUtils.readUserSecondNumberIsWithinRange50And99();
    const userNumberThree = await ReadLineUtils.readUserThirdNumberIsWithinRange50And99();

    const result = MathUtils.anyWithinRange([userNumberOne, userNumberTwo, userNumberThree], 50, 99);
    
    DisplayUtils.displayThreeUserNumberIsWithinRange50And99(result);
}

await checkIfThreeNumbersIsWithinRange50And99();

    //Write a function to check whether a string "Script" appears at the 5th (index 4) position in a given string. 
    //If "Script" appears in the string, return the string without "Script" otherwise return the original one.
    
async function checkIfScriptAppearsAtIndex() {
    let resultString = await ReadLineUtils.readUserStringScript();

    const result = resultString.substring(4, 10) == `Script`;
    if (result) {
        resultString = StringUtils.removeCharacters(resultString, 4, 10);
    } 

    DisplayUtils.displayStringHaveScript(result, resultString);
}

await checkIfScriptAppearsAtIndex();

    //Write a function to find the largest of three given integers.  

async function findLargestOfThreeGivenIntegers() {
    const userNumberOne = await ReadLineUtils.readUserFirstNumberToCheckLargest();
    const userNumberTwo = await ReadLineUtils.readUserSecondNumberToCheckLargest();
    const userNumberThree = await ReadLineUtils.readUserThirdNumberToCheckLargest();
    
    const largestNumber = Math.max([userNumberOne, userNumberTwo, userNumberThree]);

    DisplayUtils.displayLargestNumberAmongThree(largestNumber);
}

await findLargestOfThreeGivenIntegers();

    //Write a function to find the closest value to 100 from two numerical values.  

async function findClosestValueToOneHundredAmongTwoNumbers() {
    const userNumberOne = await ReadLineUtils.readUserFirstNumberToCheckClosestToHundred();
    const userNumberTwo = await ReadLineUtils.readUserSecondNumberToCheckClosestToHundred();

    const resultNumber = MathUtils.closestNumberToNeededNumberAmongstTwoNumber(userNumberOne, userNumberTwo, 100)
    DisplayUtils.displayClosestNumberToHundred(resultNumber);
}

await findClosestValueToOneHundredAmongTwoNumbers();

    //Write a function to check whether two numbers are in the range 40..60 or 70..100 inclusive.  

async function checkTwoNumberAreInRange40And60Or70And100() {
    const userNumberOne = await ReadLineUtils.readFirstNumberOfTwoNumberAreInRange40And60Or70And100();
    const userNumberTwo = await ReadLineUtils.readSecondNumberOfTwoNumberAreInRange40And60Or70And100();

    const firstNumberOneCheck = MathUtils.anyWithinRange([userNumberOne, userNumberTwo], 40, 60);
    const firstNumberTwoCheck = MathUtils.anyWithinRange([userNumberOne, userNumberTwo], 70, 100);

    const result = firstNumberOneCheck && firstNumberTwoCheck;

    DisplayUtils.displayTwoNumberAreWithin40And60Or70And100(result);
}

await checkTwoNumberAreInRange40And60Or70And100();

    //Write a function to find the largest number from the two given positive integers. 
    //The two numbers are in the range 40..60 inclusive.

async function findLargestNumberFromTwoWithin40And60Range() {
    const userNumberOne = await ReadLineUtils.readFirstNumberLargestWithinRangeOf40And60();
    const userNumberTwo = await ReadLineUtils.readSecondNumberLargestWithinRangeOf40And60();

    const rangeCheck = MathUtils.allWithinRange([userNumberOne, userNumberTwo], 40, 60);
    const largestNumber = Math.max([userNumberOne, userNumberTwo]);

    DisplayUtils.displayLargestNumberAmongTwoWithin40And60(rangeCheck, largestNumber);
}

await findLargestNumberFromTwoWithin40And60Range();

    //Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.  

async function checkCharactherExistsBetween2ndAnd4thPositionInString() {
    const userString = await ReadLineUtils.readUserStringToCheckCharacther();
    const userCharacter = await ReadLineUtils.readUserCharacterInString();

    const stringCheck = userString.substring(1, 4).includes(userCharacter);

    DisplayUtils.displayUserCharacterExistsWithinUserString(stringCheck);
}

await checkCharactherExistsBetween2ndAnd4thPositionInString();

    //Write a function that checks whether the last digit of three positive integers is the same.  

async function checkLastDigitsOfThreePositiveIsSame() {
    const firstNumber = await ReadLineUtils.readFirstNumberToCheckIfItHasSameLastDigit();
    const secondNumber = await ReadLineUtils.readSecondNumberToCheckIfItHasSameLastDigit();
    const thirdNumber = await ReadLineUtils.readThirdNumberToCheckIfItHasSameLastDigit();

    const result = MathUtils.checkIfLastDigitIsPositiveForThreePositiveNumbers(firstNumber, secondNumber, thirdNumber);

    DisplayUtils.displayThreePositiveNumberHaveSameLastDigit(result);
}

await checkLastDigitsOfThreePositiveIsSame();

    //Write a function to produce a new string that has the first 3 characters in lower case from a given string. 
    //If the string length is less than 3 convert all the characters to upper case.

async function convertThreeCharactersToLowerCaseFromString() {
    const userString = await ReadLineUtils.readUserStringToConvertToLowerCase();

    const lengthCheck = userString.length > 3;    

    const resultString = lengthCheck ?
        StringUtils.changeToLowerCase(userString, 0, 2) :
        userString.toUpperCase();

    DisplayUtils.displayThreeCharactersToLowerCaseFromString(lengthCheck, resultString);
}

await convertThreeCharactersToLowerCaseFromString();

    //Write a function to evaluate a student's total marks across various examinations and determine their grade. 
    //The grading criteria are as follows:
    //If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade.
    //If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their total marks are 90 or greater.
    //Assume that final examination means we pass 'true' as second parameter otherwise blank.
    //If the student achieves an A+ grade, the program should return 'true'; otherwise, it should return 'false'.
    
async function evaluateStudentTotalMarksAcross() {
    const stundentMark = await ReadLineUtils.readStundentMarkForExam();
    const finalExam = await ReadLineUtils.readStudentFinalExam();

    const checkFinalExam = finalExam == `yes`;
    
    const result = checkFinalExam ? stundentMark >= 90 : stundentMark >= 89;

    DisplayUtils.displayStundentExam(result);
}

await evaluateStudentTotalMarksAcross();

    //Write a function to compute the sum of the two given integers. 
    //If the sum is in the range 50..80 return 65 otherwise return 80.

async function computeSumOfNumberWithRange50And80() {
    const firstNumber = await ReadLineUtils.readUserFirstNumberToCheckRange50And80();
    const secondNumber = await ReadLineUtils.readUserSecondNumberToCheckRange50And80();

    const sum = firstNumber + secondNumber;
    const sumCheck = MathUtils.withinRange(sum, 50, 80);

    DisplayUtils.displaySumOfTwoGivenNumberInRange50And80(sumCheck);
}

await computeSumOfNumberWithRange50And80();

    //Write a function to check from two given integers whether one of them is 8 or their sum or difference is 8.  

async function checkIfNumberOrSumOrDiffrenceIs8() {
    const firstUserNumber = await ReadLineUtils.readUserFirstNumberOrSumOrDiffrenceIs8();
    const secondUserNumber = await ReadLineUtils.readUserSecondNumberOrSumOrDiffrenceIs8();

    const numberSum = firstUserNumber + secondUserNumber;
    const numberDiff = Math.abs(firstUserNumber - secondUserNumber);
    const numberCheck = firstUserNumber == 8 || secondUserNumber == 8 || numberSum == 8 || numberDiff == 8;

    DisplayUtils.displayIfNumberOrSumOrDiffrenceIs8(numberCheck);
}

await checkIfNumberOrSumOrDiffrenceIs8();

    //Write a function to check a set of three numbers; 
    //if the three numbers are the same return 30; 
    //otherwise return 20; and if two numbers are the same return 40.  
    
async function checkSetThreeNumber() {
    const firstUserNumber = await ReadLineUtils.readUserFirstNumberCheckSetOfThree();
    const secondUserNumber = await ReadLineUtils.readUserSecondNumberCheckSetOfThree();
    const thirdUserNumber = await ReadLineUtils.readUserThirdNumberCheckSetOfThree();

    const firstSecondNumberCheck = firstUserNumber == secondUserNumber;
    const secondThirdNumberCheck = secondUserNumber == thirdUserNumber;
    const firstThirdNumberCheck = firstUserNumber == thirdUserNumber;

    let result = 20;
    if (firstSecondNumberCheck && secondThirdNumberCheck) {
        result = 30;
    } else if (firstSecondNumberCheck || secondThirdNumberCheck || firstThirdNumberCheck) {
        result = 40;
    } 

    DisplayUtils.displayCheckSetThreeNumbers(result);
}

await checkSetThreeNumber();

    //Write a function to check whether three given numbers are increasing in strict or in soft mode.  
    //Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31
    
async function checkThreeGivenNumberStrictSoftMode() {
    const firstUserNumber = await ReadLineUtils.readUserFirstNumberStrictSoftMode();
    const secondUserNumber = await ReadLineUtils.readUserSecondNumberStrictSoftMode();
    const thirdUserNumber = await ReadLineUtils.readUserThirdNumberStrictSoftMode();

    const strictModeCheck = firstUserNumber < secondUserNumber && secondUserNumber < thirdUserNumber;
    const softModeCheck = secondUserNumber < thirdUserNumber;

    let result = 'undefined';
    if (strictModeCheck) {
        result = 'Strict mode'
    } else if (softModeCheck) {
        result = 'Soft mode'
    }

    DisplayUtils.displayCheckStrictSoftMode(result);
}

await checkThreeGivenNumberStrictSoftMode();

    //Write a function to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.  
    
async function checkThreeNumberHaveSameRightmostDigit() {
    const firstNumber = await ReadLineUtils.readFirstOfThreeNumberHaveSameRightmostDigit();
    const secondNumber = await ReadLineUtils.readSecondOfThreeNumberHaveSameRightmostDigit();
    const thirdNumber = await ReadLineUtils.readThirdOfThreeNumberHaveSameRightmostDigit();

    const allNumbersSame = MathUtils.checkIfLastDigitIsSameForThreeNumbers(firstNumber, secondNumber, thirdNumber);
    const twoNumbersSame = MathUtils.checkIfLastDigitIsSameForTwoOfThreePositiveNumbers(firstNumber, secondNumber, thirdNumber);

    let result = 'undefined'
    if (allNumbersSame) {
        result = 'all of them have same rightmost digit'
    } else if (twoNumbersSame) {
        result = 'two of them have same rightmost digit'
    } else {
        result = 'none of them have same rightmost digit'
    }

    DisplayUtils.displayThreeNumbersHaveSameRightDigit(result);
}

await checkThreeNumberHaveSameRightmostDigit();

    //Write a function that evaluates three given integers to determine if any one of them is greater than or equal to 20 
    //and less than at least one of the other two.  

async function checkThreeGivenNumbersGreaterOrEqual20() {
    const firstNumber = await ReadLineUtils.readFirstOfThreeNumberGreaterThan20();
    const secondNumber = await ReadLineUtils.readSecondOfThreeNumberGreaterThan20();
    const thirdNumber = await ReadLineUtils.readThirdOfThreeNumberGreaterThan20();

    const check = MathUtils.checkIfThreeNumbersLessThanGivenNumber(firstNumber, secondNumber, thirdNumber, 20);

    let result = 'undefined';
    if (check) {
        result = 'one of the numbers is at least 20 and less than at least one of the other numbers';
    } else {
        result = 'no number is at least 20 and less than at least one of the other numbers';
    }

    DisplayUtils.displayThreeNumbersGreaterThan20(result);
}

await checkThreeGivenNumbersGreaterOrEqual20()

    //Write a function that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.  

async function checkIfNumberSumOrDiffIs15() {
    const firstUserNumber = await ReadLineUtils.readFirstNumberSumOrDiffIs15();
    const secondUserNumber = await ReadLineUtils.readSecondNumberSumOrDiffIs15();

    const numberSum = firstUserNumber + secondUserNumber;
    const numberDiff = Math.abs(firstUserNumber - secondUserNumber);
    const numberCheck = firstUserNumber == 15 || secondUserNumber == 15 || numberSum == 15 || numberDiff == 15;

    DisplayUtils.displayIfNumberOrSumOrDiffrenceIs15(numberCheck);
}

await checkIfNumberSumOrDiffIs15();

    //Write a function to check two given non-negative integers if one (not both) is a multiple of 7 or 11.  

async function checkTwoNumberIsMutipleOf7And11() {
    const firstUserNumber = await ReadLineUtils.readFirstNumberMultiple7Or11();
    const secondUserNumber = await ReadLineUtils.readSecondNumberMultiple7Or11();

    const positiveCheck = firstUserNumber > 0 && secondUserNumber > 0;
    const firstNumberMultiple = firstUserNumber % 7 == 0 || firstUserNumber % 11 == 0;
    const secondNumberMultiple = secondUserNumber % 7 == 0 || secondUserNumber % 11 == 0;

    let result;
    if (!(firstNumberMultiple && secondNumberMultiple) && positiveCheck) {
        result = firstNumberMultiple || secondNumberMultiple
    } else {
        result = false
    }

    DisplayUtils.displayCheckNumberIsMultipleOf7Or11(result);
}

await checkTwoNumberIsMutipleOf7And11();

    //Write a function to check whether a given number exists in the range 40..10000.  
    //For example 40 presents in 40 and 4000
    
async function checkIfGivenNumberExistsInRange40To10000() {
    const userNumber = await ReadLineUtils.readUserNumberCheckRange40To10000();

    const result = MathUtils.withinRange(userNumber, 40, 10000);

    DisplayUtils.displayNumberWithin40And10000(result, userNumber);
}

await checkIfGivenNumberExistsInRange40To10000();

    //Write a function to reverse a given string.  
    
async function reverseString() {
    const userString = await ReadLineUtils.readUserStringForReverse();

    const resultString = StringUtils.reverseString(userString);

    DisplayUtils.displayReverseString(resultString);
}

await reverseString();

    //Write a function to replace every character in a given string with the character following it in the alphabet.  
    
async function replaceEveryCharacterInStringWithCharacterFollowingIt() {
    const userString = await ReadLineUtils.readUserStringForReplacingEachCharacter();

    const resultString = StringUtils.changingEachCharacter(userString);

    DisplayUtils.displayStringEachCharacterChanged(resultString);
}

await replaceEveryCharacterInStringWithCharacterFollowingIt();

    //Write a function to capitalize the first letter of each word in a given string.  
    
async function capitalizeFirstLetterOfEachWord() {
    const userString = await ReadLineUtils.readUserStringForCapitalizeFirstLetterOfEachWord();
    
    const resultString = StringUtils.capitalizingEachWord(userString);

    DisplayUtils.displayCapitalizingEachWord(resultString);
}

await capitalizeFirstLetterOfEachWord();

    //Write a JavaScript application that transforms a provided numerical value into hours and minutes.  

async function convertNumberToHoursAndMinutes() {
    const userNumber = await ReadLineUtils.readUserNumberConvertNumberToHoursAndMinutes();

    const hours = Math.floor(userNumber / 60);
    const minutes = userNumber % 60;

    DisplayUtils.displayConvertNumberToHoursAndMinutes(hours, minutes);
}

await convertNumberToHoursAndMinutes();

    //Write a function to convert letters of a given string alphabetically.  
    
async function convertLettersAlphabetically() {
    const userString = await ReadLineUtils.readUserStringToConvertAlphabetically();

    const resultString = userString.split('').sort().join('');

    DisplayUtils.displayConvertLettersAlphabetically(resultString);
}

await convertLettersAlphabetically();

    //Write a function to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string. 

async function checkCharactersAAndBAreSeparatedBy3Places() {
    const userString = await ReadLineUtils.readUserStringCheckCharactersAAndBAreSeparatedBy3Places();

    const check = (/a...b/).test(userString) || (/b...a/).test(userString);

    DisplayUtils.displayCheckCharactersAAndBAreSeparatedBy3Places(check);
}

await checkCharactersAAndBAreSeparatedBy3Places();

    //Write a function to count the number of vowels in a given string.
    
async function countVowelsInString() {
    const userString = await ReadLineUtils.readUserStringCountVowels();

    const result = userString.replaceAll(/[^aeiou]/g, '').length;

    DisplayUtils.displayCountVowels(result);
}

await countVowelsInString();

    //Write a function to check whether a given string contains an equal number of p's and t's.  
    
async function checkStringContainsEqualNumberOfPAndT() {
    const userString = await ReadLineUtils.readUserStringCheckStringContainsEqualNumberOfPAndT();

    const numberOfP = userString.replaceAll(/[^p]/g, '').length;
    const numberOfT = userString.replaceAll(/[^t]/g, '').length;

    const result = numberOfP == numberOfT;

    DisplayUtils.displayUserStringCheckStringContainsEqualNumberOfPAndT(result);
}

await checkStringContainsEqualNumberOfPAndT();

    //Write a function to divide two positive numbers and return the result as string with properly formatted commas.
    
async function divideTwoPositiveNumbersAndReturnResultProperly() {
    const firstUserNumber = await ReadLineUtils.readFirstUserNumberToDivide();
    const secondUserNumber = await ReadLineUtils.readSecondUserNumberToDivide();

    const result = firstUserNumber / secondUserNumber;
    const formattedResult = result.toLocaleString(undefined, {maximumFractionDigits: 2});
    
    DisplayUtils.displayDivideTwoNumberAndReturnResultProperply(formattedResult);
}

await divideTwoPositiveNumbersAndReturnResultProperly();

    //Write a function to create one string of specified copies (positive numbers) of a given string.  
       
async function createOneStringOfCopiesOfGivenString() {
    const userString = await ReadLineUtils.readUserStringOfCopiesOfGivenString();
    const userNumber = await ReadLineUtils.readUserNumberAmountOfCopies();

    const result = userString.repeat(userNumber);

    DisplayUtils.displayStringMutipledNumberOfTimes(result);
}

await createOneStringOfCopiesOfGivenString();

    //Write a function to create an updated string of 4 copies of the last 3 characters of a given original string. 
    //The string length must be 3 and above. 
    
async function createFourCopiesOfLastThreeCharactersOfString() {
    const userString = await ReadLineUtils.readUserStringToCreateFourCopiesOfLastThreeCharacters();

    if (userString.length < 3) {
        DisplayUtils.displayErrorUserInputShouldBeMoreThanThreeCharacter();
        return;
    }
    
    const result = userString.substring(userString.length - 3, userString.length).repeat(4)

    DisplayUtils.displayStringMutipledLastThreeCharacters(result);
}

await createFourCopiesOfLastThreeCharactersOfString();

    //Write a function to extract the first half of a even string.
    
async function extractFirstHalfOfEvenString() {
    const userString = await ReadLineUtils.readUserStringExtractFirstHalfOfEvenString();

    const resultString = StringUtils.checkIfStringIsEvenAndExtractFirstHalf(userString);

    DisplayUtils.displayCheckStringIsEvenAndExtractFirstHalf(resultString);
}

await extractFirstHalfOfEvenString();

    //Write a function to create a new string without the first and last characters of a given string. 
    
async function createNewStringWithoutFirstAndLastCharacters() {
    const userString = await ReadLineUtils.readUserStringCreateNewStringWithoutFirstAndLastCharacters();

    const resultString = StringUtils.deleteFirstAndLastCharacters(userString);

    DisplayUtils.displayDeleteFirstAndLastCharacters(resultString);
}

await createNewStringWithoutFirstAndLastCharacters();

    //Write a function to concatenate two strings except for their first character.  
    
async function concatenateTwoStringsExceptFirstCharacter() {
    const firstUserString = await ReadLineUtils.readFirstUserStringConcanateTwoStringsExceptFirstCharacter();
    const secondUserString = await ReadLineUtils.readSecondUserStringConcanateTwoStringsExceptFirstCharacter();

    const resultString = StringUtils.concatenateTwoStringExceptFirstCharacter(firstUserString, secondUserString);

    DisplayUtils.displayConcatenateTwoStringExceptFirstCharacter(resultString);
}

await concatenateTwoStringsExceptFirstCharacter();

    //Write a function to move the last three characters to the start of a given string. 
    //The string length must be greater than or equal to three.  
    
async function moveLastThreeCharactersToStart() {
    const userString = await ReadLineUtils.readUserStringToMoveLastThreeCharactersToStart();

    if (userString.length < 3) {
        DisplayUtils.displayErrorUserInputShouldBeMoreThanThreeCharacter();
        return;
    }
    
    const resultString = StringUtils.moveNumberOfLastCharactersToStart(userString, 3);

    DisplayUtils.displayMoveLastThreeCharactersToStart(resultString);
}

await moveLastThreeCharactersToStart()

    //Write a function to create a string using the middle three characters of a given string of odd length. 
    //The string length must be greater than or equal to three.  
    
async function createStringUsingMiddleThreeCharactersOfOddString() {
    const userString = await ReadLineUtils.readUserStringCreateStringUsingMiddleThreeCharactersOfOddString();

    if (userString.length < 3) {
        DisplayUtils.displayErrorUserInputShouldBeMoreThanThreeCharacter();
        return;
    }

    const oddCheck = userString.length % 2 !== 0;

    const resultString = StringUtils.createStringUsingMiddleNumberOfCharactersOfOddString(userString, 3);

    DisplayUtils.displayCreateStringUsingMiddleThreeCharactersOfOddString(oddCheck, resultString);
}

await createStringUsingMiddleThreeCharactersOfOddString();

    //Write a function to concatenate two strings and return the result. 
    //If the length of the strings does not match, then remove the characters from the longer string.  
    
async function concatenateTwoStringsIfLengthDoesNotMatch() {
    const firstUserString = await ReadLineUtils.readFirstUserStringConcanateTwoStringsIfLengthDoesNotMatch();
    const secondUserString = await ReadLineUtils.readSecondUserStringConcanateTwoStringsIfLengthDoesNotMatch();

    const resultString = StringUtils.concatenateTwoStringIfLengthDoesNotMatch(firstUserString, secondUserString);

    DisplayUtils.displayConcatenateTwoStringIfLengthDoesNotMatch(resultString);
}

await concatenateTwoStringsIfLengthDoesNotMatch();

    //Write a function to test whether a string ends with "Script". 
    //The string length must be greater than or equal to 6.     
        
async function checkStringEndsWtihScript() {
    const userString = await ReadLineUtils.readUserStringCheckStringEndsWithScript();

    if (userString.length < 6) {
        DisplayUtils.displayErrorUserInputShouldBeMoreThanSixCharacter();
        return;
    }

    const result = userString.substring(userString.length - 6, userString.length) == 'Script';

    DisplayUtils.displayCheckStringEndsWtihScript(result);
}

await checkStringEndsWtihScript();

    //Write a function to display the city name if the string begins with "Los" or "New" otherwise return blank. 
    
async function checkCityNameIfBeginsWithLosOrNew() {
    const userString = await ReadLineUtils.readUserStringCheckCityNameIfBeginsWithLosOrNew();
    
    const result = userString.substring(0, 3) == 'Los' || userString.substring(0, 3) == 'New';

    DisplayUtils.displayCheckCityNameIfBeginsWithLosOrNew(result);
}

await checkCityNameIfBeginsWithLosOrNew();

    //Write a function to create a new string from a given string. 
    //This program removes the first and last characters of the string if the first or last character is 'P'.
    //Return the original string if the condition is not satisfied.  
    
async function createNewStringIfStringStartOrEndsWithP() {
    const userString = await ReadLineUtils.readUserStringCreateNewStringIfStringStartOrEndsWithP();

    let resultString;
    if (userString.charAt(0) == 'P') {
        resultString = userString.substring(1, userString.length - 1);
    } else if (userString.charAt(userString.length - 1) == 'P') {
        resultString = userString.substring(0, userString.length - 1);
    } else {
        resultString = userString;
    }

    DisplayUtils.displayCreateNewStringIfStringStartOrEndsWithP(resultString);
}

await createNewStringIfStringStartOrEndsWithP();

    //Write a function to create a new string using the first and last n characters from a given string.
    //The string length must be larger than or equal to n. 
    
async function createNewStringUsingFirstAndLastGivenNumberOfCharacters() {
    const userString = await ReadLineUtils.readUserStringCreateStringUsingFirstAndLastGivenNumberOfCharacters();
    const userNumber = await ReadLineUtils.readUserNumberCreateStringUsingFirstAndLastGivenNumberOfCharacters();

    if (userString.length <= userNumber) {
        DisplayUtils.displayErrorUserInputShouldBeMoreThanGivenNumberOfCharacters(userNumber);
        return;
    }

    const firstStringPart = userString.substring(0, userNumber);
    const secondStringPart = userString.substring(userString.length - userNumber, userString.length);

    const resultString = firstStringPart + secondStringPart;

    DisplayUtils.displayCreateNewStringUsingFirstAndLastGivenNumberOfCharacters(resultString);
}

await createNewStringUsingFirstAndLastGivenNumberOfCharacters();

    //Write a function to compute the sum of three elements of a given array of integers of length 3.  
    
async function computeSumOfThreeElementsOfArrayOfLengthThree() {
    const userArray = await ReadLineUtils.readArrayOfThreeNumbersToGetSum();

    if (userArray.length != 3) {
        DisplayUtils.displayErrorUserArrayInputLengthShouldBeGivenNumber(3);
        return
    }

    const result = ArrayUtils.sumOfThreeElementsOfArrayOfLengthThree(userArray);

    DisplayUtils.displayComputeSumOfThreeElementsOfArrayOfLengthThree(result);

}

await computeSumOfThreeElementsOfArrayOfLengthThree();

    //Write a function to rotate the elements left in a given array of integers of length 3.  

async function rotateElementsLeftInGivenArrayOfLengthThree() {
    const userArray = await ReadLineUtils.readArrayOfThreeNumbersToRotateLeft();

    if (userArray.length != 3) {
        DisplayUtils.displayErrorUserArrayInputLengthShouldBeGivenNumber(3);
        return
    }

    const result = ArrayUtils.rotateElementsLeftOfLengthThree(userArray);

    DisplayUtils.displayRotateElementsLeftInGivenArrayOfLengthThree(result);
}

await rotateElementsLeftInGivenArrayOfLengthThree(); */


    //---------------------------------------------------------------------------------------------------------


    //Write a function to check whether 1 appears in the first or last position of a given array of integers. 
    //The array length must be larger than or equal to 1.

// async function checkWhetherOneAppearsInFirstOrLastPosititonOfGivenArray() {
//     const userArray = await ReadLineUtils.readArrayToCheckIfOneAppearsInFirstOrLastPosition();

//     const arrayCheck = userArray.at(0, 1) || userArray.at(userArray.length - 1, 1);

//     DisplayUtils.displayCheckWhetherOneAppearsInFirstOrLastPosititonOfGivenArray(arrayCheck);
// }

// await checkWhetherOneAppearsInFirstOrLastPosititonOfGivenArray();

//     //Write a function to check whether the first and last elements are the same in a given array of integers of length 3.  
    
// async function checkWhetherFirstAndLastElementsAreSameInGivenArray() {
//     const userArray = await ReadLineUtils.readArrayToCheckFirstAndLastElementsAreSameInGivenArray();

//     if (userArray.length != 3) {
//         DisplayUtils.displayErrorUserArrayInputLengthShouldBeGivenNumber(3);
//         return
//     }

//     const arrayCheck = userArray.at(0) == userArray.at(userArray.length - 1);

//     DisplayUtils.displayCheckWhetherFirstAndLastElementsAreSameInGivenArray(arrayCheck);

// }

// await checkWhetherFirstAndLastElementsAreSameInGivenArray();

//     //Write a function to reverse the elements of a given array of integers of length 3.  
    
// async function reverseElementsOfGivenArray() {
//     const userArray = await ReadLineUtils.readArrayToReverseElementsOfGivenArray();

//     if (userArray.length != 3) {
//         DisplayUtils.displayErrorUserArrayInputLengthShouldBeGivenNumber(3);
//         return
//     }

//     const result = userArray.reverse();

//     DisplayUtils.displayReverseElementsOfGivenArray(result);
// }

// await reverseElementsOfGivenArray();

//     //Write a function to find the largest value between the first and last elements and set all the other elements to that value. 
//     //Display the updated array.  
    
// async function findLargestValueBetweenFirstAndLastElementsAndSetOtherElementsToThatValueOfGivenArray() {
//     const userArray = await ReadLineUtils.readArrayToFindLargestValueBetweenFirstAndLastElementsAndSetOtherElementsToThatValueOfGivenArray();

//     const result = ArrayUtils.findLargestValueBetweenFirstAndLastElementsAndSetOtherElementsToThatValueOfGivenArray(userArray);

//     DisplayUtils.displayFindLargestValueBetweenFirstAndLastElementsAndSetOtherElementsToThatValueOfGivenArray(result);
// }

// await findLargestValueBetweenFirstAndLastElementsAndSetOtherElementsToThatValueOfGivenArray();

//     //Write a function to create an array taking the middle elements of the two arrays of integer and each length 3. 
    
// async function createArrayTakingMiddleElementsOfTwoArrays() {
//     const userArrayOne = await ReadLineUtils.readFirstArrayToCreateArrayTakingMiddleElementsOfTwoArrays();
//     const userArrayTwo = await ReadLineUtils.readSecondArrayToCreateArrayTakingMiddleElementsOfTwoArrays();

//     if (userArrayOne.length != 3 && userArrayTwo.length != 3) {
//         DisplayUtils.displayErrorUserArrayInputLengthShouldBeGivenNumber(3);
//         return
//     }
    
//     const resultArray = [];
//     resultArray.push(userArrayOne[1], userArrayTwo[1]);

//     DisplayUtils.displayCreateNewArrayTakingMiddleElementsOfTwoArrays(resultArray);
// }

// await createArrayTakingMiddleElementsOfTwoArrays();

//     //Write a function to create an array by taking the first and last elements from a given array of integers. 
//     //The length must be larger than or equal to 1.

// async function createArrayByTakingFirstAndLastElementsFromGivenArray() {
//     const userArray = await ReadLineUtils.readArrayToCreateArrayByTakingFirstAndLastElementsFromGivenArray();
    
//     const resultArray = [];

//     resultArray.push(userArray[0], userArray[userArray.length - 1]);

//     DisplayUtils.displayCreateArrayByTakingFirstAnLastElementsFromGivenArray(resultArray);
// }

// await createArrayByTakingFirstAndLastElementsFromGivenArray();

//     //Write a function to test whether an array of integers of length 2 contains 1 or 3.  

// async function checkWhetherArrayContainsOneOrThree() {
//     const userArray = await ReadLineUtils.readArrayToCheckWhetherArrayContainsOneOrThree();

//     if (userArray.length != 2) {
//         DisplayUtils.displayErrorUserArrayInputLengthShouldBeGivenNumber(2);
//         return
//     }
    
//     const check = userArray.includes(1) || userArray.includes(3);

//     DisplayUtils.displayCheckWhetherArrayContainsOneOrThree(check);
// }

// await checkWhetherArrayContainsOneOrThree();

//     //Write a function to test whether an array of integers of length 2 does not contain 1 or 3.  

// async function checkWhetherArrayDoesNotContainsOneOrThree() {
//     const userArray = await ReadLineUtils.readArrayToCheckWhetherArrayDoesNotContainsOneOrThree();

//     if (userArray.length != 2) {
//         DisplayUtils.displayErrorUserArrayInputLengthShouldBeGivenNumber(2);
//         return
//     }
    
//     const check = userArray.includes(1) || userArray.includes(3);

//     DisplayUtils.displayCheckWhetherArrayDoesNotContainsOneOrThree(check);
// }

// await checkWhetherArrayDoesNotContainsOneOrThree();

//     //Write a function to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.  
    
// async function checkWhetherGivenArrayContainsThirtyAndFourtyTwice() {
//     const userArray = await ReadLineUtils.readArrayToCheckWhetherGivenArrayContainsThirtyAndFourtyTwice();

//     if (userArray.length < 3) {
//         DisplayUtils.displayErrorUserArrayInputLengthShouldBeLessThanGivenNumber(3);
//         return
//     }

//     const check = (userArray[0] == 30 && userArray[1] == 30) || (userArray[0] == 40 && userArray[1] == 40);

//     DisplayUtils.displayCheckWhetherGivenArrayContainsThirtyAndFourtyTwice(check);
// }

// await checkWhetherGivenArrayContainsThirtyAndFourtyTwice();

//     //Write a function to swap the first and last elements of a given array of integers. The array length should be at least 1.  
    
// async function swapFirstAndLastElementsOfGivenArray() {
//     const userArray = await ReadLineUtils.readSwapFirstAndLastElementsOfGivenArray();

//     if (userArray.length < 1) {
//         DisplayUtils.displayErrorUserArrayInputLengthShouldBeMoreThanGivenNumber(1);
//         return;
//     }

//     const result = ArrayUtils.swapFirstAndLastElementsOfGivenArray(userArray);

//     DisplayUtils.displaySwapFirstAndLastElementsOfGivenArray(result);
// }

// await swapFirstAndLastElementsOfGivenArray();

//     //Write a function to add two digits to a given positive integer of length two.  

// async function addTwoDigitsToGivenPositiveInteger() {
//     const userNumber = await ReadLineUtils.readAddTwoDigitsToGivenPositiveInteger();

//     if (userNumber < 1) {
//         DisplayUtils.displayErrorUserNumberShouldBePositive();
//         return;
//     }
//     const resultNumber = userNumber % 10 + Math.floor(userNumber / 10);

//     DisplayUtils.displayAddTwoDigitsToGivenPositiveInteger(resultNumber);
// }

// await addTwoDigitsToGivenPositiveInteger();

//     //Write a function to add two positive integers without carrying.

// async function addTwoPositiveIntegersWithoutCarrying() {
//     const firstUserNumber = await ReadLineUtils.readFirstUserNumberToAddTwoPositiveIntegersWithoutCarrying()
//     const secondUserNumber = await ReadLineUtils.readSecondUserNumberToAddTwoPositiveIntegersWithoutCarrying();

//     const resultNumber = MathUtils.addTwoPositiveIntegersWithoutCarrying(firstUserNumber, secondUserNumber);

//     DisplayUtils.displayAddTwoPositiveIntegersWithoutCarrying(resultNumber);
// }

// await addTwoPositiveIntegersWithoutCarrying();

//     //Write a function to find the longest string from a given array of strings.  

// async function findLongestStringFromGivenArray() {
//     const userArray = await ReadLineUtils.readUserArrayToFindLongestStringFromGivenArray();

//     const result = ArrayUtils.findLongestStringFromGivenArray(userArray);

//     DisplayUtils.displayFindLongestStringFromGivenArray(result);
// }

// await findLongestStringFromGivenArray();

//     //Write a function to replace each character in a given string with the next in the English alphabet.  
//     //Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.

// async function replaceEachCharacterInGivenStringWithNextInEnglsihAlphabet() {
//     const userString = await ReadLineUtils.readUserStringToReplaceEachCharacterInGivenStringWithNextInEnglishAlphabet();

//     const resultString = StringUtils.changingEachCharacter(userString);

//     DisplayUtils.displayReplaceEachCharacterInGivenStringWithNextInEnglishAlphabet(resultString);
// }

// await replaceEachCharacterInGivenStringWithNextInEnglsihAlphabet();



// //Write a function to divide a given array of positive integers into two parts.
// //First element belongs to the first part, second element belongs to the second part, 
// //and third element belongs to the first part and so on. 
// //Now compute the sum of two parts and store it in an array of size two.  

// async function divideGivenArrayInTwoAndComputeSumOfTwoPartsToStoreItInArray() {
//     const userArray = await ReadLineUtils.readArrayToDivieGivenArrayInTwoAndComputeSumOfTwoAPartsToStoreItInArray();

//     const result = ArrayUtils.divideGivenArrayInTwoAndComputeSumOfTwoPartsToStoreItInArray(userArray);

//     DisplayUtils.displayDivideGivenArrayInTwoAndComputeSumOfTwoPartsToStoreInInArray(result);
// }

// await divideGivenArrayInTwoAndComputeSumOfTwoPartsToStoreItInArray();   

//     //Write a function to find the types of a given angle.  
//     //Types of angles:
//     //Acute angle: An angle between 0 and 90 degrees.
//     //Right angle: An 90 degree angle.
//     //Obtuse angle: An angle between 90 and 180 degrees.
//     //Straight angle: A 180 degree angle.

// async function findTypeOfGivenAngle() {
//     const userNumber = await ReadLineUtils.readToFindTypeOfGivenAngle();

//     if (userNumber > 180) {
//         DisplayUtils.displayErrorUserNumberShouldBeLessThanOneHundredEighty();
//         return;
//     }

//     const result = GeometryUtils.findTypeOfGivenAngle(userNumber);

//     DisplayUtils.displayFindTypeOfGivenAngle(result);
// }

// await findTypeOfGivenAngle();

//     //WWrite a function to determine if two arrays of integers of the same length are similar. 
//     //The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.  

// async function determineIfTwoArraysAreSameLengthAreSimiliar() {
//     const firstUserArray = await ReadLineUtils.readFirstArrayToDetermineIfTwoArraysAreSameLengthAreSimiliar();
//     const secondUserArray = await ReadLineUtils.readSecondArrayToDetermineIfTwoArraysAreSameLengthAreSimiliar();

//     const result = ArrayUtils.determineIfTwoArraysAreSameLengthAreSimiliar(firstUserArray, secondUserArray);

//     DisplayUtils.displayDetermineIfTwoArraysAreSameLengthAreSimiliar(result);
// }

// await determineIfTwoArraysAreSameLengthAreSimiliar();

//     //Write a function that takes two integers and a divisor.
//     //If the given divisor divides both integers and does not divide either, two specified integers are similar.
//     //Check whether two integers are similar or not.
    
// async function checkWhetherTwoIntegersAreSimiliar() {
//     const firstUserNumber = await ReadLineUtils.firstUserNumberOfTwoIntegersAreSimiliar();
//     const secondUserNumber = await ReadLineUtils.secondUserNumberOfTwoIntegersAreSimiliar();
//     const userDivisor = await ReadLineUtils.userDivisorOfTwoIntegersAreSimiliar();

//     const result = MathUtils.checkWhetherTwoIntegersAreSimiliar(firstUserNumber, secondUserNumber, userDivisor);

//     DisplayUtils.displayCheckWhetherTwoIntegersAreSimiliar(result);
// }

// await checkWhetherTwoIntegersAreSimiliar();

//     //Write a function to check whether it is possible to replace $ in a given expression x $ y = z with one
//     // of the four signs +, -, * or / to obtain a correct expression.  
//     //For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z

// async function checkWhetherItIsPossibleToReplaceDollarSignInGivenExpression() {
//     DisplayUtils.displayArithmeticExperssion();

//     const x = await ReadLineUtils.readXInCheckWhetherItIsPossibleToReplaceDollarSignInGivenExpression();
//     const y = await ReadLineUtils.readYInCheckWhetherItIsPossibleToReplaceDollarSignInGivenExpression();
//     const z = await ReadLineUtils.readZInCheckWhetherItIsPossibleToReplaceDollarSignInGivenExpression();

//     const result = MathUtils.checkArithmeticsExpression(x, y, z);

//     DisplayUtils.displayCheckWhetherItIsPossibleToReplaceDollarSignInGivenExpression(result);
// }

// await checkWhetherItIsPossibleToReplaceDollarSignInGivenExpression();

//     //Write a function to find the kth greatest element in a given array of integers.

// async function findKthGreatestElementInGivenArrayOfIntegers() {
//     const userArray = await ReadLineUtils.readUserArrayToFindKthGreatestElementInGivenArrayOfIntegers();
//     const userNumber = await ReadLineUtils.readUserNumberToFindKthGreatestElementInGivenArrayOfIntegers();

//     const result = ArrayUtils.findKthGreatestElementInGivenArrayOfIntegers(userArray, userNumber);

//     DisplayUtils.displayFindKthGreatestElementInGivenArrayOfIntgegers(result);   
// }

// await findKthGreatestElementInGivenArrayOfIntegers();

//     //Write a function to find the maximum possible sum of some 
//     //of its k consecutive numbers (numbers that follow each other in order) in a given array of positive integers. 

// async function findMaximumPossibleSumOfKConsecutiveNumbers() {
//     const userArray = await ReadLineUtils.readUserArrayToFindMaximumPossibleSumOfKConsecutiveNumbers();
//     const userNumber = await ReadLineUtils.readUserNumberToFindMaximumPossibleSumOfKConsecutiveNumbers();

//     const result = ArrayUtils.findMaximumPossibleSumOfKConsecutiveNumbers(userArray, userNumber);

//     DisplayUtils.displayFindMaximumPossibleSumOfKConsecutiveNumbers(result);
// }

// await findMaximumPossibleSumOfKConsecutiveNumbers(); 

//     //Write a function to find the maximum difference between any two adjacent elements of a given array of integers. 

// async function findMaximumDifferenceBetweenAnyTwoAdjacentElementsOfGivenArray() {
//     const userArray = await ReadLineUtils.readUserArrayToFindMaximumDifferenceBetweenAnyTwoAdjacentElementsOfGivenArray();

//     const result = ArrayUtils.findMaximumDifferenceBetweenAnyTwoAdjacentElementsOfGivenArray(userArray);

//     DisplayUtils.displayFindMaximumDifferenceBetweenAnyTwoAdjacentElementsOfGivenArray(result);    
// }

// await findMaximumDifferenceBetweenAnyTwoAdjacentElementsOfGivenArray();

//     //Write a function to find the maximum difference among all possible pairs of a given array of integers. 

// async function findMaximumDifferneceAmongAllPossiblePairsOfGivenArray() {
//     const userArray = await ReadLineUtils.readUserArrayToFindMaximumDifferenceAmongAllPossiblePairsOfGivenArray();

//     const result = ArrayUtils.findMaximumDifferneceAmongAllPossiblePairsOfGivenArray(userArray);

//     DisplayUtils.displayFindMaximumDifferenceAmongAllPossiblePairsOfGivenArray(result);
// }

// await findMaximumDifferneceAmongAllPossiblePairsOfGivenArray();

//     //Write a function to find the number appearing most frequently in a given array of integers. 

// async function findNumberAppearingMostFrequentlyInGivenArray() {
//     const userArray = await ReadLineUtils.readUserArrayToFindNumberAppearingMostFrequentlyInGivenArray();

//     const result = ArrayUtils.findNumberAppearingMostFrequentlyInGivenArray(userArray);

//     DisplayUtils.displayFindNumberAppearingMostFrequentlyInGivenArray(result);
// }

// await findNumberAppearingMostFrequentlyInGivenArray();  

//     //Write a function to replace all numbers with a specified number in an array of integers. 

// async function replaceAllNumbersWithSpecifiedNumberInArray() {
//     const userArray = await ReadLineUtils.readUserArrayToReplaceAllNumbersWithSpecifiedNumberInArray();
//     const firstUserNumber = await ReadLineUtils.readUserReplacementNumberToReplaceAllNumberWithSpecifiedNumberInArray();
//     const secondUserNumber = await ReadLineUtils.readUserReplacerNumberToReplaceAllNumberWithSpecifiedNumberInArray();

//     const result = ArrayUtils.replaceAllNumbersWithSpecifiedNumberInArray(userArray, firstUserNumber, secondUserNumber);

//     DisplayUtils.displayReplaceAllNumbersWithSpecifiedNumberInArray(result);
// }

// await replaceAllNumbersWithSpecifiedNumberInArray();

//     //Write a function to compute the sum of the absolute differences of consecutive numbers in a given array of integers. 

// async function computeSumOfAbsoluteDifferencesOfConsecutiveNumbersInGivenArray() {
//     const userArray = await ReadLineUtils.readUserArrayToComputeSumOfAbsoluteDifferenceOfConsecutiveNumbersInGivenArray();

//     const result = ArrayUtils.computeSumOfAbsoluteDifferencesOfConsecutiveNumbersInGivenArray(userArray);

//     DisplayUtils.displayComputeSumOfAbsoluteDifferencesOfConsecutiveNumbersInGivenArray(result);
// }

// await computeSumOfAbsoluteDifferencesOfConsecutiveNumbersInGivenArray();

//     //Write a function to find the shortest possible string. 
//     //This can be converted into a string and converted into a palindrome by adding characters to the end of it. 

// async function findShortestPossibleStringConvertIntoStringAndConvertIntoPalindrome() {
//     const userArray = await ReadLineUtils.readUserArrayFindShortestPossibleStringConvertIntoStringAndConvertIntoPalindrome();
    
//     const result = ArrayUtils.findShortestPossibleStringConvertIntoStringAndConvertIntoPalindrome(userArray);

//     DisplayUtils.displayFindShortestPossibleStringConvertIntoStringAndConvertIntoPalindrome(result);
// }

// await findShortestPossibleStringConvertIntoStringAndConvertIntoPalindrome();

//     // Write a function to change the case of the minimum number of letters to make a given string written in upper case or lower case. 
//     // Fox example "Write" will be write and "PHp" will be "PHP"

// async function changeCaseOfMinimumNumberOfLettersToMakeGivenStringWrittenInUpperOrLowerCase() {
//     const userString = await ReadLineUtils.readUserStringToChangeCaseOfMinimumNumberOfLettersToMakeGivenStringWrittenInUpperOrLowerCase();

//     const result = StringUtils.changeCaseOfMinimumNumberOfLettersToMakeGivenStringWrittenInUpperOrLowerCase(userString);

//     DisplayUtils.displayChangeCaseOfMinimumNumberOfLettersToMakeGivenStringWrittenInUpperOrLowerCase(result);
// }

// await changeCaseOfMinimumNumberOfLettersToMakeGivenStringWrittenInUpperOrLowerCase();

//     //Write a function to check whether it is possible to rearrange the characters of a given string. 
//     //This is in such a way that it will become equal to another given string. 

// async function checkWhetherItIsPossibleToRearrangeCharactersOfGivenStringInAWayThatItWillBecomeEqualToAnotherGivenString() {
//     const firstUserString = await ReadLineUtils.readFirstUserStringToCheckWhetherItIsPossibleToRearrangeCharacters();
//     const secondUserString = await ReadLineUtils.readSecondUserStringToCheckWhetherItIsPossibleToRearrangeCharacters();

//     const result = StringUtils.checkWhetherItIsPossibleToRearrangeCharacters(firstUserString, secondUserString);

//     DisplayUtils.displayCheckWhetherItIsPossibleToRearrangeCharactersOfGivenString(result);
// }

// await checkWhetherItIsPossibleToRearrangeCharactersOfGivenStringInAWayThatItWillBecomeEqualToAnotherGivenString();

//     //Write a function to check if there is at least one element in two given sorted arrays of integers. 

// async function checkIfThereIsAtLeastOneElementInTwoGivenSortedArrays(){
//     const firstUserArray = await ReadLineUtils.readFirstUserArrayToCheckIfThereIsAtLeastOneElementInTwoGivenSortedArrays();
//     const secondUserArray = await ReadLineUtils.readSecondUserArrayToCheckIfThereIsAtLeastOneElementInTwoGivenSortedArrays();

//     const result = ArrayUtils.checkIfThereIsAtLeastOneElementInTwoGivenSortedArrays(firstUserArray, secondUserArray);

//     DisplayUtils.displayCheckIfThereIsAtLeastOneElementInTwoGivenSortedArrays(result);
// }

// await checkIfThereIsAtLeastOneElementInTwoGivenSortedArrays();


    //-----------------------------------------------------------------------------


    //Write a function to check whether a given string contains only Latin letters and no two uppercase 
    //and no two lowercase letters are in adjacent positions. 

async function checkWhetherGivenStringConatinsOnlyLatinAndAlternatingCases() {
    const userString = await ReadLineUtils.readUserStringCheckWhetherGivenStringConatinsOnlyLatinAndAlternatingCases();

    const result = StringUtils.checkWhetherGivenStringConatinsOnlyLatinAndAlternatingCases(userString);

    DisplayUtils.displayCheckWhetherGivenStringConatinsOnlyLatinAndAlternatingCases(result);
}

await checkWhetherGivenStringConatinsOnlyLatinAndAlternatingCases();

