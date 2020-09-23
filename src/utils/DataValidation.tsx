type DataTypeStrings = "email" | "phone";

export const validateData = (dataValue: string, dataType: DataTypeStrings) => {
    if (dataType === "email") {
        return dataValue.match(/[A-Z]/);
    }
};

export const convertToInt = (value: string, limit: number = Infinity) => {
    // Use case 1: Empty string
    if (value === '') return 0;
    else {
        const extractedNumber = value.match(/\d+/g)?.join('');
        // Use case 2: Contains no number
        if(!extractedNumber) return 0;
        else {
            // Use case 3: Have 0 leading number
            const parsedNumber = (extractedNumber.length > 1 && extractedNumber.startsWith('0'))
            ? parseInt(extractedNumber.substr(1), 10)
            // Perfect number, voilla!
            : parseInt(extractedNumber, 10);
            // Check for optional limit
            return parsedNumber >= limit ? limit : parsedNumber;
        }
    }
}