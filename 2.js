function matchFinder(string1, string2) {

    if (typeof string1 === 'string' && typeof string2 === 'string') {
        const match = string1.includes(string2);
        if (match == true) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return 'Please enter valid input';
    }
}
const findAnyMatch = matchFinder('john DO', 'ohn')
console.log(findAnyMatch)
const findAnyMatch1 = matchFinder(true, 2)
console.log(findAnyMatch1)