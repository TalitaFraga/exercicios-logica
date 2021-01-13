//17) contruindo o meu map


const myMap = (param1, param2) => {
    let newArr = []

    for(let i = 0; i < param1.length; i++) {
        let f = param2(param1[i])
        newArr.push(f)
    }
    return newArr 
}
console.log(myMap([1,2,3,4,5], x => x + 3))


// const myMap = (arr, num) => {
//     let newArr = []

//     for(let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i]+num)
//     }
//     return newArr
// }
// console.log(myMap([1,2,3,4,5],3))

