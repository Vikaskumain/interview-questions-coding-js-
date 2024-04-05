//find max no and write a code based with defination and with example like this 


//Definition of the Function in Easy Way:
//This function finds the largest number in an array of numbers. It first checks if the array is empty. If it's not empty, it finds the maximum number using Math.max(). If the array is empty, it returns null to indicate that there is no largest number.

function findLargestNumber(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    return Math.max(...arr);
}

// Example usage:
const result = findLargestNumber([4, 755, 5875, 1345 ,7584522,]);
console.log(result);

// to way to write a code with ternary oprator 

let findmx =[1,45,75988,154548,21545,]
function findmaxx(arr) {
   return( arr===0 ? null : Math.max(...arr))
}
const results =findmaxx(findmx)
console.log(results)


// Definition of the Function in Easy Way:

// This function finds the largest number in an array of numbers. It first checks if the array is empty. If it's not empty, it finds the maximum number using Math.max(). If the array is empty, it returns null to indicate that there is no largest number.
