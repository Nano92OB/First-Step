let lowSalary = 0;
let betterSalary = 0;

for(let i = 1; i<=5; i++){
    let salary = parseInt(prompt("Ingrese su sueldo"));
    if (salary >= 100 && salary<=300){
        console.log("Estas en la franja de LowSalary");
        lowSalary++;
    }else if (salary>= 300 && salary<=500){
        console.log("Estas en la franja de BetterSalary");
        betterSalary++;
    }
}
let totalCostSalary = 0;
    