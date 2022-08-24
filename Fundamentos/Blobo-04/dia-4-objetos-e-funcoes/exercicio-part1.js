//Q1
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };
//   console.log('seja bem-vinda, ' + info.personagem)

//Q2
//  let info = {
//      personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// }; 
//     info.recorrente = 'sim';
// for(let key in info){
//     console.log(key, info[key])
//   }

//Q3

//   for(let key in info){
//     console.log(key);
//   }

//Q4
// for(let key in info){
//     console.log(info[key]);
// }

//Q5

//Q6
// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos:{
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       }
//   };
//   console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos.titulo + '.');

//Q7
// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos:{
//     livro1:{
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//     livro2:{
//       titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//       autor: 'JK Rowling',
//       editora: 'Rocco',
//   },
// }
// };
// console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos.livro1.titulo + '.');

//Q8
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos:{
    livro1:{
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
    livro2:{
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editora: 'Rocco',
  },
}
};
console.log(leitor.nome + ' tem 2 livros favoritos, ' + leitor.livrosFavoritos.livro1.titulo + ' ' + 'e ' + leitor.livrosFavoritos.livro2.titulo);