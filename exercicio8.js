// 8) escreva uma função que receba o nome, a idade e o sexo de uma pessoa e retorne um objeto com os campos 
// "name", "age" e "sex":toPessoa('Julia', 28, 'W') => { 'name': 'Julia', 'age': 28, 'sex': 'W'}

const pessoa = (name, age, sex) => {
    
    let obj = {
        name: name, 
        age: age,
        sex: sex
    }
    return obj

}
console.log(pessoa("Talita", 30, "W"))