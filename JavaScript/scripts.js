let numero1 = prompt("Ingrese un numero por favor");
let numero2 = prompt("Ingrese el otro número por favor");
let mensaje = '';


if(numero1 > 0 && numero2 > 0){
    mensaje = "estas en el 1er cuadrante";
   
}
if(numero1 < 0 && numero2 > 0){
    mensaje = "estas en el 2do cuadrante"
    
}

// if(!numero1 || !numero2 || !numero1 )

const numeros = document.createElement("div");
const resultado = document.createElement("div");

numeros.textContent += "Numeros: " + String(numero1) + ", " + String(numero2);
numeros.setAttribute("class", "alert alert-primary");
document.getElementById("numeros").appendChild(numeros);

resultado.setAttribute("class", "alert alert-success");
resultado.textContent += "El resultado es: " + (numero1 + numero2);
document.getElementById("resultados").appendChild(resultado);