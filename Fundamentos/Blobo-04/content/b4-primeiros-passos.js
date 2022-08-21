let myName = "lucas";
let birthCity = "viçosa-Ce";
let birthYear = 1995;
console.log(myName, birthCity, birthYear);
//
birthYear = 2030;
console.log(birthYear);
//
birthCity = 'sobral';
console.log(birthCity);
//
const base = 5;
let heigth = 8;
const area = base * heigth;
console.log(area);
//
const perimeter = heigth + heigth;
console.log(perimeter);
//
let nota = 73;
if(nota >= 80){
    console.log('Parabéns, você foi aprovada(o)!')
}
else if(nota <= 80 && nota >= 60){
    console.log('Você está na nossa lista e espera')
}
else{ (nota < 60)
    console.log('Você foi reprovada(o)')
}
//
let currentHour = 23;
let message = "";
if(currentHour >= 22){
    console.log('Não deveriamos comer nada, é hora e dormir')
}
else if(currentHour >= 18 && currentHour < 22){
    console.log('Rango da noite, vamos jantar :D')
}
else if(currentHour >= 14 && currentHour < 18){
    console.log('Vamos fazer um bolo pro café da tarde')
}
else if(currentHour >= 11 && currentHour <=14){
    console.log('Hmmm, hoa do almoço')
}
else if(currentHour >= 4 && currentHour <= 11){
    console.log('Hmmm, cheiro de café recém passado')
}
console.log(message);
//
let weekday = 'quinta-feira';
let menssagemDoDia = '';
if(weekday === 'segunda-feira' || weekday === 'terça-feira' || weekday === 'quarta-feira' || weekday === 'quinta-feira' || weekday === 'sexta-feira'){
    console.log('Oba, mais um dia de aprendizado trybe >:D')
}
else if(weekday === 'sábado' || weekday === 'domingo'){
    console.log('FINALMENTE, descanso merecido UwU')
} else {
    console.log('Apenas dias da semana são opções válidas')
}
console.log(menssagemDoDia);
//
estado = 'aprovado';
switch(estado){
    case 'aprovado':
    console.log('Parabéns, você foi aprovada(o)!');
    break;
    case 'lista':
        console.log('Você está na nossa lista de espera');
            break;
            case 'reprovado':
                console.log('você foi reprovado')
                break;
            default:
            console.log('Opções válidas: aprovado, lista e reprovado.')               
}