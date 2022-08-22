let numero1 = prompt("Ingrese un numero por favor");
let numero2 = prompt("Ingrese el otro numero por favor");
let mensaje = "El valor corresponde al segundo cuadrante";

if (isNaN(numero1) || isNaN(numero2)) {
  mensaje = "Uno de los valores no es un numero.";
} else if (parseInt(numero1) > 0 && parseInt(numero2) > 0) {
  mensaje = "El valor corresponde al primer cuadrante";
}

// creamos los elementos DIVS
const divNumeros = document.createElement("div");
const resultado = document.createElement("div");
// agregamos texto
divNumeros.textContent +=
  "Numeros: " +
  String(numero1) +
  ", " +
  String(numero2) +
  " y la suma es: " +
  (parseInt(numero1) + parseInt(numero2));
// asignamos una clase bootstrap de alert
divNumeros.setAttribute("class", "alert alert-info");
// lo asignamos como hijo para mostrar en el div "numero"
document.getElementById("numeros").appendChild(divNumeros);

resultado.setAttribute("class", "alert alert-success");
resultado.textContent += "El resultado es: " + mensaje;
document.getElementById("resultados").appendChild(resultado);