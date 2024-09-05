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

        for (var i = 0; i < array.length; i++) {
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

}