//es un extra al ejercicio : sale del flujo si las contrase;as son iguales
/* do while es una estructura de bucle para poder iterar, su particularidad es : la 1era vez 
entra dentro del bucle*/
do{
let pass = prompt("ingrese pass")
let confirmPass = prompt ("Confirm Pass")


if(pass == confirmPass){
    console.log("CORRECT")
}else{
    console.log("Le pifiaste")
}
//esta es la parte que le sigue pidiendo la pass hasta que sean correctas//
}while (pass != confirmPass);

