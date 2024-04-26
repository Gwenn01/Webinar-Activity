/*
    ARNEL GWEN NUQUI
    BS INFOTECH 2C
    1 Create a function that will return the sum 3 numbers
    2 Create a function that will return the difference of the 2 numbers
    3 Create a function that will return the product of the 2 numbers
    4 Create a function that will return the average of the 2 numbers
*/
let numOne = 5;
let numTwo = 10;
let numThree = 15;

function sum(numOne, numTwo) {
    return numOne + numTwo + numThree;
}
console.log(`Sum of Three Numbers: ${sum(numOne, numTwo)}`)
function difference(numOne, numTwo) {
    return numOne - numTwo;
}
console.log(`Difference of Two Numbers: ${difference(numOne, numTwo)}`)
function product(numOne, numTwo) {
    return numOne * numTwo;
}
console.log(`Product of Two Numbers: ${product(numOne, numTwo)}`)
function average(numOne, numTwo) {
    return (numOne + numTwo) / 2;
}
console.log(`Average of Two Numbers ${average(numOne, numTwo)}`)