// 22) se a gente quiser representar uma tabela ou uma matriz, por exemplo, em js, a gente faz mais ou menos assim:
// const table = [[20, 17, 15, 11], [12, 9, 65, 20], [15, 51, 32, 10]]
// crie uma função que retorna a soma de todos os elementos da matriz

// const somaMatriz = (array) => {
//     let sum = 0

//     for(let i = 0; i < array.length; i++){
//         for(let j = 0; j < array[i].length; j++){
//             sum = sum + array[i][j]
//         }
//     }
//     return sum
// }

// console.log(somaMatriz([[20, 17, 15, 11], [12, 9, 65, 20], [15, 51, 32, 10]]))


// Variação! trazendo como resposta um array da soma dos números de cada array menor

const somaMatriz = (array) => {
    let arrFinal = []

    for(let i = 0; i < array.length; i++){
        let sum = 0
        for(let j = 0; j < array[i].length; j++){
            sum = sum + array[i][j]
            
        }
        arrFinal.push(sum)
    }
    return arrFinal
}

console.log(somaMatriz([[20, 17, 15, 11], [12, 9, 65, 20], [15, 51, 32, 10]]))

