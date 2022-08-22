let vector = solicitar_lista_de_valores("ingrese los valores del vector");
let totalValue =sumar_valores_de_una_lista(vector)
let valor_mayor50 = [];


console.log("la suma de los vectores es:", totalValue)

if(totalValue>36){
    console.log("la suma de los valores es mayor a 36");
}else if(totalValue == 36){
    console.log("El valor es 36");

}  
else console.log("el valor acumulado es menor a 36");

for(i=0; i<50; i++){
    if (vector[i]>50){
        valor_mayor50.push(vector[i])
        console.log("valores mayores a 50:" + valor_mayor50);
    }else (vector[i]<50)
        valor_mayor50.push(vector[i])
        console.log("No hay valores mayores a 50");
    }





function solicitar_lista_de_valores(mensaje){
    let valueList = [];
    for(i=0; i<8; i++){
        let valor = solicitar_un_valor_numerico(mensaje);
        valueList.push(valor);
    }
    return valueList;
}

function solicitar_un_valor_numerico(mensaje) {
    let valor = prompt(mensaje);
    valor = parseInt(valor);
    return valor;
  }

  function sumar_valores_de_una_lista(vector){
    let suma_total = 0;
    for(i = 0; i < vector.length; i++){
        suma_total += vector[i];
    }
    return suma_total;
}