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

    static createDotProductsOfTwoGiven3DVector(x1, y1, z1, x2, y2, z2) {
        return x1*x2 + y1*y2 + z1*z2;
    }
}