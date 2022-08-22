let questionsTotal = parseInt(prompt("questionsTotal"));
let rightQuestions = parseInt(prompt("rightQuestions"));
var percentage = rightQuestions/questionsTotal

if(percentage>=0.9) console.log("nivel superior");
else if(percentage>=0.75) console.log("nivel medio");
else if(percentage>=0.5) console.log("nivel regular");
else console.log("out of level");