//Write a function to check if two given strings are anagrams of each other. what is the differece between and how to write a code and explain with defination

function checkedAnagrams(str1,str2){
   // Remove non-alphanumeric characters and convert both strings to lowercase // 
    const cleandstring = str => str.replace(/[^a-zA-Z]/g).toLowerCase()

    const clean1 =cleandstring(str1)
    const clean2 =cleandstring(str2)
// Sort the characters of both strings and compare
    return clean1.split("").sort().join("")===clean2.split("").sort().join("")
}

const reult =(checkedAnagrams("silent","listen"))
console.log(reult)

