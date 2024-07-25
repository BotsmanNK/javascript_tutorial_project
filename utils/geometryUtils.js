class GeometryUtils {
    static findTriangleArea(a, b, c){
        const halfPerimetr = (a + b + c) / 2;
        return Math.sqrt(halfPerimetr * (halfPerimetr - a) * (halfPerimetr - b) * (halfPerimetr - c));
    }
}

module.exports = GeometryUtils;
