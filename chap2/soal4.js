const isValidPassword = (password) => {
    // declared regular expression
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    // checkout data type to 'password' validation
    if (password === undefined) {
        return "ERROR: Can't continue to validation because undefined password"
    } else if (typeof password !== 'string') {
        return 'ERROR: Can only enter string data type'
    } else {
        return (password.match(regex)) ? true : false;
    }
}

console.log(isValidPassword('Meong2021'));
console.log(isValidPassword('meong2021'));
console.log(isValidPassword('@eong'));
console.log(isValidPassword('Meong2'));
console.log(isValidPassword(0));
console.log(isValidPassword());
