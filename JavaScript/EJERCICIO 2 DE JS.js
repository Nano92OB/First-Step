// ejercicio 2 
// a) tipo booleano
// b) tipo numerico
// c) tipo string o cadena
// d) tipo de valor no asignado
// e) tipo numerico
// f) tipo string 
// g) tipo Objeto  

//ejercicio (pasar los pseudocodigos del ejercicio 7 a algoritmo):
// Practico 1:
let userinput= prompt("Ingrese su numero:") 
let numberofuserinput=parseInt(userinput)  //convierte el string a un numero
let multipleof3= false;
let multipleof5= false;
if (numberofuserinput%3 == 0 && numberofuserinput%5==0){
    multipleof3=true
    multipleof5= true;
} 
else if (numberofuserinput%3==0){
    multipleof3=true
}
else if (numberofuserinput%5==0){
    multipleof5=true
}
console.log("multiple of 3", multipleof3)
console.log("multiple of 5 is", multipleof5)


//ejercicio 2:
let numax= prompt('Ingrese A:')
let a=parseInt(numax)  //convierte el string a un numero
let numbx= prompt('Ingrese B:')
let b=parseInt(numbx) 
let numcx= prompt('Ingrese C:')
let c=parseInt(numcx) 
function discrim(a, b, c)  //funcion con los datos que le ingresamos por entrada
 {
 return (bb - 4*a*c);  //nos devuelve el valor del discriminate para ver si tiene raices reales
} 
 function baskara(a, b, c, sol)   //funcion baskara
 {
 var disc = discrim(a,b,c);
 if (disc < 0)          //si el discriminante es menor a 0 no tiene raices perteneciente a los reales
    alert("No hay raices reales");   //mensaje en pantalla que dice que no hay soluciones
 else  //si es mayor o igual a 0 entonces ==>
    {
    sol[0] = (-b + Math.sqrt(disc))/(2*a);
    sol[1] = (-b - Math.sqrt(disc))/(2*a);
    } 
} 
var soluc = new Array(2);  
 baskara(a,b,c, soluc) ;
 console.log( "las racies de la ecuación son "+soluc[0]+" y "+soluc[1]);

//-b+-v-(bb)-4ac
//---------------
//        2a
