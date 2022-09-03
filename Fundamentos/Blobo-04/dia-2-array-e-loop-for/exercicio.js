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