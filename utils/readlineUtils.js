import readline from 'readline';

export class ReadLineUtils {
    static readNumber(question) {
        return new Promise((resolve) => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            rl.question(question, (answer) => {
                const number = Number(answer);
                rl.close();
                resolve(number);
            });
        });
    }
    
    static readNumberUpToTen() {
        return this.readNumber('Please enter a number between 1 to 10: ');
    }

    static readInitialNumber() {
        return this.readNumber(`Please enter a number: `);
    }

    static readFirstNumber() {
        return this.readNumber(`Please enter a first number for a sum of two: `);
    }
    
    static readSecondNumber() {
        return this.readNumber(`Please enter a second number for a sum of two: `);
    }

    static readDifferenceNumber() {
        return this.readNumber(`Please enter a number to calculate the differnce: `);
    }

    static readFirstPairNumber() {
        return this.readNumber(`Please enter a first number of pair: `);
    }

    static readSecondPairNumber() {
        return this.readNumber(`Please enter a second number of pair: `);
    }

    static readNumberWithinRanges() {
        return this.readNumber(`Please enter a number within 20 of 100 or 400: `);
    }

    static readFirstNumberSign() {
        return this.readNumber(`Please enter a first number to check: `);
    }

    static readSecondNumberSign() {
        return this.readNumber(`Please enter a second number to check: `);
    }

    static readUserPosition() {
        return this.readNumber(`Please enter a position to delete: `);
    }

    static readUserNumberCheck() {
        return this.readNumber(`Please enter a number to check: `);
    }

    static readUserFirstNumberIsWithinRange50And99() {
        return this.readNumber(`Please enter first number to check if it is within range of 50 and 99: `);
    }

    static readUserSecondNumberIsWithinRange50And99() {
        return this.readNumber(`Please enter second number to check if it is within range of 50 and 99: `);
    }

    static readUserThirdNumberIsWithinRange50And99() {
        return this.readNumber(`Please enter third number to check if it is within range of 50 and 99: `);
    }

    static readUserFirstNumberToCheckLargest() {
        return this.readNumber(`Please enter your first number to check which is the largest: `);
    }

    static readUserSecondNumberToCheckLargest() {
        return this.readNumber(`Please enter your second number to check which is the largest: `);
    }

    static readUserThirdNumberToCheckLargest() {
        return this.readNumber(`Please enter your third number to check which is the largest: `);
    }

    static readUserFirstNumberToCheckClosestToHundred() {
        return this.readNumber(`Please enter your first number to check closest to a hundred: `);
    }

    static readUserSecondNumberToCheckClosestToHundred() {
        ;
        return this.readNumber(`Please enter your second number to check closest to a hundred: `);
    }

    static readFirstNumberOfTwoNumberAreInRange40And60Or70And100() {
        return this.readNumber(`Please enter your first number to check if it is within 40 and 60 or 70 and 100: `);
    }

    static readSecondNumberOfTwoNumberAreInRange40And60Or70And100() {
        return this.readNumber(`Please enter your second number to check if it is within 40 and 60 or 70 and 100: `);
    }

    static readFirstNumberLargestWithinRangeOf40And60() {
        return this.readNumber(`Please enter your first number to see which one is largest with 40 and 60 range: `);
    }

    static readSecondNumberLargestWithinRangeOf40And60() {
        return this.readNumber(`Please enter your second number to see which one is largest with 40 and 60 range: `);
    }

    static readFirstNumberToCheckIfItHasSameLastDigit() {
        return this.readNumber(`Please enter your first number to check if it has same last digit as others: `);
    }
    
    static readSecondNumberToCheckIfItHasSameLastDigit() {
        return this.readNumber(`Please enter your second number to check if it has same last digit as others: `);
    }

    static readThirdNumberToCheckIfItHasSameLastDigit() {
        return this.readNumber(`Please enter your third number to check if it has same last digit as others: `);
    }

    static readStundentMarkForExam() {
        return this.readNumber(`Please enter stundent mark for an exam: `);
    }

    static readUserFirstNumberToCheckRange50And80() {
        return this.readNumber(`Please enter first number: `);
    }

    static readUserSecondNumberToCheckRange50And80() {
        return this.readNumber(`Please enter second number: `);
    }

    static readUserFirstNumberOrSumOrDiffrenceIs8() {
        return this.readNumber(`Please enter your first number: `);
    }

    static readUserSecondNumberOrSumOrDiffrenceIs8() {
        return this.readNumber(`Please enter your second number: `);
    }

    static readUserFirstNumberCheckSetOfThree() {
        return this.readNumber(`Please enter your first number to check: `);
    }

    static readUserSecondNumberCheckSetOfThree() {
        return this.readNumber(`Please enter your second number to check: `);
    }

    static readUserThirdNumberCheckSetOfThree() {
        return this.readNumber(`Please enter your third number to check: `);
    }

    static readUserFirstNumberStrictSoftMode() {
        return this.readNumber('Please enter your first number to check mode: ');
    }

    static readUserSecondNumberStrictSoftMode() {
        return this.readNumber('Please enter your second number to check mode: ');
    }

    static readUserThirdNumberStrictSoftMode() {
        return this.readNumber('Please enter your third number to check mode: ');
    }

    static readFirstOfThreeNumberHaveSameRightmostDigit() {
        return this.readNumber('Please enter your first number to check right digit: ');
    }

    static readSecondOfThreeNumberHaveSameRightmostDigit() {
        return this.readNumber('Please enter your second number to check right digit: ');
    }
    
    static readThirdOfThreeNumberHaveSameRightmostDigit() {
        return this.readNumber('Please enter your third number to check right digit: ');
    }

    static readFirstOfThreeNumberGreaterThan20() {
        return this.readNumber('Please enter your first number to check: ');
    }

    static readSecondOfThreeNumberGreaterThan20() {
        return this.readNumber('Please enter your second number to check: ');
    }
    
    static readThirdOfThreeNumberGreaterThan20() {
        return this.readNumber('Please enter your third number to check: ');
    }

    static readFirstNumberSumOrDiffIs15() {
        return this.readNumber('Please enter your first number to check if it is 15: ');
    }

    static readSecondNumberSumOrDiffIs15() {
        return this.readNumber('Please enter your second number to check if it is 15: ');
    }

    static readFirstNumberMultiple7Or11() {
        return this.readNumber(`Please enter your first number to check if it multiple of 7 or 11: `);
    }

    static readSecondNumberMultiple7Or11() {
        return this.readNumber(`Please enter your second number to check if it multiple of 7 or 11: `);
    }

    static readUserNumberCheckRange40To10000() {
        return this.readNumber(`Please enter your number to check if it is in range from 40 to 10000: `);
    }

    static readUserNumberConvertNumberToHoursAndMinutes() {
        return this.readNumber(`Enter a number of minutes to convert to hours and minutes: `);
    }    

    static readFirstUserNumberToDivide() {
        return this.readNumber(`Enter your first number: `);
    }

    static readSecondUserNumberToDivide() {
        return this.readNumber(`Enter your second number: `);
    }

    static readUserNumberAmountOfCopies() {
        return this.readNumber(`Enter a number of times you want to multiple string: `);
    }

    static readUserNumberCreateStringUsingFirstAndLastGivenNumberOfCharacters() {
        return this.readNumber(`Enter a number to create a new string: `);
    }

    static readAddTwoDigitsToGivenPositiveInteger() {
        return this.readNumber(`Enter your integer: `)
    }

    static readFirstUserNumberToAddTwoPositiveIntegersWithoutCarrying() {
        return this.readNumber(`Enter your first number to add two integers without carrying: `);
    }

    static readSecondUserNumberToAddTwoPositiveIntegersWithoutCarrying() {
        return this.readNumber(`Enter your second number to add two integers without carrying: `);
    }

    static readToFindTypeOfGivenAngle() {
        return this.readNumber(`Enter your angle: `);
    }

    static firstUserNumberOfTwoIntegersAreSimiliar() {
        return this.readNumber(`Enter your first number: `);
    }

    static secondUserNumberOfTwoIntegersAreSimiliar() {
        return this.readNumber(`Enter your second number: `);
    }

    static userDivisorOfTwoIntegersAreSimiliar() {
        return this.readNumber(`Enter you divisor: `);
    }

    static readXInCheckWhetherItIsPossibleToReplaceDollarSignInGivenExpression() {
        return this.readNumber(`Enter you x: `);
    }

    static readYInCheckWhetherItIsPossibleToReplaceDollarSignInGivenExpression() {
        return this.readNumber(`Enter you y: `);
    }

    static readZInCheckWhetherItIsPossibleToReplaceDollarSignInGivenExpression() {
        return this.readNumber(`Enter you z: `);
    }

    static readUserNumberToFindKthGreatestElementInGivenArrayOfIntegers() {
        return this.readNumber(`Enter your kth element: `);
    }

    static readUserNumberToFindMaximumPossibleSumOfKConsecutiveNumbers() {
        return this.readNumber(`Enter your number of kth consecutive numbers: `);
    }

    static readUserReplacementNumberToReplaceAllNumberWithSpecifiedNumberInArray() {
        return this.readNumber(`Enter your replacement number to replace all numbers in array: `)
    }

    static readUserReplacerNumberToReplaceAllNumberWithSpecifiedNumberInArray() {
        return this.readNumber(`Enter your replacer number to replace all numbers in array: `)
    }

    static readString(question) {
        return new Promise((resolve) => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            rl.question(question, (answer) => {
                const number = String(answer);
                rl.close();
                resolve(number);
            });
        });
    }
    
    static readUserString() {
        return this.readString(`Please enter a word: `);
    }

    static readUserStringDeletion() {
        return this.readString(`Please enter your text: `);
    }

    static readUserStringSwap() {
        return this.readString(`Please enter your text for swap: `);
    }

    static readUserStringFinEnd() {
        return this.readString(`Please enter your word for adding first character to front and back: `);
    }

    static readUserStringThreeCharacters() { 
        return this.readString(`Please enter your word to create a new one by adding three last characters: `);
    }

    static readUserStringToCheckJava() {
        return this.readString(`Please enter your word to check if it starts with "Java": `);
    }

    static readUserStringScript() {
        return this.readString(`Please enter your word to check if it contain Script: `);
    }

    static readUserStringToCheckCharacther() {
        return this.readString(`Please enter your string to check a specified character: `);
    }

    static readUserCharacterInString() {
        return this.readString(`Please enter your specified character to check: `);
    }

    static readUserStringToConvertToLowerCase() {
        return this.readString(`Please enter your text to convert first three characters to lower case: `);
    }

    static readStudentFinalExam() {
        return this.readString(`Is student exam was final-exam (yes/no): `);
    }

    static readUserStringForReverse() {
        return this.readString('Enter your text for reverse: ');
    }

    static readUserStringForReplacingEachCharacter() {
        return this.readString(`Enter your text here for changing it: `);
    }

    static readUserStringForCapitalizeFirstLetterOfEachWord() {
        return this.readString(`Enter your text here for capitalizing each word: `);
    }

    static readUserStringToConvertAlphabetically() {
        return this.readString(`Enter your text to change it alphabetically: `);
    }

    static readUserStringCheckCharactersAAndBAreSeparatedBy3Places() {
        return this.readString(`Enter your text to check if a and b are separated by 3 places: `);
    }

    static readUserStringCountVowels() {
        return this.readString(`Enter your text to count vowels: `);
    }

    static readUserStringCheckStringContainsEqualNumberOfPAndT() {
        return this.readString(`Enter your text to check if it contains equal number of P and T: `);
    }

    static readUserStringOfCopiesOfGivenString() {
        return this.readString(`Enter your string: `);
    }

    static readUserStringToCreateFourCopiesOfLastThreeCharacters() {
        return this.readString(`Enter your string to create four copies of last characters: `);
    }

    static readUserStringExtractFirstHalfOfEvenString() {
        return this.readString(`Enter your even string to extract first half of it: `);
    }

    static readUserStringCreateNewStringWithoutFirstAndLastCharacters() {
        return this.readString(`Enter your word to delete first and last character: `);
    }

    static readFirstUserStringConcanateTwoStringsExceptFirstCharacter() {
        return this.readString(`Enter first string here: `);
    }

    static readSecondUserStringConcanateTwoStringsExceptFirstCharacter() {
        return this.readString(`Enter second string here: `);
    }

    static readUserStringToMoveLastThreeCharactersToStart() {
        return this.readString(`Enter you text to add last three characters to start: `);
    }

    static readUserStringCreateStringUsingMiddleThreeCharactersOfOddString() {
        return this.readString(`Enter your text to create a new string using middle three characters: `);
    }

    static readFirstUserStringConcanateTwoStringsIfLengthDoesNotMatch() {
        return this.readString(`Enter your first string here to concanate: `);
    }

    static readSecondUserStringConcanateTwoStringsIfLengthDoesNotMatch() {
        return this.readString(`Enter your second string here to concanate: `);
    }

    static readUserStringCheckStringEndsWithScript() {
        return this.readString(`Enter your string to check if it ends with 'Script': `);
    }

    static readUserStringCheckCityNameIfBeginsWithLosOrNew() {
        return this.readString(`Enter your city: `);
    }

    static readUserStringCreateNewStringIfStringStartOrEndsWithP() {
        return this.readString(`Enter your string to check if it starts or ends with 'P': `);
    }

    static readUserStringCreateStringUsingFirstAndLastGivenNumberOfCharacters() {
        return this.readString(`Enter your string here to create a new: `);
    }

    static readUserStringToReplaceEachCharacterInGivenStringWithNextInEnglishAlphabet() {
        return this.readString(`Enter your string here to replace each character with next in alphabet: `);
    }

    static readUserStringToChangeCaseOfMinimumNumberOfLettersToMakeGivenStringWrittenInUpperOrLowerCase() {
        return this.readString(`Enter your string to change case of minimum number of letters: `);
    }

    static readFirstUserStringToCheckWhetherItIsPossibleToRearrangeCharacters() {
        return this.readString(`Enter your first string for rearrangement: `);
    }

    static readSecondUserStringToCheckWhetherItIsPossibleToRearrangeCharacters() {
        return this.readString(`Enter your second string for rearrangement: `);
    }

    static readUserStringCheckWhetherGivenStringConatinsOnlyLatinAndAlternatingCases() {
        return this.readString(`Enter your string here: `)
    }

    static readNumberArray(question) {
        return new Promise((resolve) => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            rl.question(question, (answer) => {
                let numberArray = [];

                if (answer != null && typeof answer !== 'undefined') {
                    answer = answer.trim();
                }
                
                if (answer != '') {
                    numberArray = answer.split(',').map(Number);
                }
                rl.close();
                resolve(numberArray);
            });
        })
    }

    static readArrayOfThreeNumbersToGetSum() {
        return this.readNumberArray(`Enter array of three numbers to get sum: `);
    }

    static readArrayOfThreeNumbersToRotateLeft() {
        return this.readNumberArray(`Enter array of three number to rotate left: `);
    }

    static readArrayToCheckIfOneAppearsInFirstOrLastPosition() {
        return this.readNumberArray(`Enter your array to check first and last position: `);
    }

    static readArrayToCheckFirstAndLastElementsAreSameInGivenArray() {
        return this.readNumberArray(`Enter your array to check whether first and last elements are same: `);
    }

    static readArrayToReverseElementsOfGivenArray() {
        return this.readNumberArray(`Enter your array to reverse it: `);
    }

    static readArrayToFindLargestValueBetweenFirstAndLastElementsAndSetOtherElementsToThatValueOfGivenArray() {
        return this.readNumberArray(`Enter your array to find largest and set other elements to that value: `);
    }

    static readFirstArrayToCreateArrayTakingMiddleElementsOfTwoArrays() {
        return this.readNumberArray(`Enter your first array: `);
    }

    static readSecondArrayToCreateArrayTakingMiddleElementsOfTwoArrays() {
        return this.readNumberArray(`Enter your second array: `);
    }

    static readArrayToCreateArrayByTakingFirstAndLastElementsFromGivenArray() {
        return this.readNumberArray(`Enter your array here to create a new one from first and last element: `);
    }

    static readArrayToCheckWhetherArrayContainsOneOrThree() {
        return this.readNumberArray(`Enter your array here to check if it contains 1 or 3: `);
    }

    static readArrayToCheckWhetherArrayDoesNotContainsOneOrThree() {
        return this.readNumberArray(`Enter your array here to check if it does not contains 1 or 3: `);
    }

    static readArrayToCheckWhetherGivenArrayContainsThirtyAndFourtyTwice() {
        return this.readNumberArray(`Enter your array to check if contains 30 or 40 twice: `);
    }

    static readSwapFirstAndLastElementsOfGivenArray() {
        return this.readNumberArray(`Enter your array to swap first and last elements: `);
    }

    static readArrayToDivieGivenArrayInTwoAndComputeSumOfTwoAPartsToStoreItInArray() {
        return this.readNumberArray(`Enter your array here to divide it in two and compute sum: `);
    }

    static readFirstArrayToDetermineIfTwoArraysAreSameLengthAreSimiliar() {
        return this.readNumberArray(`Enter your first array to check if it is similiar: `);
    }

    static readSecondArrayToDetermineIfTwoArraysAreSameLengthAreSimiliar() {
        return this.readNumberArray(`Enter your second array to check if it is similiar: `);
    }

    static readUserArrayToFindKthGreatestElementInGivenArrayOfIntegers() {
        return this.readNumberArray(`Enter your array: `);
    }

    static readUserArrayToFindMaximumPossibleSumOfKConsecutiveNumbers() {
        return this.readNumberArray(`Enter your array to find maximum possible sum: `);
    }

    static readUserArrayToFindMaximumDifferenceBetweenAnyTwoAdjacentElementsOfGivenArray() {
        return this.readNumberArray(`Enter your array to find maximum difference: `);
    }

    static readUserArrayToFindMaximumDifferenceAmongAllPossiblePairsOfGivenArray() {
        return this.readNumberArray(`Enter your array to find maximum difference among all pairs: `);
    }

    static readUserArrayToFindNumberAppearingMostFrequentlyInGivenArray() {
        return this.readNumberArray(`Enter your array to find number appearing most frequently: `);
    }

    static readUserArrayToReplaceAllNumbersWithSpecifiedNumberInArray() {
        return this.readNumberArray(`Enter your array to replace all numbers with specified number in array: `);
    }

    static readUserArrayToComputeSumOfAbsoluteDifferenceOfConsecutiveNumbersInGivenArray() {
        return this.readNumberArray(`Enter your array to compute sum of abosulute difference numbers in given array: `);
    }

    static readUserArrayToComputeSumOfAbsoluteDifferenceOfConsecutiveNumbersInGivenArray() {
        return this.readNumberArray(`Enter your array to compute sum of absolute difference of consecutive numbers: `);
    }

    static readFirstUserArrayToCheckIfThereIsAtLeastOneElementInTwoGivenSortedArrays() {
        return this.readNumberArray(`Enter your first array: `);
    }

    static readSecondUserArrayToCheckIfThereIsAtLeastOneElementInTwoGivenSortedArrays() {
        return this.readNumberArray(`Enter your second array: `);
    }

    static readStringArray(question) {
        return new Promise((resolve) => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            rl.question(question, (answer) => {
                let stringArray = [];

                if (answer != null && typeof answer !== 'undefined') {
                    answer = answer.trim();
                }
                        
                if (answer != '') {
                    stringArray = answer.split(',').map(str => str.trim());
                }
                rl.close();
                resolve(stringArray);
            });
        });
    }

    static readUserArrayToFindLongestStringFromGivenArray() {
        return this.readStringArray(`Enter your string array here: `);
    }

    static readUserArrayFindShortestPossibleStringConvertIntoStringAndConvertIntoPalindrome() {
        return this.readStringArray(`Enter your string array here to find shortest string and converst into palindrome: `)
    }
}
