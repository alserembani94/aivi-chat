type DataTypeStrings = "email" | "phone";

type convertToIntProps = {
    value: string,
    min?: number,
    max?: number,
    numberType?: 'integer' | 'float',
    decimalPoint?: number,
}

export const validateData = (dataValue: string, dataType: DataTypeStrings) => {
    if (dataType === "email") {
        return dataValue.match(/[A-Z]/);
    }
};

export const convertToInt = ({
    value,
    min = -Infinity,
    max = Infinity,
    numberType = 'integer',
    decimalPoint = 1,
}: convertToIntProps) => {
    // Use case 1: Empty string
    if (value === '') return 0;
    else {
        const extractedNumber = value.match(/(\d+)\.?(\d*)/g)?.join('');
        // Use case 2: Contains no number
        if(!extractedNumber) return 0;
        else {
            // Use case 3: Have 0 leading number
            const parsedNumber = (extractedNumber.length > 1 && extractedNumber.startsWith('0'))
            ? numberType === 'integer' ? parseInt(extractedNumber.substr(1), 10) : Number(extractedNumber.substr(1))
            // Perfect number, voilla!
            : numberType === 'integer' ? parseInt(extractedNumber, 10) : Number(extractedNumber);


            // Check for optional max and min
            return parsedNumber >= max ? max : parsedNumber <= min ? min : parsedNumber;
        }
    }
}
