
function isEven (number) {
    const myEven  = number % 2 ;
    if ( myEven == 0) {
        return true;
    }
    else {
        return false;
    }
}
const myIsNumber = 333;
const myEvenNumber = isEven(myIsNumber); 
console.log(myEvenNumber);
const hisNumber = 258;
const hisEvenNumber = isEven(hisNumber);
console.log(hisEvenNumber);
