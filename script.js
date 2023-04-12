/*
# Exercício 02

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/


let students = [
  { name: "Thiago" , nota1: 10, nota2: 9 },
  { name: "Fernando" , nota1: 8, nota2: 6},
  { name: "Caroline" , nota1: 3, nota2: 2 },
]

const calcMedia = (nota1, nota2) => {
  return ((nota1 + nota2) / 2).toFixed(1)
}

for (let media of students) {
  
  if (calcMedia(media.nota1, media.nota2) >= 7 ) {

    alert(`A média do(a) aluno(a) ${media.name} é: ${calcMedia(media.nota1, media.nota2)} 
    Parabéns, ${media.name}! Você foi aprovado(a) no concurso!`)


  } else {

    alert(`A média do(a) aluno(a) ${media.name} é: ${calcMedia(media.nota1, media.nota2)}
    Você não conseguiu a nota de classificação, tente novamente!`)

  }
}