// add to zero 
// let array = [19,-19,34,60,55,80]

// let value = "False"
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array.length; j++) {
//     if (i !== j) {
//       if (array[i] + array[j] === 0) {
//         value = "True"
//       }
//     }
//   }
// }

// console.log(value)

// unique char
// word = ["school", "job", "Phone", "car", "house"]
// let unique = [];

// function hasUniqueChars(word) {
//   for (let i = 0; i < word.length; i++) {
//     if (unique[word[i]]) {
//       return false
//     } else {
//       unique[word[i]] = 1
//       console.log(unique)
//     }
//   }
//   return true
// }

// console.log(hasUniqueChars('house'))

// // Pangram
// function isPangram(string){
//   const letters = string.toLowerCase().match(/[a-z]/g);
//   const alphabet = [...new Set(letters)]
//   return alphabet.length === 26;
// }

// console.log(isPangram("John quickly extemporized five tow bags"))


// longest word 
words = []
function findLongestWord(words) {
  let longestWord = 0;
  for (let i = 0; i < words.length; i++) {
    if (words.length > longestWord) {
      longestWord = words[i].length;
    }
  }
  return longestWord;
}
console.log(findLongestWord(['fox', 'lazy', 'brown', 'quick', 'spaces', 'prettier']))