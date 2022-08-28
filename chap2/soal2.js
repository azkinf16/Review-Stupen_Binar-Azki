const checkTypeNumber =  (givenNumber) => {
    // checkout data type of input value 'givenNumber'
    if (givenNumber === undefined) {
        return 'ERROR: Bro where is the parameter ?'
    } else if (typeof givenNumber !== 'number') {
        return 'ERROR: Invalid data type'
    } else {
        return (givenNumber % 2 === 0) ? 'GENAP' : 'GANJIL'; 
    }
}

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(11));
console.log(checkTypeNumber('11'));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());


