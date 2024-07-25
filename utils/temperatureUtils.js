export class TemperatureUtils {
    static celsiusToFarenheit(celsius) {
        return (celsius * 9 / 5 + 32);  
    }

    static farenheitToCelsius(fahrenheit) {
        return ((fahrenheit - 32) * 5 / 9);
    }
}