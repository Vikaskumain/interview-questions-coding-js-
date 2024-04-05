//Write a function to count the number of vowels in a given string.

function filterOutConsonants(str) {
    return str.split("").filter(char => !'AEIOUaeiodfggbbvkumsu'.includes(char)).join("");
}

// Example usage:
const alphabet = "vikaskumainCHAND";
console.log(filterOutConsonants(alphabet));



// Explanation: This solution splits the string into an array of characters, filters out the vowels, and returns the length of the filtered array.
// The function filterOutConsonants takes a string str as input and returns a new string with consonants removed.
// The split, filter, and join methods are used to split the string into an array of characters, filter out consonants, and join the remaining characters back into a string.
// The string of vowels 'AEIOUaeiou' is used to filter out consonants. If a character is not included in this string, it is considered a consonant and retained in the filtered string.