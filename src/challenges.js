// Desafio 1
function compareTrue(booleano1, booleano2) {
  // seu código aqui
  let booleanoResultado = false;
  if (booleano1 && booleano2){
    booleanoResultado = true;
  }
  return booleanoResultado;
}
// let valor1 = false;
// let valor2 = false;
// console.log(compareTrue(valor1, valor2));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}
// let valor1 = 10;
// let valor2 = 50;
// console.log(calcArea(valor1, valor2));

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let palavrasDivididas = [];
  let palavra = "";
  for (let n = 0; n < string.length; n += 1){
    if (string[n] !== " " && n + 1 < string.length){
      palavra += string[n];
    }else if (n + 1 === string.length){
      palavra += string[n];
      palavrasDivididas.push(palavra);
    }else{
      palavrasDivididas.push(palavra);
      palavra = "";
    }   
  }
  return palavrasDivididas;  
}
/* let valor1 = "Clayton é zika";
let valor2 = 50;
console.log(splitSentence(valor1)); */

// Desafio 4
function concatName(array) {
  // seu código aqui  
  return array[array.length-1] + ", " + array[0];
}
/* let valor1 = ["Clayton é zika", "Clayton top", "Clayton bonitão", "Finalmente deu certo"];
let valor2 = 50;
console.log(concatName(valor1)); */

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins*3 + ties;
}
/* let valor1 = 60;
let valor2 = 50;
console.log(footballPoints(valor1, valor2)); */


// Desafio 6
function highestCount(array2) {
  // seu código aqui
  let quantidadeDoMaior = 0;
  for (let n1 in array2){
    let quantoMaior = 0;
    for (let n2 in array2){
        if( array2[n2] <= array2[n1]){
            quantoMaior += 1;                
        }
    }
    if(quantoMaior === array2.length){
      quantidadeDoMaior += 1;        
    }
  }
  return quantidadeDoMaior;
}
/* let valor1 = [9, 1, 2, 3, 9, 5, 7, 9, 10, 10];
let valor2 = 50;
console.log(highestCount(valor1)); */

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)){
    return "os gatos trombam e o rato foge";
  }else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)){
    return "cat1";
  }else{
    return "cat2";
  }
}
/* let valor1 = 28;
let valor2 = 50;
let valor3 = 2;
console.log(catAndMouse(valor1, valor2, valor3)); */

// Desafio 8
function fizzBuzz(array3) {
  // seu código aqui
  let arraysaida = [];
  for (let indice in array3){
    let saida = "";
    if (array3[indice] % 3 === 0 && array3[indice] % 5 === 0){
      saida = "fizzBuzz";      
    }else if (array3[indice] % 3 === 0){
      saida = "fizz";      
    }else if (array3[indice] % 5 === 0){
      saida = "buzz";      
    }else{
      saida = "bug!";      
    }
    arraysaida.push(saida);
    /* array3.splice(indice[,1[,saida]]) */
  }
  return arraysaida;
}
/* let valor1 = [2, 15, 7, 9, 45];
let valor2 = 50;
let valor3 = 2;
console.log(fizzBuzz(valor1)); */

// Desafio 9
function encode(stringParametro) {
  // seu código aqui
  let palavraNumerica = "";
  for (let chave in stringParametro){
    if (stringParametro[chave] === "a"){
      palavraNumerica += 1;      
    }else if (stringParametro[chave] === "e"){
      palavraNumerica += 2;
    }else if (stringParametro[chave] === "i"){
      palavraNumerica += 3; 
    }else if (stringParametro[chave] === "o"){
      palavraNumerica += 4;
    }else if (stringParametro[chave] === "u"){
      palavraNumerica += 5;
    }else{
    palavraNumerica += stringParametro[chave];
    }
  }
  return palavraNumerica;
}
function decode(stringParametro2) {
  // seu código aqui
  let palavraAntiNumerica = "";
  for (let chave2 in stringParametro2){
    if (stringParametro2[chave2] === "1"){
      palavraAntiNumerica += "a";      
    }else if (stringParametro2[chave2] === "2"){
      palavraAntiNumerica += "e";
    }else if (stringParametro2[chave2] === "3"){
      palavraAntiNumerica += "i"; 
    }else if (stringParametro2[chave2] === "4"){
      palavraAntiNumerica += "o";
    }else if (stringParametro2[chave2] === "5"){
      palavraAntiNumerica += "u";
    }else{
      palavraAntiNumerica += stringParametro2[chave2];
    }
  }
  return palavraAntiNumerica;
}
/* let valor1 = "hi there!";
let valor2 = "h3 th2r2!";
let valor3 = 2;
console.log(encode(valor1));
console.log(decode(valor2)); */


// Desafio 10
function techList(arrayTecnologias, name) {
  // seu código aqui
  if (arrayTecnologias === undefined){
    return "Vazio!";
  }else{
    let ordenarArray = arrayTecnologias;
    ordenarArray.sort();
    let saidaTec = [];
    for (let indiceTec in ordenarArray){
      saidaTec.push({
        tech: ordenarArray[indiceTec],
        nome: name,
      });
    }
    return saidaTec;
  }
}
/* let valor1 = ["Python", "React", "Ruby", "Jest"];
let valor2 = "Clayton Miguel";
console.log(techList(valor1, valor2)); */


// Desafio 11
function generatePhoneNumber(arrayTelefone) {
  // seu código aqui
  if (arrayTelefone.length !== 11){
    return "Array com tamanho incorreto."    
  }else{
    let escrevendoNumero = "";     
    for (let numero in arrayTelefone){
      if (arrayTelefone[numero] < 0 || arrayTelefone[numero] > 9){        
        return "não é possível gerar um número de telefone com esses valores"      
        break;
      }else if (numero === "0"){
        escrevendoNumero += "(" + arrayTelefone[numero];
      }else if (numero === "1"){
        escrevendoNumero += arrayTelefone[numero] + ") ";
      }else if (numero === "6"){
        escrevendoNumero += arrayTelefone[numero] + "-";
      }else{
        escrevendoNumero += arrayTelefone[numero];
      }                     
    } 
    return escrevendoNumero;        
  }
}
let valor1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
/* let valor2 = "Clayton Miguel"; */
console.log(generatePhoneNumber(valor1));

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
