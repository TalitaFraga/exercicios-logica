//1) crie uma função que receba uma string e devolva seu valor em letras maiúsculas, separadas por um espaço. Exemplo: 'banana' -> 'B A N A N A'

const letrasMaiusculas = (palavra) => palavra.toUpperCase()
// console.log(letrasMaiusculas("banana"))

const letrasSeparadas = (palavra) => palavra.split('')
// console.log(letrasSeparadas("banana"))

const espaco = (palavra) => letrasSeparadas(letrasMaiusculas(palavra)).join(' ')
console.log(espaco("banana"))