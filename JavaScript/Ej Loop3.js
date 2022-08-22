let aprobados = 0;
let noaprobados = 0;

for(let i = 1; i <= 10; i++){
    let nota = prompt("Ingresar nota");
    if (nota >= 7) {
        aprobados++;
    } else {
        noaprobados++;
    }
}

console.log("aprobados:"+aprobados);
console.log("noaprobados:"+noaprobados);
 