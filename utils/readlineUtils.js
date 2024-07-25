import promptSync from 'prompt-sync';

const prompt = promptSync();

export class ReadLineUtils {
    static readNumberUpToTen() {
        return Number(prompt("Please enter a number between 1 to 10 "));
    }
}