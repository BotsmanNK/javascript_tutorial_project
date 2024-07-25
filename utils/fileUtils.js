export class FileUtils {
    static getFileExtension(fileName) {
        return fileName.split('.').pop();
    }
}