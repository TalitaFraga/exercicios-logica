// 24) in recreational mathematics, a square array of numbers, usually positive integers, is called a magic square if the sums of the numbers in each row, 
// each column, and both main diagonals are the same. given a matrix n x n denoted by an array of arrays, write a function to tell if it is a magic square.

const magicSquare = (array) => {

    let magicNumber = 0
    let inverseDiagonal = 0

    for(let i = 0; i < array.length; i++){
        magicNumber += array[i][i]
        inverseDiagonal += array[i][array.length - i - 1]

    }
    if(magicNumber !== inverseDiagonal){
        return false
    }
    

    for(let i = 0; i < array.length; i++){
        let sumLine = 0
        let sumColumn = 0

        for(let j = 0; j < array[i].length; j++){
        sumLine += array[i][j]
        
        sumColumn += array[j][i]

        }
    
        if(magicNumber !== sumLine) {
            return false
        }
        if(magicNumber !== sumColumn){
            return false
        }
    }
    return true
}

console.log(magicSquare([[10, 3, 8], [5, 7, 9], [6, 11, 4]]))