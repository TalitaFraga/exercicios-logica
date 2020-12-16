// 6)Escreva uma função que, dado uma lista de inteiros, retorne a média dos números.

const sumNumbers = (array) => {
    let accumulator = 0
    let size = array.length

    for (let i = 0; i < array.length; i++) {
        accumulator = accumulator + array[i] / size
    }
    return accumulator
}

console.log(sumNumbers([10, 15]))