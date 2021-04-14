// 20) Construindo o meu every

// const myEvery = (arr, func) => {

//     for (let i = 0; i < arr.length; i++) {
//         if (!func(arr[i])) {
//             return false
//         }
//     }
//     return true
// }
// console.log(myEvery([1,2,3,4,5,6,10], x => x <= 6))

function hourglassSum(arr) {
    let acumulador = 0
    let result 
    for(let i = 0; i < arr.length - 2; i++){
        for(let j = 0; j < arr[i].length - 2; j++){
            acumulador = (arr[i][j]) + (arr[i][j+ 1]) + (arr[i][j+2]) + (arr[i+1][j+1]) + (arr[i+2][j]) + (arr[i+2][j+ 1]) + (arr[i+2][j+2])
        
        if(result === undefined || acumulador > result ){
            result = acumulador

        }// else if(acumulador > result ){
          //  result = acumulador
        //}
        }
    }
    return result
}
console.log(hourglassSum([[1,1,1,0,0,0], [0,1,0,0,0,0], [1,1,1,0,0,0], [0,0,2,4,4,0], [0,0,0,2,0,0], [0,0,1,2,4,0]]))
