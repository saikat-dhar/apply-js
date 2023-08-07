
function kilometer (miles) {
     const fullKilo = miles*1.609344;
     return fullKilo;
}

let total = 20;
let totalKilometer = kilometer(total);
console.log( 'miles:', totalKilometer);
