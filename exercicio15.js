// escreva uma função que faça compressão de strings. ou seja, pra cada letra que se repetir, 
//apenas indique a quantidade de vezes que ela aparece:
// compress('aaabbbccdddd') -> 'a3b3c2d4'
// compress('aaaaaaaaaa') -> 'a10'

const compress = (string) => {
    let contagem = 1
    let guardador = ""

    for (let i = 1; i <= string.length; i++) {
        if (string[i - 1] !== string[i]) {
            guardador = guardador + string[i-1] + contagem
            contagem = 1
        } else {
            contagem ++
        }
    }
    return guardador
}

console.log(compress("haaaccc"))
