let vector1 = solicitar_lista_de_valores("Ingrese un valor del 1er vector");
let vector2 = solicitar_lista_de_valores("Ingrese un valor del 2do vector");

console.log(vector1);
console.log(vector2);

let vector3 = [];

// suma de los componenetes de cada vector pusheados a un 3er Array "vector3"

for (let i = 0; i < vector1.length; i++) {
    let num = vector1[i];
    const suma = num + vector2[i]
    vector3.push(suma)
}
 console.log(vector3)

// funcion que sirve para pedir ingresar un array con 5 componentes
function solicitar_lista_de_valores(mensaje){
    let lista_de_valores = [];
    for(i=0; i<5; i++){
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