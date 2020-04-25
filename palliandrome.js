
/// simple function to check if a string is a palindrome 
const checkPal = (str) => {
  return str.split("").reverse().join("") == str.split("").join("")
}


const hasPalindromePermutation = (str) => {
    const unpairedCharacters = new Set()

    for(const char of str){
        if(unpairedCharacters.has(char)) {
            unpairedCharacters.delete(char)
        } else {
            unpairedCharacters.add(char)
        }
    }
    return unpairedCharacters.size <= 1
}

console.log(hasPalindromePermutation("civci"))

