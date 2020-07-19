// Projeto - Ricardo Ribeiro

// ------------- Desafio 1
// let var1 = false;
// let var2 = true;
function compareTrue(myVar1, myVar2) {
  let result = false;
  if (myVar1 && myVar2) {
    result = true;
  }
  return result
}
// console.log(compareTrue(var1, var2));


// -------------- Desafio 2
// let bas = 12;
// let hei = 8;
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area
}
// console.log(calcArea(bas, hei));


// --------------- Desafio 3
// let frase = 'go Trybe';
function splitSentence(myText) {
  let word = '';
  let fraseSeparada = [];
  for (let i = 0; i < myText.length; i += 1) {
    if (myText[i] !== ' ') {
      word += myText[i];
    } else {
      fraseSeparada.push(word);
      word = '';
    }
  }
  // inclui a ultima palavra
  fraseSeparada.push(word);
  return fraseSeparada;
}
// console.log(splitSentence(frase));


// ---------------- Desafio 4
// let name = ['Ricardo', 'Alexandre', 'de', 'Souza', 'Ribeiro']
function concatName(myName) {
  let nameConcat = myName[myName.length - 1];
  nameConcat += ', ' + myName[0];
  return nameConcat;
}
// console.log(concatName(name));


// --------------- Desafio 5
// let win = 10;
// let tie = 7;
function footballPoints(wins, ties) {
  let points = 0;
  points = (wins * 3) + (ties * 1);
  return points;
}
// console.log("Total de pontos: " + footballPoints(win, tie));


// --------------- Desafio 6
// let arr = [9, 1, 2, 3, 9, 5, 7, 3, 1, 3];
function highestCount(myArray) {
  let contMaior = 1;
  for (let i = 0; i < myArray.length; i += 1) {
    let contAtual = 1;
    for (let x = 0; x < myArray.length; x += 1) {
      if ((i !== x) && (myArray[i] === myArray[x])) {
        contAtual += 1;
      }
    }
    if (contAtual > contMaior) {
      contMaior = contAtual;
    }
  }
  return contMaior;
}
// console.log("Maior quantidade de vezes: " + highestCount(arr));


// ---------- Desafio 7
// let c1 = 4;
// let c2 = 8;
// let mo = 6;
function catAndMouse(mouse, cat1, cat2) {
  let result = 'os gatos trombam e o rato foge';
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);
  if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  } else if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  }
  return result;
}
// console.log(catAndMouse(mo, c1, c2));

// ---------- Desafio 8
// let arr = [2, 15, 7, 9, 45, 30, 60, 11];
function fizzBuzz(myArray) {
  let arrayFizzBuzz = [];
  for (let i = 0; i < myArray.length; i += 1) {
    let result = 'bug!';
    if ((myArray[i] % 3 === 0) && (myArray[i] % 5 === 0)) {
      result = 'fizzBuzz';
    } else if (myArray[i] % 3 === 0) {
      result = 'fizz';
    } else if (myArray[i] % 5 === 0) {
      result = 'buzz';
    }
    arrayFizzBuzz.push(result);
  }
  return arrayFizzBuzz;
}
// console.log(fizzBuzz(arr));


// Desafio 9
// let text = 'hi there';
// let text2 = 'h3 th2r2';
function encode(myText) {
  let result = '';
  for (let i = 0; i < myText.length; i += 1) {
    if (myText[i] === 'a') {
      result += '1';
    } else if (myText[i] === 'e') {
      result += '2';
    } else if (myText[i] === 'i') {
      result += '3';
    } else if (myText[i] === 'o') {
      result += '4';
    } else if (myText[i] === 'u') {
      result += '5';
    } else {
      result += myText[i];
    }
  }
  return result;
}

function decode(myText) {
  let result2 = '';
  for (let i = 0; i < myText.length; i += 1) {
    if (myText[i] === '1') {
      result2 += 'a';
    } else if (myText[i] === '2') {
      result2 += 'e';
    } else if (myText[i] === '3') {
      result2 += 'i';
    } else if (myText[i] === '4') {
      result2 += 'o';
    } else if (myText[i] === '5') {
      result2 += 'u';
    } else {
      result2 += myText[i];
    }
  }
  return result2;
}
// console.log(encode(text));
// console.log(decode(text2));


// ---------- Desafio 10
// let arr = ["React", "Jest", "HTML", "CSS", "JavaScript"];
// let name = "Ricardo";
function techList(myArray, myName) {
  let arrayObj = [];
  if (myArray.length === 0) {
    arrayObj = 'Vazio!';
  } else {
    myArray.sort();
    for (let i = 0; i < myArray.length; i += 1) {
      let obj = {
        tech: myArray[i],
        name: myName,
      }
      arrayObj.push(obj);
    }
  }
  return arrayObj;
}
// console.log(techList(arr, name));

// Desafio 11
// let numPhone = [1, 1, 3, 1, 5, 6, 7, 8, 9, 0, 1];
function verifyNumber(myPhone) {
  let result = true;
  let highCont = highestCount(myPhone);
  for (let i = 0; i < myPhone.length; i += 1) {
    if (myPhone[i] < 0 || myPhone[i] > 9 || highCont >= 3) {
      result = false;
    }
  }
  return result;
}
function generatePhoneNumber(myPhone) {
  let result = '';
  if (myPhone.length !== 11) {
    result = 'Array com tamanho incorreto.';
  } else if (!verifyNumber(myPhone)) {
    result = 'não é possível gerar um número de telefone com esses valores';
  } else {
    result = '(';
    for (let i = 0; i < 2; i += 1) {
      result += myPhone[i];
    }
    result += ') ';
    for (let i = 2; i < 7; i += 1) {
      result += myPhone[i];
    }
    result += '-';
    for (let i = 7; i < 11; i += 1) {
      result += myPhone[i];
    }
  }
  return result;
}
// console.log(generatePhoneNumber(numPhone));

// Desafio 12
// let lin1 = 10;
// let lin2 = 14;
// let lin3 = 8;
function triangleCheck(lineA, lineB, lineC) {
  let result = false;
  if ( (Math.abs(lineB - lineC) < lineA) && (lineB + lineC > lineA) && 
       (Math.abs(lineA - lineC) < lineB) && (lineA + lineC > lineB) && 
       (Math.abs(lineA - lineB) < lineC) && (lineA + lineB > lineC) ) {
      result = true;
  }
  return result;
}
// console.log(triangleCheck(lin1, lin2, lin3));


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
