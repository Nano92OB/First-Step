let valueList = solicitar_lista_de_valores("Por favor ingrese un valor ");
let pares = 0;
let impares = 0;


for(i=0; i<5; i++){
    console.log(valueList[i])
    if(valueList[i]%2==0){
        console.log("numero par"+ valueList[i]);
        pares++       
    }else if (valueList[i]%2==1){
        console.log("numero impar: " + valueList[i]);
        impares++  
    }
}
console.log("numeros pares :" + pares);
console.log("numeros impares :" + impares);




function solicitar_lista_de_valores(mensaje){
    let valueList = [];
    for(i=0; i<5; i++){
        let valor = solicitar_un_valor_numerico(mensaje);
        valueList.push(valor);
    }
    return valueList;
}

    function solicitar_un_valor_numerico(mensaje){
        let valor = prompt(mensaje);
        valor = parseInt(valor);
        return valor;
    }