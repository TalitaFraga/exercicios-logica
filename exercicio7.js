// 7) escreva uma função que, dado uma lista de inteiros, retorne o maior dos números.
// greatest([10]) => 10
// greatest([10, 15, 12, 20]) => 20
// greatest([-12, -1, -2, -30, -15]) => -1

const theGreatest = (array) => {
    let largest = array[0]
    for (let i = 0; i < array.length; i++) {
        if(array[i] > largest) {
            largest = array[i]
        }
    
    }
    return largest
}
console.log(theGreatest([-500, -50, -4 ,-1]))