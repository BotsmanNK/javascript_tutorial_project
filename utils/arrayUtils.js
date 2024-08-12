export class ArrayUtils {
    static sumOfThreeElementsOfArrayOfLengthThree(array) {
        const [num1, num2, num3] = array;
        return num1 + num2 + num3;
    }

    static rotateElementsLeftOfLengthThree(array) {
        return [array[1], array[2], array[0]];
    }
}