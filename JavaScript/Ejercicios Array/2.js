/*Crea un array de números donde le indicamos por teclado el tamaño del array, 
rellenaremos el array con números aleatorios entre 0 y 9, al final muestra por pantalla el valor de cada posición 
y la suma de todos los valores. Haz un método para rellenar el array 
(que tenga como parámetros los números entre los que tenga que generar), 
para mostrar el contenido y la suma del array y un método privado para generar número 
aleatorio (lo puedes usar para otros ejercicios). */


let arrayAleatorio = [];
let sumaArray=0;

let numeros = parseInt(prompt("Ingrese tamanio del array"));

for (let i = 0; i < numeros; i++) {
    let tamanio = getRandom(0,9);
    arrayAleatorio.push(tamanio);
    sumaArray = sumaArray + arrayAleatorio[i]
}
console.log(arrayAleatorio);
mostrar_datos(arrayAleatorio);
console.log("la suma de todos los valores es: " + sumaArray);



//funcion para numeros aleatorios enteros
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function mostrar_datos(lista){
    lista.forEach(imprimir_linea);
}

function imprimir_linea(elemento,index){
    console.log("el valor", elemento, "esta en el indice", index);
}