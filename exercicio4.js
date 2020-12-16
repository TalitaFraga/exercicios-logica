//A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar
// mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um 
//acréscimo de 50%. Escreva um algoritmo que leia o número de horas trabalhadas em um mês,
// o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido
// das horas extras, caso tenham sido trabalhadas (considere que o mês possua 4 semanas
// exatas).


const calculandoSalario = (hora, valorDaHora) => {
    if (hora <= 160) {
        return valorDaHora * hora
    } else if (hora > 160) {
        const horasExtra = hora - 160
        const valorDaHoraExtra = valorDaHora * 0.5 + valorDaHora
        return (valorDaHora * 160) + (horasExtra * valorDaHoraExtra) 
    }

}
console.log(calculandoSalario(170,5))