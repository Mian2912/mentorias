'use strict';
const regresaTrue = () => {
    console.log('Regresa True');
    return true;
} 

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
} 

regresaTrue();
regresaFalse();
console.warn('Not o la negacion');
console.log(!true);
console.log(!false);

console.warn('And');
console.log(true && true);
console.log(true && false);

console.log(!regresaFalse() && regresaTrue())
console.warn('or')

!regresaFalse() || regresaTrue() 