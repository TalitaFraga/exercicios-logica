// 9) escreva uma função que retorne o tamanho da maior palavra de uma frase:
// findLongestWordLength("The quick brown fox jumped over the lazy dog") -> 6
// findLongestWordLength("hey hey heyyyyy hey") -> 7 

const findLongestWordLength = (phrase) => {
    let words = phrase.split(' ')

    let longest = words[0]
    for (let i = 0; i < words.length; i++) {
        if(words[i].length > longest.length) {
            longest = words[i]
        }
    }
    return longest.length
}
console.log(findLongestWordLength("Talita Daniele Lins Fraga"))