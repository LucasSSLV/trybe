//1 Adicione uma classe igual para os dois parágrafos.



//2 Recupere os seus parágrafos via código JavaScript, usando a função getElementsByClassName;

console.log(document.getElementsByClassName('paragraph'));

//3 Altere algum estilo do primeiro deles.

let paragrafo1 = document.querySelector('.paragraph');

console.log(paragrafo1);
//4 Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName.

let subtitle = document.getElementsByTagName('h4')[0];
subtitle.style.color ='green';