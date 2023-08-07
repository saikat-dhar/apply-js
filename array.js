
function isOdd (number) {
    let sum = 0 ;
    for ( let i = 0; i < number.length ; i++) {
        let index = i ;
        let odd = number[index]
        sum = sum + odd ;
        console.log(index , odd, sum);
    }
    return sum;
}
const meNumber = [ 23, 14, 65, 78, 34, 46, 42, 67, 85];
const myNumber = isOdd(meNumber);
console.log(myNumber);

function isOddNumber (numbers) {
    let oddnumber = [];
    for ( let i = 0; i < numbers.length ; i++) {
        let index = i;
        let isoddm = numbers[index];
        if (isoddm %2 !== 0) {
          console.log(index, isoddm);  
          oddnumber.push(isoddm);
        }
    }
    return oddnumber;
}

const herNumber = [ 12, 33, 46, 67, 94, 63, 73, 66, 80];
let oddnumber = isOddNumber(herNumber);
console.log(oddnumber);



