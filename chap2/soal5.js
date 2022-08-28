const getSplitName = (personName) => {
    // validation data type of 'personName'
    if (personName === undefined) {
        return "ERROR : Can't continue to validation because undefined person name"
    } else if (typeof personName !== 'string') {
        return 'ERROR : Can only enter string data type'
    }
    
    // declared a 'splitName' to split value 'personName' using .split()
    let splitName = personName.split(' ');

    // checkout condition of 'personName' and return that to object
    switch(splitName.length) {
        case 3:
            return {
                firstName:splitName[0],
                middleName:splitName[1],
                lastName:splitName[2]
            }
        break
        case 2:
            return {
                firstName:splitName[0],
                middleName:null,
                lastName:splitName[1]
            }
        break
        case 1:
            return {
                firstName:splitName[0],
                middleName:null,
                lastName:null
            }
        break
        default:
            return 'ERROR : This function is only for 3 characters name'
        break
    }
}

console.log(getSplitName('Aldi Daniela Prananta'));
console.log(getSplitName('Dwi Kuncoro'));
console.log(getSplitName('Aurora'));
console.log(getSplitName('Aurora Aureliya Sukma Dara'));
console.log(getSplitName(0));
console.log(getSplitName());