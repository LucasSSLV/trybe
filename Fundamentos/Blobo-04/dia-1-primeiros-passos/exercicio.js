// //1 fazer 5 programas 

//adiçao

let adi = (a + b);

//subtração

let sub = (a - b);

//multiplicação

let mult = (a * b);

//divisão

let div = (a / b);

//módulo

let mod = (a % b);

//2 Retorne o maior de dois numeros

let num1 = -20;
let num2 = 2;

if (num1 > num2){
   console.log(num1);
}

if (num2 > num1){
   console.log(num2);
}

// 3 Retorne o maior de 3 numeros

function maior(num1, num2, num3){

let maior = num1;
   
if(num2 > maior)
      maior = num2;
if(num3 > maior)
      maior = num3; 
console.log(maior);
   }
maior(1, 23, -3);

// 4 se positivo retorne positivo, se negativo retorne negativo

function positivoNegativo(valor){
   if(valor > 0){
      console.log("positivo");
   }
   else if(valor < 0){
      console.log("negativo");
   }
   else{
      console.log("Zero");
   }
}
positivoNegativo(5 - 5);

// 5 somar angulos internos de um triangulo

function angulosInternos(angulos){
   let values = [];
   for(let i = 0; i < angulos.length; i += 1){
      values = angulos[i];
   }
   if(values <= 0 || values > 188){
      return false;
   }
      return true;
   }
console.log(angulosInternos([1, 34, -18]))

// 8 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par.
//Caso contrário, ele retorna false.

function par_impar(numeros){
  let sN = ''; 
   for(let i = 0; i < numeros.length; i+=1){
      sN = numeros[i];
   }
   if(sN % 2 === 0){
      return true;
   }
   return false;
}
console.log(par_impar([2, 6])); 