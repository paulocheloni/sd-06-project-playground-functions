// Desafio 1
function compareTrue(c1, c2) {
if (c1 === true && c2 === true){
return true;
} 
return false;
}
// Desafio 2
function calcArea(base, height) {
return base * height/2;
}

// Desafio 3
function splitSentence(a) {
return a.split(" ");
}


// Desafio 4
function concatName(b) {
let i = b.lenght-1
let piriri = b[i]
piriri = piriri + ", " + b[0];
return piriri 
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
