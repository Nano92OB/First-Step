//Q = cantidad (quantity)
let turneMorningQ = 2;
let turnAfternoonQ = 3;
let turnNightQ = 4;
let sumaTurnoManana = 0;
let sumaTurnoTarde = 0;
let sumaTurnoNoche = 0;

let turneMorning = [];
let turnAfternoon = [];
let turnNight = [];

for (let i = 0; i < turneMorningQ; i++) {
    let age = prompt("ingrese la edad");
    if(!isNaN(age)){
        turneMorning.push(age);
    }
}
console.log(turneMorning);

for (let i = 0; i < turnAfternoonQ; i++) {
    let age = prompt("ingrese la edad");
    if(!isNaN(age)){
    turnAfternoon.push(age);
    }
}
console.log(turnAfternoon);

for (let i = 0; i < turnNightQ; i++) {
    let age = prompt("ingrese la edad");
    if(!isNaN(age)){
    turnNight.push(age);
}
}
console.log(turnNight);

for (let i = 0; i < turneMorning.length; i++) {
     sumaTurnoManana = sumaTurnoManana + parseInt(turneMorning[i]);
}
console.log("el promedio de edades de la maniana es de ",promedioManiana());

for (let i = 0; i < turnAfternoon.length; i++) {
     sumaTurnoTarde = sumaTurnoTarde + parseInt(turnAfternoon[i]);
}
console.log("el promedio de edades de la tarde es de",promedioTarde());

for (let i = 0; i < turnNight.length; i++) {
    sumaTurnoNoche = sumaTurnoNoche + parseInt(turnNight[i]);
}
console.log("el promedio de edades de la noche es de",promedioNoche());

if(promedioManiana()>promedioTarde() && promedioManiana() >promedioNoche()){
    console.log("Los mayores en la maniana");
}else if (promedioTarde()>promedioNoche() && promedioTarde()>promedioManiana()){
    console.log("Los mayores son los de la tarde");
}else console.log("los de la noche son mayores");


function promedioNoche() {
    return sumaTurnoNoche / turnNight.length;
}

function promedioTarde() {
    return sumaTurnoTarde / turnAfternoon.length;
}

function promedioManiana() {
    return sumaTurnoManana / turneMorning.length;
}

