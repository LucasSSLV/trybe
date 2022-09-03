// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1 imprimir todos os valores

    console.log(numbers);

//2 some todos os valores e imprima

let sun = 0; 

for(let i = 0; i < numbers.length; i += 1){
   
   sun += numbers[i];
}
    console.log(sun);

//3 calcular a média aritimética

console.log(sun / numbers.length);

//4 se valor < 20 imprimir 'maior que 20' se não, o contrario
if((sun / numbers.length) > 20){
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}

//5 imprimir maior valor
let maiorNum = 0;
for(let contador = 0; contador < numbers.length; contador += 1){
    if(numbers[contador] > maiorNum){
        maiorNum = numbers[contador];
    }
}
    console.log(maiorNum);

//6 ddescobrir o numero de valores impares
let numDiv = [];
for(let n = 0; n < numbers.length; n += 1){
    
    numDiv = numbers[n];
    }
    if(numDiv % 3 === 0){
        console.log(numDiv);
    }
    if(numDiv % 3 != 0){
        console.log('nenhum valor ímpar encontrado');
    }

// imprimir o menor valor
let menorNum = 10;
for(let mn = 0; mn < numbers.length; mn += 1){
    if(numbers[mn] < menorNum){
        menorNum = numbers[mn];
    }
}
console.log(menorNum);

//8 imprima de 1 a 25
let ateVinteECinco = [];
for(let c = 0; c < 26; c += 1){
    ateVinteECinco = [c];    
    console.log(ateVinteECinco);
}