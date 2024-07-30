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
        return this.readNumber(`Please enter a second number to check: `);
    }

    static readUserPosition() {
        return this.readNumber(`Please enter a position to delete: `);
    }

    static readUserNumberCheck() {
        return this.readNumber(`Please enter a number to check: `);
    }

    static readUserFirstNumberIsWithinRange50And99() {
        return this.readNumber(`Please enter first number to check if it is within range of 50 and 99: `);
    }

    static readUserSecondNumberIsWithinRange50And99() {
        return this.readNumber(`Please enter second number to check if it is within range of 50 and 99: `);
    }

    static readUserThirdNumberIsWithinRange50And99() {
        return this.readNumber(`Please enter third number to check if it is within range of 50 and 99: `);
    }

    static readUserFirstNumberToCheckLargest() {
        return this.readNumber(`Please enter your first number to check which is the largest: `);
    } 

    static readUserSecondNumberToCheckLargest() {
        return this.readNumber(`Please enter your second number to check which is the largest: `);
    }

    static readUserThirdNumberToCheckLargest() {
        return this.readNumber(`Please enter your third number to check which is the largest: `);
    }

    static readUserFirstNumberToCheckClosestToHundred() {
        return this.readNumber(`Please enter your first number to check closest to a hundred: `);
    }

    static readUserSecondNumberToCheckClosestToHundred() {;
        return this.readNumber(`Please enter your second number to check closest to a hundred: `);
    }

    static readFirstNumberOfTwoNumberAreInRange40And60Or70And100() {
        return this.readNumber(`Please enter your first number to check if it is within 40 and 60 or 70 and 100: `);
    }

    static readSecondNumberOfTwoNumberAreInRange40And60Or70And100() {
        return this.readNumber(`Please enter your second number to check if it is within 40 and 60 or 70 and 100: `);
    }

    static readFirstNumberLargestWithinRangeOf40And60() {
        return this.readNumber(`Please enter your first number to see which one is largest with 40 and 60 range: `);
    }

    static readSecondNumberLargestWithinRangeOf40And60() {
        return this.readNumber(`Please enter your second number to see which one is largest with 40 and 60 range: `);
    }

    static readFirstNumberToCheckIfItHasSameLastDigit() {
        return this.readNumber(`Please enter your first number to check if it has same last digit as others: `);
    }
    
    static readSecondNumberToCheckIfItHasSameLastDigit() {
        return this.readNumber(`Please enter your second number to check if it has same last digit as others: `);
    }

    static readThirdNumberToCheckIfItHasSameLastDigit() {
        return this.readNumber(`Please enter your third number to check if it has same last digit as others: `);
    }

    static readStundentMarkForExam() {
        return this.readNumber(`Please enter stundent mark for an exam: `);
    }

    static readUserFirstNumberToCheckRange50And80() {
        return this.readNumber(`Please enter first number: `);
    }

    static readUserSecondNumberToCheckRange50And80() {
        return this.readNumber(`Please enter second number: `);
    }

    static readUserFirstNumberOrSumOrDiffrenceIs8() {
        return this.readNumber(`Please enter your first number: `);
    }

    static readUserSecondNumberOrSumOrDiffrenceIs8() {
        return this.readNumber(`Please enter your second number: `);
    }
    
    static readString(question) {
        return new Promise((resolve) => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            rl.question(question, (answer) => {
                const number = String(answer);
                rl.close();
                resolve(number);
            });
        });
    }
    
    static readUserString() {
        return this.readString(`Please enter a word: `);
    }

    static readUserStringDeletion() {
        return this.readString(`Please enter your text: `);
    }

    static readUserStringSwap() {
        return this.readString(`Please enter your text for swap: `);
    }

    static readUserStringFinEnd() {
        return this.readString(`Please enter your word for adding first character to front and back: `);
    }

    static readUserStringThreeCharacters() { 
        return this.readString(`Please enter your word to create a new one by adding three last characters: `);
    }

    static readUserStringToCheckJava() {
        return this.readString(`Please enter your word to check if it starts with "Java": `);
    }

    static readUserStringScript() {
        return this.readString(`Please enter your word to check if it contain Script: `);
    }

    static readUserStringToCheckCharacther() {
        return this.readString(`Please enter your string to check a specified character: `)
    }

    static readUserCharacterInString() {
        return this.readString(`Please enter your specified character to check: `)
    }

    static readUserStringToConvertToLowerCase() {
        return this.readString(`Please enter your text to convert first three characters to lower case: `)
    }

    static readStudentFinalExam() {
        return this.readString(`Is student exam was final-exam (yes/no): `)
    }
}
