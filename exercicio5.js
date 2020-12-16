//5) Escreva uma função que vai receber uma lista com vários números inteiros. A função deve 
//retornar quantos desses números são negativos.

const countNegatives = (array) => {
    let count = 0
    for (let i = 0; i < array.length; i++) { 
    if (array[i] < 0)
        count++
    }
    return count
}
console.log(countNegatives([2, 10, 20, 7, -10]))