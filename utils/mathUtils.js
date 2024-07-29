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
}