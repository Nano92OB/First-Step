let numberA = parseInt(prompt("Ingrese el numero A"));
let numberB = parseInt(prompt("Ingrese el numero B"));
let numberC = parseInt(prompt("Ingrese el numero C"));

let numberArray = [numberA,numberB,numberC].sort((a,b) => b-a)[0]
console.log(numberArray);



//.sort lo que hace es ordenarlo de forma decreciente//