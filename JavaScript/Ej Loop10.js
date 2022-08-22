console.log("Ejercicio 10 J2")
let nota = solicitar_lista_de_valores("Ingresar 10 numeros")
let numero = 0;

for (let i = 5; i<nota.length ; i++) {
    numero = numero + nota[i] 
}

console.log(numero)

function solicitar_lista_de_valores(mensaje){
    let lista_de_valores = [];
    for(i=0; i<10; i++){
        let valor = solicitar_un_valor_numerico(mensaje);
        lista_de_valores.push(valor);
    }
    return lista_de_valores;
}


function solicitar_un_valor_numerico(mensaje) {
    let valor = prompt(mensaje);
    valor = parseInt(valor);
    return valor;
}
