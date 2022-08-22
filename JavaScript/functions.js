function solicitar_lista_de_valores(mensaje){
    let lista_de_valores = [];
    for(i=0; i<3; i++){
        let valor = solicitar_un_valor_numerico(mensaje);
        lista_de_valores.push(valor);
    }
    return lista_de_valores;
}

function solicitar_un_valor_numerico(mensaje){
    let valor = prompt(mensaje);
    valor = parseInt(valor);
    return valor;
}

function sumar_valores_de_una_lista(lista){
    let suma_total = 0;
    for(i = 0; i < lista.length; i++){
        suma_total += lista[i];
    }
    return suma_total;
}


function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (9 - 0 + 1) + 0);
}

function mostrar_datos(lista){
    lista.forEach(imprimir_linea) 
}


function imprimir_linea(elemento,index){
    console.log("el valor", elemento, "esta en el indice", index) 
}