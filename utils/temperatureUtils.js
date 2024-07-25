class TemperatureUtils {
    static celsiusToFarenheit(celsius) {
        const celsiusTemp = celsius;
        return (celsiusTemp * 9 / 5 + 32);  
    }

    static farenheitToCelsius(fahrenheit) {
        const fahrenheitTemp = fahrenheit;
        return ((fahrenheitTemp - 32) * 5 / 9);
    }
}

module.exports = TemperatureUtils