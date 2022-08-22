let lista1_de_valores = solicitar_lista_de_valores("Por favor ingrese un valor para la lista número 1");
let lista2_de_valores = solicitar_lista_de_valores("Por favor ingrese un valor para la lista número 2");

console.log("Lista de valores número 1:");
console.log(lista1_de_valores);
console.log("Lista de valores número 2:");
console.log(lista2_de_valores);

let suma_de_valores_lista_numer_1 = sumar_valores_de_una_lista(lista1_de_valores);
let suma_de_valores_lista_numer_2 = sumar_valores_de_una_lista(lista2_de_valores);

console.log("La suma de la lista es:" + suma_de_valores_lista_numer_1);
console.log("La suma de la lista es:" + suma_de_valores_lista_numer_2);

if(suma_de_valores_lista_numer_1 > suma_de_valores_lista_numer_2){
    console.log("Lista 1 mayor.");
}else if(suma_de_valores_lista_numer_1 < suma_de_valores_lista_numer_2){
    console.log("Lista 2 mayor.");
}else{
    console.log("Listas iguales.");
}