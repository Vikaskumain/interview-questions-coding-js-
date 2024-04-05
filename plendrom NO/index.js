//This is the Plendrom no write a code 


// Explanation: This solution is similar to the reverse string function but compares the reversed string with the original to check for palindromes

function isPalindrome(num) {
      let numstring = num.toString()
      return numstring===numstring.split('').reverse().join('');
       
}
let result = isPalindrome(1212)
console.log(result)

