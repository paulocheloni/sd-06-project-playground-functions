// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  let compare = true;
  if (a === true && b === true) {
    compare = true;
  } else {
    compare = false;
  }
  return compare;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let calculo = 0;
  calculo = (base * height) / 2;
  return calculo;
}

// Desafio 3
function splitSentence(palavra) {
  // seu código aqui
  let word = palavra.split(' ');
  return word;
}

// Desafio 4
function concatName(arrayDeNomes) {
  // seu código aqui
  let qtdNomes = arrayDeNomes.length;
  let primeiroItem = arrayDeNomes[0];
  let ultimoItem = arrayDeNomes[qtdNomes - 1];
  return ultimoItem + ", " + primeiroItem;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
}
