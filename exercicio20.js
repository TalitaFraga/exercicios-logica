// 20) Construindo o meu every

const myEvery = (arr, func) => {

    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i])) {
            return false
        }
    }
    return true
}
console.log(myEvery([1,2,3,4,5,6,10], x => x <= 6))