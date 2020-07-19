// Desafio 1
function compareTrue(first,second) {
  return first && second ? true : false;
  // seu código aqui
}

// Desafio 2
function calcArea(base,height) {
  return (height*base)/2;
  // seu código aqui
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ')
}
// Desafio 4
function concatName(listaStrings){
  let minhaLista = [].concat(listaStrings);
  let ultimo = minhaLista[minhaLista.length-1];
  let primeiro = minhaLista[0];
  return `${ultimo}, ${primeiro}`;
}

// Desafio 5
function footballPoints(wins,ties) {
  let pontos = wins*3 + ties;
  return pontos
  // seu código aqui
}

// Desafio 6
function highestCount(numbers) {
  //percorrer o código e encontrar o maior numero
  // percorrer o código e contar quantas vezes ele aparece
  let maior = -Infinity;
  let contaMaior = 0
  for(let i in numbers){
    if(numbers[i] > maior){
      maior = numbers[i];
    }
  }
  for(let x in numbers){
    if(numbers[x] === maior){
      contaMaior +=1;
    }
  }
  return contaMaior;
}


// Desafio 7
function catAndMouse(posMouse,posCat1,posCat2) {
  let mouseCat1 = distancia(posMouse,posCat1);
  let mouseCat2 = distancia(posMouse,posCat2);
  if(mouseCat1 > mouseCat2){
    return 'cat2'
  }
  else if(mouseCat1 < mouseCat2){
    return 'cat1'
  }
  else{
    return 'os gatos trombam e o rato foge'
  }
}

function distancia(posA,posB){
  return Math.abs(posA-posB)
}

// Desafio 8
function fizzBuzz(numeros) {
  let meusNumeros = [].concat(numeros);
  let resposta = [];
  let element;
  for(i in meusNumeros){
    let n = meusNumeros[i];
    switch (true){
      case (divisivel(n,3) && !divisivel(n,5)):
        element ='fizz';
      break;

      case (!divisivel(n,3) && divisivel(n,5)):
        element = 'buzz';
      break;

    case (divisivel(n,3) && divisivel(n,5)):
      element = 'fizzbuzz';
      break;
    case (!divisivel(n,3) && !divisivel(n,5)):
      element = 'bug!';
      break;
    }
    resposta.push(element);
  }
  return console.log(resposta)
}

fizzBuzz([2, 15, 7, 9, 45]);

function divisivel(numero,indice){
  if(numero % indice === 0){
    return true
  }
  else{
    return false
  }
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



