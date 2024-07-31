export class MathUtils {
    static round(number, digits) {
        const digitsPow = Math.pow(10, digits);
        return Math.round((number + Number.EPSILON) * digitsPow) / digitsPow;
    }

    static allWithinRange(numbers, startRange, endRange) {
        return numbers.every((number) => this.withinRange(number, startRange, endRange))
    }

    static withinRange(number, startRange, endRange) {
        return startRange <= number && number <= endRange;
    }

    static anyWithinRange(numbers, startRange, endRange) {
        return numbers.some((number) => this.withinRange(number, startRange, endRange));
    }

    static closestNumberToNeededNumberAmongstTwoNumber(firstNumber, secondNumber, breakPoint) {
        const firstAbsolute = Math.abs(firstNumber - breakPoint);
        const secondAbsolute = Math.abs(secondNumber - breakPoint);

        return firstAbsolute > secondAbsolute ? firstAbsolute : secondAbsolute;
    }

    static checkIfLastDigitIsPositiveForThreePositiveNumbers(firstNumber, secondNumber, thirdNumber) {

        if (firstNumber > 0 &&
            secondNumber > 0 &&
            thirdNumber > 0) {
            return (firstNumber % 10 == secondNumber % 10) &&
                (secondNumber % 10 == thirdNumber % 10);
        }
        
        return false;
    }
}