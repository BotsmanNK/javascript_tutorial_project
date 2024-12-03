export class ArrayUtils {
    static sumOfThreeElementsOfArrayOfLengthThree(array) {
        return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }

    static rotateElementsLeftOfLengthThree(array) {
        return [array[1], array[2], array[0]];
    }

    static findLargestValueBetweenFirstAndLastElementsAndSetOtherElementsToThatValueOfGivenArray(array) {
        const maximumValue = array[0] > array[array.length - 1] ? array[0] : array[array.length - 1];

        for (let i = 0; i < array.length; i++) {
            array[i] = maximumValue;
        }

        return array;
    }

    static swapFirstAndLastElementsOfGivenArray(array) {
        if (array.length <= 1) return array;

        const firstElement = array[0];
        const lastElement = array[array.length - 1];

        array[0] = lastElement;
        array[array.length - 1] = firstElement;

        return array;
    }

    static findLongestStringFromGivenArray(array) {
        let lgth = 0;
        let longest;

        for (let i = 0; i < array.length; i++) {
            if (array[i].length > lgth) {
                let lgth = array[i].length;
                longest = array[i];
            }
        }
        return longest;
    }

    static divideGivenArrayInTwoAndComputeSumOfTwoPartsToStoreItInArray(array) {
        let result = [0, 0];

        for(let i = 0; i < array.length; i++) {	
            if(i % 2) result[1] += array[i]; 
            else
                result[0] += array[i]; 
            }
            return result; 
    }
        
    static determineIfTwoArraysAreSameLengthAreSimiliar(array1, array2) {
        if (array1.length !== array2.length) {
            return false;
        }
        
        
        const sortedArray1 = array1.slice().sort();
        const sortedArray2 = array2.slice().sort();
        
        
        for (let i = 0; i < sortedArray1.length; i++) {
            if (sortedArray1[i] !== sortedArray2[i]) {
                return false;
            }
        }
        return true;
    }

    static findKthGreatestElementInGivenArrayOfIntegers(array, number) {
        array.sort((a, b) => b - a);
        
        return array[number - 1];
    }

    static findMaximumPossibleSumOfKConsecutiveNumbers(array, number) {
        let result = 0;
        let workingSum = 0;

        for (let i = 0; i < number - 1; i++) {
            workingSum += array[i];
        }
        for (let i = number - 1; i < array.length; i++) {
            workingSum += array[i];
            if (workingSum > result) {
            result = workingSum;
            }
            workingSum -= array[i - number + 1];
            }
        return result;          
    }

    static findMaximumDifferenceBetweenAnyTwoAdjacentElementsOfGivenArray(array) {
        if (array.length < 2) {
            return 0;
        }
    
        let result = 0;
    
        for (let i = 0; i < array.length - 1; i++) {
            let workingDifference = Math.abs(array[i] - array[i + 1]);  
            result = Math.max(result, workingDifference);
        }
        return result;
    }
    
    static findMaximumDifferneceAmongAllPossiblePairsOfGivenArray(array) {
        if (array.length < 2) {
            return 0;
        }
        
        let min = array[0];
        let max = array[0];
    
        for (let i = 1; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];  
            }
            if (array[i] > max) {
                max = array[i];  
            }
        }
        return Math.abs(max - min);
    }
    
    static findNumberAppearingMostFrequentlyInGivenArray(array) {
        let frequency = {};
        let maxCount = 0;
        let result = null;

        for (let i = 0; i < array.length; i++) {
            let num = array[i];
            frequency[num] = (frequency[num] || 0) + 1;

            
            if (frequency[num] > maxCount) {
                maxCount = frequency[num];
                result = num;
            }
        }
        return result;
    }

    static replaceAllNumbersWithSpecifiedNumberInArray(array, replacement, replacer) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === replacement) {
                array[i] = replacer;
            }
        }
        return array;
    }

    static computeSumOfAbsoluteDifferencesOfConsecutiveNumbersInGivenArray(array) {
        let result = 0;  

        for (let i = 1; i < array.length; i++) {
            result += Math.abs(array[i] - array[i - 1]);
        }
        return result;
    }

    static findShortestPossibleStringConvertIntoStringAndConvertIntoPalindrome(array) {
        if (array.length === 0) {
            return;
        }

        let shortestStr = array[0];

        for (let i = 1; i < array.length; i++) {
            if (array[i].length < shortestStr.length) {
                shortestStr = array[i];
            }
        }
        
        return shortestStr + shortestStr.split("").reverse().join("")
    }

    static checkIfThereIsAtLeastOneElementInTwoGivenSortedArrays(array1, array2) {
        for (let i = 0; i < array1.length; i++) {
            for (let j = 0; j < array2.length; j++) {
                if (array1[i] === array2[j]) {
                return true; 
                }
            }
        }
        return false;
    }

}