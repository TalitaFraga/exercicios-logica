// const pecasDeXadrez = (matriz) => {

//     let peao = 0
//     let bispo = 0
//     let cavalo = 0
//     let torre = 0
//     let rainha = 0
//     let rei = 0

//     for(let i = 0; i < matriz.length; i++){
//         for(let j = 0; j < matriz[i].length; j++){
//             if (matriz[i][j] === 1){
//                 peao = peao + 1
//             }
//             if (matriz[i][j] === 2){
//                 bispo = bispo + 1
//             }
//             if (matriz[i][j] === 3){
//                 cavalo = cavalo + 1
//             }
//             if (matriz[i][j] === 4){
//                 torre = torre + 1
//             }
//             if (matriz[i][j] === 5){
//                 rainha = rainha + 1
//             }
//             if (matriz[i][j] === 6){
//                 rei = rei + 1
//             }
//         }
//     }
//     return `Peão: ${peao} peça(s) 
//     Bispo: ${bispo} peça(s)
//     Cavalo: ${cavalo} peça(s)
//     Torre: ${torre} peças 
//     Rainha: ${rainha} peça(s)
//     Rei: ${rei} peça(s)`
// }

// console.log(pecasDeXadrez([[4, 3,2, 5, 6, 2, 3, 4], [1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]))

// OU

const exemplo1 = [[4, 3,2, 5, 6, 2, 3, 4], [1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1], [4, 3,2, 5, 6, 2, 3, 4]]
const exemplo2 = [[4,3,0,0,0,0,3,4], [1,1,1,1,1,1,1,1], [0,0,0,0,0,0,0,0]]
const exemplo3 = [[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 1, 1, 0, 0, 0],[0, 0, 0, 1, 1, 0, 0, 0]]


// const pecasDeXadrez = (matriz) => {
//     const pecas = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }

//     for(let i = 0; i < matriz.length; i++){
//         for(let j = 0; j < matriz[i].length; j++){
//             pecas[matriz[i][j]]++
//         }
//     }
//     return `Peão: ${pecas[1]} peça(s) 
//     Bispo: ${pecas[2]} peça(s)
//     Cavalo: ${pecas[3]} peça(s)
//     Torre: ${pecas[4]} peças(s)
//     Rainha: ${pecas[5]} peça(s)
//     Rei: ${pecas[6]} peça(s)`
// }

// console.log(pecasDeXadrez(exemplo1))


const pecasDeXadrez = (matriz) => {
    const pecas = [0, 0, 0, 0, 0, 0]

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            pecas[matriz[i][j]-1]++
        }
    }
    return `Peão: ${pecas[0]} peça(s) 
    Bispo: ${pecas[1]} peça(s)
    Cavalo: ${pecas[2]} peça(s)
    Torre: ${pecas[3]} peças(s)
    Rainha: ${pecas[4]} peça(s)
    Rei: ${pecas[5]} peça(s)`
}

console.log(pecasDeXadrez(exemplo1))