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

    static displayErrorUserInputShouldBeMoreThanThreeCharacter() {
        console.log(`Your word should be more than three characters`);
    }

    static displayErrorUserInputShouldBeMoreThanSixCharacter() {
        console.log(`Your word should be more than six characters`);
    }

    static displayErrorUserInputShouldBeMoreThanGivenNumberOfCharacters(number) {
        console.log(`Your word should be more than ${number} characters`);
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

    static displayCheckSetThreeNumbers(status) {
        console.log(`The final result is: ${status}`);
    }

    static displayCheckStrictSoftMode(status) {
        console.log(`The three given number is increasing in: ${status}`);
    }

    static displayThreeNumbersHaveSameRightDigit(status) {
        console.log(`The result of check shows that: ${status}`);
    }

    static displayThreeNumbersGreaterThan20(status) {
        console.log(`After evaluation the result is: ${status}`);
    }

    static displayIfNumberOrSumOrDiffrenceIs15(status) {
        const resultString = status ?
            `Either one of two numbers, their sum or difference was 15` :
            `Neither one of two numbers, their sum or difference was 15`;
        console.log(resultString);
    }

    static displayCheckNumberIsMultipleOf7Or11(status) {
        const resultString = status ?
            `One of the given number is multiple of 7 or 11` :
            `Noone of the given number or both of them are multiple pf 7 or 11`;
        console.log(resultString);
    }

    static displayNumberWithin40And10000(status, number) {
        const resultString = status ?
            `Given number ${number} is within 40 and 10000 range` :
            `Given number ${number} is not within 40 and 10000 range`;
        console.log(resultString);
    }

    static displayReverseString(string) {
        const resultString = `Reversed string is: ${string}`;
        console.log(resultString);
    }

    static displayStringEachCharacterChanged(string) {
        const resultString = `After changing your string is: ${string}`;
        console.log(resultString);
    }

    static displayCapitalizingEachWord(string) {
        const resultString = `After capitalizing each word your string is: ${string}`;
        console.log(resultString);
    }

    static displayConvertNumberToHoursAndMinutes(hours, minutes) {
        const resultString = `Your number was converted to ${hours} hours and ${minutes} minutes`;
        console.log(resultString);
    }

    static displayConvertLettersAlphabetically(string) {
        const resultString = `Your new text after converting it alphabetically is: ${string}`;
        console.log(resultString);
    }

    static displayCheckCharactersAAndBAreSeparatedBy3Places(status) {
        const resultString = status ?
            `Characters A and B are separated by 3 places` :
            `Characters A and B are not separated by 3 places`;
        console.log(resultString);
    }

    static displayCountVowels(number) {
        const resultString = `There are ${number} vowels in a given text`;
        console.log(resultString);
    }

    static displayUserStringCheckStringContainsEqualNumberOfPAndT(status) {
        const resultString = status ?
            `Given string does contains an equal number of p's and t's` :
            `Given string does not contains an equal number of p's and t's`;
        console.log(resultString);
    }

    static displayDivideTwoNumberAndReturnResultProperply(string) {
        const resultString = `Your number after dividing and properly put commas is: ${string}`;
        console.log(resultString);
    }

    static displayStringMutipledNumberOfTimes(string) {
        const resultString = `After multiplying new string is: ${string}`;
        console.log(resultString);
    }

    static displayStringMutipledLastThreeCharacters(string) {
        const resultString = `After multiplying last three characters of your string four times, your new string is: ${string}`;
        console.log(resultString);
    }

    static displayCheckStringIsEvenAndExtractFirstHalf(string) {
        const resultString = `After extracting first half of your even string, first half is: ${string} `;
        console.log(resultString);
    }

    static displayDeleteFirstAndLastCharacters(string) {
        const resultString = `After deleting first and last characters, your new string is: ${string}`;
        console.log(resultString);
    }

    static displayConcatenateTwoStringExceptFirstCharacter(string) {
        const resultString = `After concatenation two strings except first character, new string is: ${string}`;
        console.log(resultString);
    }

    static displayMoveLastThreeCharactersToStart(string) {
        const resultString = `After moving last three characters to start, new string is: ${string}`;
        console.log(resultString);
    }

    static displayCreateStringUsingMiddleThreeCharactersOfOddString(status, string) {
        const resultString = status ?
            `New string is ${string}` :
            `Given string is not odd`;
        console.log(resultString);
    }

    static displayConcatenateTwoStringIfLengthDoesNotMatch(string) {
        const resultString = `New string after concatenation is: ${string}`;
        console.log(resultString);
    }

    static displayCheckStringEndsWtihScript(status) {
        const resultString = status ?
            `Your word ends with 'Script'` :
            `Your word does not ends with 'Script'`;
        console.log(resultString);
    }

    static displayCheckCityNameIfBeginsWithLosOrNew(status) {
        const resultString = status ?
            `Your city start with 'Los' or 'New'` :
            ``;
        console.log(resultString);
    }

    static displayCreateNewStringIfStringStartOrEndsWithP(string) {
        console.log(string);
    }

    static displayCreateNewStringUsingFirstAndLastGivenNumberOfCharacters(string) {
        const resultString = `New string is: ${string}`;
        console.log(resultString);
    }

    static displayErrorUserArrayInputLengthShouldBeGivenNumber(number) {
        const resultString = `Array length should be ${number}`;
        console.log(resultString);
    }

    static displayErrorUserArrayInputLengthShouldBeLessThanGivenNumber(number) {
        const resultString = `Array length should be less than ${number}`;
        console.log(resultString);
    }

    static displayErrorUserArrayInputLengthShouldBeMoreThanGivenNumber(number) {
        const resultString = `Array length should be more than ${number}`;
        console.log(resultString);
    }

    static displayComputeSumOfThreeElementsOfArrayOfLengthThree(number) {
        const resultString = `Sum of three elements in user array is: ${number}`;
        console.log(resultString);
    }
    
    static displayRotateElementsLeftInGivenArrayOfLengthThree(array) {
        const resultString = `Array after rotation to the left is: ${array}`;
        console.log(resultString);
    }

    static displayCheckWhetherOneAppearsInFirstOrLastPosititonOfGivenArray(status) {
        const resultString = status ?
            'Given array either starts with 1 or ends with 1' :
            'Given array does not start or end with 1';
        console.log(resultString);
    }

    static displayCheckWhetherFirstAndLastElementsAreSameInGivenArray(status) {
        const resultString = status ?
            `Given array starts and ends with same element` :
            `Given array does not start and end with same element`;
        console.log(resultString);
    }

    static displayReverseElementsOfGivenArray(array) {
        const resultString = `Your array after reversing is: ${array}`;
        console.log(resultString);
    }

    static displayFindLargestValueBetweenFirstAndLastElementsAndSetOtherElementsToThatValueOfGivenArray(array) {
        const resultString = `Your new array after setting maximum value of first or last elements to all of elements is: ${array}`;
        console.log(resultString);
    }

    static displayCreateNewArrayTakingMiddleElementsOfTwoArrays(array) {
        const resultString = `Your new array after taking middle elements of two arrays is: ${array}`;
        console.log(resultString);
    }

    static displayCreateArrayByTakingFirstAnLastElementsFromGivenArray(array) {
        const resultString = `Your new array after taking first and last elements is: ${array}`;
        console.log(resultString);
    }

    static displayCheckWhetherArrayContainsOneOrThree(status) {
        const resultString = status ?
            `Your array does contain 1 or 3` :
            `Your array does not contain 1 or 3`;
        console.log(resultString);
    }

    static displayCheckWhetherArrayDoesNotContainsOneOrThree(status) {
        const resultString = status ?
            `Your array does contain 1 or 3` :
            `Your array does not contain 1 or 3`;
        console.log(resultString);
    }

    static displayCheckWhetherGivenArrayContainsThirtyAndFourtyTwice(status) {
        const resultString = status ?
            `Your array does contain 30 and 40 twice` :
            `Your array does not contain 30 and 40 twice`;
        console.log(resultString);
    }

    static displaySwapFirstAndLastElementsOfGivenArray(array) {
        const resultString = `After swapping first and last elements, new array is: ${array}`;
        console.log(resultString);
    }
}