// 26) Have the function ArrayChallenge (strArr) read the array of string stored in strArr which will contain 2 elements: the first element will represent a 
// list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted).
//Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return
//the string false.
// Example: 
// input: ["1,3,4,7,13", "1,2,4,13,15"]
// output: 1,4,13


const arrayChallenge = (strArr) => {
    let element1 = strArr[0].split(",")
    let element2 = strArr[1].split(",")

    let output = []
    for (let i = 0; i < element1.length; i++){
        for(let j = 0; j < element2.length; j++){
            if(element1[i] === element2[j]){
                output.push(element1[i])
            }
        }
    }
    if(output.length === 0){
        return "false"
    }
    return output.toString()
}

console.log(arrayChallenge(["1,2", "2,1"]))

//OR

const arrayChallenge = (strArr) => {
    let element1 = strArr[0].split(",")
    let element2 = strArr[1].split(",")

    let output = []
    for (let i = 0; i < element1.length; i++){
        for(let j = 0; j < element2.length; j++){
            if(element1[i] === element2[j]){
                output.push(element1[i])
            }
        }
    }
    return output.length === 0 ? "false" : output.toString()
}

console.log(arrayChallenge(["1,2", "2,1"]))
