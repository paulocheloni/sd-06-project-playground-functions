// Desafio 1
function compareTrue(var1, var2) {
  if(var1===true && var2===true){
    return true;
  }
  else{
    return false;
  }
  
}

// Desafio 2
function calcArea(base, height) {
  let area;
  area=(base*height)/2;
  return area;
}

// Desafio 3
function splitSentence(word) {
  return word.split(' ');
}

// Desafio 4
function concatName(array_string) {
  let word_1="";
  word_1=d[0]+", "+d[d.length-1];
  return word_1;
}

// Desafio 5
function footballPoints(wins, ties) {
  let point=0;
  wins=wins*3;
  points=wins+ties;
  return points;
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
