import readline from 'readline';

export class ReadLineUtils {
    static readNumber(question) {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(question, (answer) => {
            const number = Number(answer);
            rl.close();
            resolve(number);
        });
    });
    }
    
    static readNumberUpToTen() {
        return this.readNumber('Please enter a number between 1 to 10: ');
    }

    static readInitialNumber() {
        return this.readNumber(`Please enter a number: `); 
    }

    static readFirstNumber() {
        return this.readNumber(`Please enter a first number for a sum of two: `);
    }
    
    static readSecondNumber() {
        return this.readNumber(`Please enter a second number for a sum of two: `);
    }

    static readDifferenceNumber() {
        return this.readNumber(`Please enter a number to calculate the differnce: `);
    }

    static readFirstPairNumber() {
        return this.readNumber(`Please enter a first number of pair: `);
    }

    static readSecondPairNumber() {
        return this.readNumber(`Please enter a second number of pair: `);
    }

    static readNumberWithinRanges() {
        return this.readNumber(`Please enter a number within 20 of 100 or 400: `);
    }

    static readFirstNumberSign() {
        return this.readNumber(`Please enter a first number to check: `);
    }

    static readSecondNumberSign() {
        return this.readNumber(`Please enter a second number to check: `)
    }
}
