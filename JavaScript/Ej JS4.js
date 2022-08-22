// defino variables
let numero1 = prompt("Por favor ingrese el primer número");
let numero2 = prompt("Por favor ingrese el segundo número");
let numero3 = prompt("Por favor ingrese el tercer número");

// convierto a número
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);
numero3 = parseInt(numero3);

// si son iguales escribo mensaje en la página
if(numero1 < 10 && numero2 < 10 && numero3 < 10){
    //console.log('Todos los números son menores a 10');
    
    let elemento = document.getElementById("mensaje");
    elemento.innerHTML = "Todos los números son menores a 10.";
}
    // esto es lo mismo que lo anterior pero todo junto
    //document.getElementById("mensaje").innerHTML = "Todos los números son menores a 10.";