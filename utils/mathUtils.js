export class MathUtils {
    static round(number, digits) {
        const digitsPow = Math.pow(10, digits);
        return Math.round((number + Number.EPSILON) * digitsPow) / digitsPow;
    }

    static allWithinRange(numbers, startRange, endRange) {
        return numbers.every((number) => this.withinRange(number, startRange, endRange));
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
    
    static checkIfLastDigitIsSameForThreeNumbers(firstNumber, secondNumber, thirdNumber) {

        return firstNumber % 10 == secondNumber % 10 && secondNumber % 10 == thirdNumber % 10;
    }
    
    static checkIfLastDigitIsSameForTwoOfThreePositiveNumbers(firstNumber, secondNumber, thirdNumber) {
        return firstNumber % 10 == secondNumber % 10 || secondNumber % 10 == thirdNumber % 10 ||
            firstNumber % 10 == thirdNumber % 10;
    
    }

    static checkIfThreeNumbersLessThanGivenNumber(firstNumber, secondNumber, thirdNumber, numberGreaterThan) {
        return (
            (firstNumber >= numberGreaterThan && (firstNumber < secondNumber || firstNumber < thirdNumber)) ||
            (secondNumber >= numberGreaterThan && (secondNumber < firstNumber || secondNumber < thirdNumber)) ||
            (thirdNumber >= numberGreaterThan && (thirdNumber < secondNumber || thirdNumber < firstNumber)));
    }

    static addTwoPositiveIntegersWithoutCarrying(firstNumber, secondNumber) {
        let result = 0;
        let multiplier = 1;

        while (firstNumber > 0 && secondNumber > 0) {
            result += multiplier * ((firstNumber + secondNumber) % 10); 
            firstNumber = Math.floor(firstNumber / 10); 
            secondNumber = Math.floor(secondNumber / 10); 
            multiplier *= 10; 
        }
        return result;
    }

    static checkWhetherTwoIntegersAreSimiliar(firstNumber, secondNumber, divisor) {
        if ((firstNumber % divisor === 0 && secondNumber % divisor === 0) ||
            (firstNumber % divisor !== 0 && secondNumber % divisor !== 0)) {
            return true; 
        }
        return false; 
    }

    static checkArithmeticsExpression(firstNumber, secondNumber, totalNumber) { 
        return firstNumber + secondNumber == totalNumber || firstNumber * secondNumber == totalNumber ||
               firstNumber / secondNumber == totalNumber || firstNumber - secondNumber == totalNumber;
    }
}