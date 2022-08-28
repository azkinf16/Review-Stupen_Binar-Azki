const checkEmail = (email) => {
    // declared regular expression
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    let anotherRegex = /^[a-zA-Z0-9._-]+@/;
    
    // checkout data type to 'email' validation
    if (email === undefined) {
        return "ERROR: Can't continue to validation because undefined email"
    } else if (typeof email !== 'string'){
        return "ERROR: Invalid data type"
    } else {
        if (!email.match(anotherRegex)) {
            return "ERROR: You should use an email template as usual like binar@gmail.com"
        } else
        return email.match(regex) ? 'VALID' : 'INVALID';
    }
}

console.log(checkEmail('apranata@binar.coss.id'));
console.log(checkEmail('apranata@binar.com'));
console.log(checkEmail('apranata'));
console.log(checkEmail(0));
console.log(checkEmail());