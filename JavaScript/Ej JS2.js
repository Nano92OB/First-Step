let year = getNumberFromPromp("ingrese el anio");
let month = getNumberFromPromp("Ingrese el mes");
let day = getNumberFromPromp("Ingrese el dia");

console.log(year); 
console.log(month);
console.log(day);

if(IsChrismass(day, month)){
    console.log("es navidad")
    alert("Navidaaaaaaaaaaaad!!")
}else{
    console.log('no es navidad')
    alert("NO ES NAVIIITATTT")
}   
function getNumberFromPromp(text, defaultValue) {
    return parseInt(prompt(text, defaultValue));
}

function IsChrismass() {
    return day == 25 && month == 12;
}

