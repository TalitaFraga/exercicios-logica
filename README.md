# exercicios-logica

1) crie uma função que receba uma string e devolva seu valor em letras maiúsculas, separadas por um espaço. Exemplo: 'banana' -> 'B A N A N A'

2) crie uma função que receba um número e devolva uma soma progressiva. Por exemplo, recebendo o número 5, a função deve retornar 15, ou seja, o resultado de 1 + 2 + 3 + 4 + 5.

3) As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem 
compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra.

4) A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas (considere que o mês possua 4 semanas exatas).

5) Escreva uma função que vai receber uma lista com vários números inteiros. A função deve retornar quantos desses números são negativos.

6) Escreva uma função que, dado uma lista de inteiros, retorne a média dos números.

7) escreva uma função que, dado uma lista de inteiros, retorne o maior dos números.
greatest([10]) => 10
greatest([10, 15, 12, 20]) => 20
greatest([-12, -1, -2, -30, -15]) => -1

8) escreva uma função que receba o nome, a idade e o sexo de uma pessoa e retorne um objeto com os campos "name", "age" e "sex":toPessoa('Julia', 28, 'W') => { 'name': 'Julia', 'age': 28, 'sex': 'W'}

9) escreva uma função que retorne o tamanho da maior palavra de uma frase: findLongestWordLength("The quick brown fox jumped over the lazy dog") -> findLongestWordLength("hey hey heyyyyy hey") -> 7 

10) escreva uma função que receba um número e calcule o fatorial dele factorial(5) => tem que retornar 1 * 2 * 3 * 4 * 5 
lembrando que fatorial(0) === 1 
fatorial(1) === 1

11) geralmente sites de notícias, blogs, etc têm o título da página em uma parte da URL. isso é importante caso o usuário queria identificar a notícia pela URL
ou salvar nos favoritos. por exemplo, um artigo com o título "Apolo flagra Beto em cima de Tancinha no elevador" no G1 tem a URL 
http://gshow.globo.com/novelas/haja-coracao/vem-por-ai/noticia/apolo-flagra-beto-em-cima-de-tancinha-no-elevador.ghtml.
escreva uma função que receba o título de uma matéria e o transforme em uma parte da url.
toUrl('Apolo flagra Beto em cima de Tancinha no elevador') => 'apolo-flagra-beto-em-cima-de-tancinha-no-elevador'
toUrl('Casos de COVID aumentam') => 'casos-de-covid-aumentam'

12) Faça uma função que receba um objeto que explica a quantidade de cada
animal (vaca, coruja, porco) e retorne o total de patas. Uma vaca e um porco
têm 4 patas. 1 coruja tem 2 patas.
getLegsAmount ({vaca: 1, coruja: 2, porco: 2})
 getlagsAmount ({vaca: 8, coruja: 3, porco: 12})

 13) https://dev.to/coderbyte/reintroducing-code-review-with-an-interview-question-asked-at-amazon-5a89

 14) Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array. Example: splitter([1, 2, 3, 4, 5, 6], 2) -> [[1, 2], [3, 4], [5, 6]]

 15) escreva uma função que faça compressão de strings. ou seja, pra cada letra que se repetir, apenas indique a quantidade de vezes que ela aparece:
compress('aaabbbccdddd') -> 'a3b3c2d4'
compress('aaaaaaaaaa') -> 'a10'

16) Palíndromos são textos ou números que, independente da direção que for lido (esqueda pra direita, direita pra esquerda), tem o mesmo valor. Por exemplo, "Ana" é um palíndromo. "A grama é amarga" é um palíndromo. "Banana" não é um palíndromo. Escreva uma função que, recebendo uma string, indica se é um palíndromo.
isPalindrome("ana") -> true
isPalindrome("123") -> false
isPalindrome("cccabaccc") -> true
isPalindrome("2002") -> true





