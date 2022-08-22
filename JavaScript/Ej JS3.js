let n1 = prompt("ingrese un numero")
let n2 = prompt("ingrese un numero")
let n3 = prompt("ingrese un numero")

n1 = parseInt(n1); //si usamos parseFloat seria para numeros decimales
n2 = parseInt(n2);
n3 = parseInt(n3);

if(n1 == n2 && n1 == n3){
let suma = n1 + n2
let final = suma * n3
console.log('el resultado de la cuenta es ' + final);
//se ahorran lineas : console.log((n1+n2)*n3)
}else{
    console.log('los numeros ingresados no son iguales');
}