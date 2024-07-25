export class DateTimeUtils {
     static getDay(date) {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        return daysOfWeek[date.getDay()];
    }

    static getCurrentDay(date) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${day} / ${month} / ${year} or ${month} / ${day} / ${year}`;
    }

    static getTime(date) {
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        const amPm = hours >= 12 ? "PM" : "AM";

        hours = hours % 12;
        hours = hours ? hours : 12;
        
        return `${hours} ${amPm} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
    }

    static addYear(date) {
        date.setYear(date.getFullYear() + 1);
    }

    static leapYear(date) {
        const year = date.getFullYear();

        if (year % 4 != 0) {
            return false;
        }

        if (year % 100 != 0) {
            return true;
        }

        if (year % 400 == 0) {
            return true;
        } 

        return false;
    }
}