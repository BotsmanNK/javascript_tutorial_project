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

}