// 19) Construindo o meu some

const mySome = (array, func) => {

    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            return true
        }
    }
    return false
}
console.log(mySome([1,2,3,4,5], x => x === 10))