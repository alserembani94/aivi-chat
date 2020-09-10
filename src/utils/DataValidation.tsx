enum DataType {
    email,
    phone,
}

type DataTypeStrings = keyof typeof DataType;

const validateData = (dataValue: string, dataType: DataTypeStrings) => {
    if (dataType === 'email') {
        return dataValue.match(/[A-Z]/);
    }
}

export {
    validateData,
};