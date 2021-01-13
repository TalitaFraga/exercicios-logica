// 18) Construindo o meu filter

const myFilter = (param1, param2) => {
    let result = []

    for(let i = 0; i < param1.length; i++) {
        if (param2(param1[i])) {
            result.push(param1[i])
        }
    }
    return result
}

console.log(myFilter([3,4,5,6,1,2], x => x < 5))