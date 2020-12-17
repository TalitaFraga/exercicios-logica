//14) Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array. 
//Example: splitter([1, 2, 3, 4, 5, 6], 2) -> [[1, 2], [3, 4], [5, 6]]

const splitter = (arr, num) => {
    let arrayGrande = []
    let arrayPequeno = []

    for (let i = 0; i < arr.length; i++ ) {
        arrayPequeno.push(arr[i])
        if (arrayPequeno.length == num) {
            arrayGrande.push(arrayPequeno)
            arrayPequeno = []
        }
    }
    return arrayGrande
}
console.log(splitter([1,2,3,4,5,6], 3))