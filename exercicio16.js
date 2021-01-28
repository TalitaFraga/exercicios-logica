// 16) Palíndromos são textos ou números que, independente da direção que for lido (esqueda pra direita, direita pra esquerda), tem o mesmo valor. 
//Por exemplo, "Ana" é um palíndromo. "A grama é amarga" é um palíndromo. "Banana" não é um palíndromo. 
//Escreva uma função que, recebendo uma string, indica se é um palíndromo.
// isPalindrome("ana") -> true
// isPalindrome("123") -> false
// isPalindrome("cccabaccc") -> true
// isPalindrome("2002") -> true

const isPalindrome = (word) => {
    const reverse = word.split('').reverse().join('')
    console.log(reverse)

    return word === reverse
}    
console.log(isPalindrome("ana"))


//OU


// const isPalindrome = (word) => {
//     let palindrome = true

//     for (let i = 0; i < word.length; i++) {
//         palindrome = palindrome && word[i] === word[word.length - i - 1]
//     }
//     return palindrome
// }
// console.log(isPalindrome("cccabaccc"))







