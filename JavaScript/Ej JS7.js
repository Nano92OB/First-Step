let gradeA = parseInt(prompt("Nota 1"));
let gradeB = parseInt(prompt("Nota 2"));
let gradeC = parseInt(prompt("Nota 3"));

const thresholdForPromotion = 7

var result = getAverage(gradeA, gradeB, gradeC)

if(result>=thresholdForPromotion)
console.log(!promovido);

function getAverage(gradeA, gradeB, gradeC) {
    return getTotal(gradeA, gradeB, gradeC) / 3;
}

function getTotal (gradeA,gradeB,gradeC){
    return gradeA+gradeB+gradeC
}