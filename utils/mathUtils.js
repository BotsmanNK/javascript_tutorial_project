export class MathUtils {
    static round(number, digits) {
        const digitsPow = Math.pow(10, digits);
        return Math.round((number + Number.EPSILON) * digitsPow) / digitsPow;
    }
}