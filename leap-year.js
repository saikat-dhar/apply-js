
function leapYear (year) {
    const isLeap = year % 4;
    if (isLeap == 0) {
        return true;
    }
    else{
        return false;
    }
}
const isLeapyear = leapYear(1920);
console.log(isLeapyear);
const isYear = leapYear(2033);
console.log(isYear);