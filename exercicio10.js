//10) escreva uma função que receba um número e calcule o fatorial dele
//factorial(5) => tem que retornar 1 * 2 * 3 * 4 * 5
//lembrando que fatorial(0) === 1
//fatorial(1) === 1

const fatorial = (num) => {
    let accumulator = 1

    for (let i = 1; i <= num; i++) {
        accumulator = accumulator * i
    }
    return accumulator
}
console.log(fatorial(7))