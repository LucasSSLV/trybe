// Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
// - document.getElementById()
// - document.getElementsByClassName()
// - document.getElementsByTagName()
// 1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

let p2 = document.getElementById('paragraph2').innerText = 'trabalhando em uma empresa de games desenvolvendo códigos'

// 2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

let quadrado = document.getElementsByTagName('main')[0];

quadrado.style.backgroundColor = 'rgb(76,164,109)';

// 3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.

let mudaParaBranco = document.getElementsByClassName('center-content')[0];

mudaParaBranco.style.backgroundColor = 'white';

// 4. Crie e execute uma função que corrija o texto da tag <h1>.

let title = document.getElementsByTagName('h1')[0].innerText = 'Exercício 5.1 - JavaScript';

// 5. Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
// 6.