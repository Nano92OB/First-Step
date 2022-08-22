const salary = prompt("Ingrese el salario");
const antiquety = prompt("Ingrese la antiguedad");
let newSalary = salary

salary = parseInt(salary);
antiquety = parseInt(antiquety);


if(salary<500 && antiquety>=10){
    let newSalary = salary*1.2;

}else if(salary<500 && antiquety<10){
    newSalary = salary*1.05;
}
console.log(newSalary)