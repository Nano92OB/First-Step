let value_prod = parseInt(prompt("Ingrese valor de producto"));
if(value_prod%5!=0){
    console.log("tiene que ser multiplo de 5");
    
}



let monedas10 = 30;
let monedas5 = 50;
let money = parseInt(prompt("Ingrese Dinero"));
let billetes_aceptados = [50,100,200,500,1000,2000]
    if(!billetes_aceptados.includes(money)){
        console.log("Inaceptable");
    }
//el includes evalua que el parametro este dentro del array y devuelve true o false

let cambio = money - value_prod;
let maxChangeOffer = monedas10*10 + monedas5*5;



if(cambio>maxChangeOffer){
    console.log("No hay cambio suficiente");
}

let monedas10cambio = Math.floor(cambio/10);
let monedas5cambio = (cambio - (monedas10cambio*10))/5

if (monedas10cambio > monedas10) {
    let dif = monedas10cambio - monedas10;
    monedas5cambio += dif *2 
}

console.log("monedas 10", monedas10cambio);
console.log("monedas 5", monedas5cambio);