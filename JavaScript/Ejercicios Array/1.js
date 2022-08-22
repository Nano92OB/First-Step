/*Crea un array de 10 posiciones de números con valores pedidos por teclado. 
Muestra por consola el indice y el valor al que corresponde. 
Haz dos métodos, uno para rellenar valores y otro para mostrar. */

mostrar_datos(solicitar_lista_de_valores());



function mostrar_datos(lista){
    lista.forEach(imprimir_linea) 
}


function imprimir_linea(elemento,index){
    console.log("el valor", elemento, "esta en el indice", index) 
}




function solicitar_lista_de_valores(){
    let valueList = [];
    for(i=0; i<10; i++){
        let newValue = parseInt(prompt("Ingrese un numero"));
        valueList.push(newValue);
    }
    return valueList;
}