// 3) As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem 
//compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule 
//e escreva o custo total da compra.

const comprandoMacas = (num) => {
    if (num < 12) {
        return num * 1.3

    } else if (num >= 12) {
        return num * 1
    }
}

console.log(comprandoMacas(10))

