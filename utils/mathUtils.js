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

    static largestAmongTwoNumbers(firstNumber, secondNumber) {
        let checkNumber = 0;

        let largestNumber = firstNumber > secondNumber ? checkNumber = firstNumber : checkNumber = secondNumber;
        return largestNumber;
    }

    static largestAmongThreeNumber(firstNumber, secondNumber, thirdNumber) {
        let largestNumber = 0;

        const firstCheck = firstNumber > secondNumber ? largestNumber = firstNumber : largestNumber = secondNumber;
        const secondCheck = thirdNumber > firstCheck ? largestNumber = thirdNumber : firstCheck;
        return largestNumber;
    }

    static closestNumberToNeededNumberAmongstTwoNumber(firstNumber, secondNumber, breakPoint) {
        const firstAbsolute = Math.abs(firstNumber - breakPoint);
        const secondAbsolute = Math.abs(secondNumber - breakPoint);

        const checkAbsolute = firstAbsolute > secondAbsolute;

        const resultNumber = checkAbsolute ? firstAbsolute : secondAbsolute;
        return resultNumber;
    }

    static checkIfLastDigitIsPositiveForThreePositiveNumbers(firstNumber, secondNumber, thirdNumber) {
        const positiveCheck = firstNumber > 0 && secondNumber > 0 && thirdNumber > 0;

        if (positiveCheck) {
            return (firstNumber % 10 == secondNumber % 10) && (secondNumber % 10 == thirdNumber % 10);
        } else {
            return false;
        }
    }
}