function repeatString(string, number) {
    let returnString = '';
    if (number < 0) {
        return 'ERROR';
    } else {
        for (let i = 0; i < number; i++) {
                returnString += string;
                console.log(returnString);
            }
            return returnString;
    }
}

// Do not edit below this line
module.exports = repeatString;
