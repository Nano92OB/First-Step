let alturaProm = 0;
let alturaTotal = 0;
i = 1

while(i<=5){
    let altura = parseInt(prompt("ingrese altura"));
    console.log(altura);
    alturaTotal += altura;
    i++
}
alturaProm = alturaTotal/5;
console.log(alturaProm);
alert("La altura promedio es "+ alturaProm);

/* establecemos 2 variables para la altura promedio y la suma de 
alturas, la variable a iterar arranca de 1, porque se le pide al 1ero
que ponga su altura, hasta el 5to.
se abre un while con la iteracion igual o menor a 5, una variable 
altura parseprompt para que pida las altuiras, luego un consol log
a la variable alturaTotal, se le va a ir sumando altura, y asi se itera
hasta el 5to.
el valor de alturaProm va a ser la suima de las alturas /5 */


// A CONTINUACION OTRA ALTERNATIVA

let alturas = [];
for(i=0; i<5; i++){
    let altura = solicitar_altura();
    alturas.push(altura);
}
console.log("A continuación figuran las alturas ingresadas:");
console.log(alturas);
let promedio = calcular_promedio_array(alturas);
console.log("El promedio de los valores ingresados es: " + promedio);

/* Aqui defino las funciones */

function solicitar_altura(){
    let altura = prompt("Por favor ingrese una altura");
    altura = parseInt(altura);
    return altura;
}

function calcular_promedio_array(array){
    let promedio = 0;
    let suma_total = 0;
    let cantidad_total = array.length;
    let i = 0;
    while(i < cantidad_total){
        suma_total += array[i];
        i++;
    }
    console.log("La suma total de los valores ingresados es: " + suma_total);
    promedio = suma_total / cantidad_total;
    return promedio;
}