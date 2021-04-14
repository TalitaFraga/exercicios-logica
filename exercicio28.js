// 28) Write a function "solution" that, given a string S consisting of N letters 'a' and/or 'b' returns true when all occurrences of letter 'a' are before all 
//occurrences of letter 'b' and returns false otherwise.
// Example: 

// 1. Given S = "aabbb", the function should return true.
// 2. Given S = "ba", the function should return false
// 3. Given S = "aaa", the function should return true. Note that 'b' does not need to occur in S.
// 4. Given S = 'b, the function should return true. Note that 'a' does not need to occur in S.
// 5. Given S = "abba", the function should return false.

// Write an efficient algorithm for the following assumptions.

//     * N is an integer within the range[1..300,000]
//     * String S consists only of the characters 'a' and/or 'b'

const solution = (s) => {

    let seenB = false
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'a' && seenB === true){
            return false
        } else if(s[i] === 'b'){
            seenB = true
        }
    }
    return true
}
console.log(solution("aaaaabbbbb"))