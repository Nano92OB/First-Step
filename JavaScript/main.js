/*
let nombre = "Carlos Ancelotti";
let altura = 183;
let concatenacion = nombre + " " + altura;


//metimos trozo de codigo html con un string
let datos = document.getElementById("datos");
datos.innerHTML = `
    <h1> soy la caja de datos</h1>
    <h2> Mi nombre es: ${nombre}</h2>
    <h3> Mido: ${altura} cm</h3>
`;

if(altura >=190){
        datos.innerHTML += `<h1>
        eres una persona ALTA </1>`
}else{datos.innerHTML += `<h1>
eres una persona bajita </1>`
}
//bucle que repite el h3 para no tener que copiar y pegar las lineas (iteracion)
for(let i = 2000; i<=2020; i++){
    datos.innerHTML += "<h3>Estamos en el year:  </h3>" +i;
}
*/
function muestraMiNombre(nombre, altura){
    let misDatos =`
    <h1> soy la caja de datos</h1>
    <h2> Mi nombre es: ${nombre}</h2>
    <h3> Mido: ${altura} cm</h3>`;

return misDatos;
}
function imprimir(){
    let datos = document.getElementById("datos");
    datos.innerHTML = muestraMiNombre("ignacio gaston", 180);
}

imprimir();


let nombres = ['victor', ' antonio'];
alert(nombres[1]);