// 23) Escreva uma função que vai receber uma raiz quadrática e vai retornar a soma da diagonal.

const somaDiagonal = (array) => {
    let sum = 0

    for(let i = 0; i < array.length; i++){
        sum = sum + array[i][i]
    }
    return sum
} 

console.log(somaDiagonal([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))