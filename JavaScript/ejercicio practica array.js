let listaDeNombres = []
let i = 0;
let valor = "";
while(valor!=="0"){
   valor = solicitar_un_valor ("Ingrese nombres")
    listaDeNombres.push(valor);
}


function solicitar_un_valor(mensaje){
    let valor = prompt(mensaje);
     return valor;
}