import { DateTimeUtils } from './utils/datetimeUtils.js';
import { DisplayUtils } from './utils/displayUtils.js';
import { FileUtils } from './utils/fileUtils.js';
import { GeometryUtils } from './utils/geometryUtils.js';
import { RandomUtils } from './utils/randomUtils.js';
import { ReadLineUtils } from './utils/readlineUtils.js';
import { TemperatureUtils } from './utils/temperatureUtils.js';
import { MathUtils } from './utils/mathUtils.js';
import { StringUtils } from './utils/stringUtils.js';

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

    if (userString.length > 3) {
        DisplayUtils.displayErrorUserInputLastThreeCharacter();
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