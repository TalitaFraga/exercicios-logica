// 25) Escreva uma função que dado dois arrays retorne a união dos elementos (Na teoria dos conjuntos a união dos elementos não adimte repetição).

const union = (array1, array2) => {
    let newarr = []

    for(let i = 0; i < array1.length; i++){
        if(!newarr.includes(array1[i])){
            newarr.push(array1[i])
        }
    }
    for(let i = 0; i < array2.length; i++){
        if(!newarr.includes(array2[i])){
            newarr.push(array2[i])
        }
    }
    return newarr
}

console.log(union([1,2,3,4,5,5,5,5,5,5], [3,4,5,7,8,9]))

