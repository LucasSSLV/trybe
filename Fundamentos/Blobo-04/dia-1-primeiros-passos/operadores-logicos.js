//1

const currenHour = 10;

//2

let message = '';

//3

if (currenHour >= 22){
    console.log("Não deveríamos comer nada, é hora de dormir")
}
if (currenHour >= 18 && currenHour < 22){
    console.log("Rango da noite, vamos jantar :D")
}
if(currenHour >= 14 && currenHour < 18){
    console.log("Vamos fazer um bolo pro café da tarde?")
}
if(currenHour >= 11 && currenHour < 14){
    console.log("Hora do almoço!!!")
}
if (currenHour >= 4 && currenHour < 11){
    console.log("Hmmm, cheiro de café recém passado")
}