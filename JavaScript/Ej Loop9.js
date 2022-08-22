let data_pair = solicitar_lista_de_valores();
let first_triangle = [data_pair[0], data_pair[1]];
let second_triangle = [data_pair[2], data_pair[3]];
let last_triangle = [data_pair[4], data_pair[5]];
let mayores = 0;
let menores = 0;

for (let i = 0; i < data_pair.length; i += 2) {
  let base = data_pair[i];
  let altura = data_pair[i + 1];
  console.log("base: ", base);
  console.log("altura: ", altura);
  let superficie = calcularSuperficie(base, altura);
  console.log("superficie :", superficie);

  if (superficie > 12) {
    mayores++;
  }
  if (superficie < 12) {
    menores++;
  }
}
console.log("superficies mayores a 12 :", mayores);
console.log("superficies menores a 12 :", menores);

function solicitar_lista_de_valores() {
  let valueList = [];
  let valor;
  for (i = 0; i < 6; i++) {
    if (i % 2 == 0) {
      valor = solicitar_un_valor_numerico("Dato para base");
    } else {
      valor = solicitar_un_valor_numerico("Dato para altura");
    }
    valueList.push(valor);
  }
  return valueList;
}
 
function solicitar_un_valor_numerico(mensaje) {
  let valor = prompt(mensaje);
  valor = parseInt(valor);
  return valor;
}

function calcularSuperficie(base, altura) {
  let area = (base * altura) / 2;
  return area;
}
