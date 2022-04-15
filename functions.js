// let array = [1,2,3,]

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

// function findUnique(str) {
//   let uniq = "Monday";
//   for (let i = 0; i < str.length; i++) {
//     if (uniq.includes(str[i]) === false) {
//       uniq += str[i];
//     }
//   }
//   return uniq;
// }

// function checkPangram(str) {
//   mark = new Array(26).fill(false);
//   let index;
//   for (let i = 0; i < str.length; i++) {
//     if ("A" <= str[i] && str[i] <= "Z")
//       index = str.charCodeAt(i) - "A".charCodeAt(0);
//     else if ("a" <= str[i] && str[i] <= "z")
//       index = str.charCodeAt(i) - "a".charCodeAt(0);
//     else continue;

//     mark[index] = true;
//   }

//   for (let i = 0; i <= 25; i++) if (mark[i] == false) return false;

//   return true;
// }

// let str = "I like cats, but not mice";

// if (checkPangram(str) == true) console.log("is a pangram");
// else console.log("is not a pangram");



function findLongestWord(str) {
    var longestWord = str.split(' ').reduce(function(longest, currentWord) {
      return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return longestWord.length;
  }
  findLongestWord("hi", "hello");