export class GeometryUtils {
    static findTriangleArea(a, b, c){
        const halfPerimetr = (a + b + c) / 2;
        return Math.sqrt(halfPerimetr * (halfPerimetr - a) * (halfPerimetr - b) * (halfPerimetr - c));
    }

    static findTypeOfGivenAngle(number) {
        if (number == 90) {
            return 'right';
        } else if (number == 180) {
            return 'straight';
        } else if (number > 0 && number < 90) {
            return 'acute';
        } else if (number > 90 && number < 180) {
            return 'obtuse';
        }
    }
}