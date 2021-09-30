// if we have a function inside of the module that we invoke, yes that code will run
// even though we didn't assign it to a variable like require('./7-mind-grenade') in node.js

const num1 = 5;
const num2 = 10;

function addValues(){
    console.log(`the sum is: ${num1 + num2}`)
}

addValues()