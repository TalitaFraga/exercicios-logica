//https://dev.to/coderbyte/reintroducing-code-review-with-an-interview-question-asked-at-amazon-5a89

// const theLargest  = (arr) => {
//     let largest = arr[0]
//     for (let i = 0; i< arr.length; i++) {
//         if(arr[i] > largest) {
//             largest = arr[i]
//         }
//     }
//     return largest
// }


// const sum = (arr) => {
//     let accumulator = 0
//     for (let i = 0; i < arr.length; i++) {
//         accumulator = accumulator + arr[i]
    
//     }
//     return accumulator
// }




// const maiorIgualASoma = (arr) => {
//     const max = theLargest(arr)

//     const soma = sum(arr) - max

//     return max === soma
// }

// console.log(maiorIgualASoma([10, 5, 4, 1]))

//OU



const maiorIgualASoma = (arr) => {
    let largest = arr[0]
    let accumulator = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i]
        }
        accumulator = accumulator + arr[i]
    }
    const max = accumulator - largest

    return largest === max
}
console.log(maiorIgualASoma([10, 5, 4, 1]))