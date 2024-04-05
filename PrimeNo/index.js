// write a functions and checkd the  its prime no or not

const array = [1, 3, 4, 5, 6, 7, 9, 8, 75, 64, 16, 32];
const results = [];

function checkPrimeNumbers(array) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (isPrime(num)) {
      results.push(`${num} is prime`);
    } else {
      results.push(`${num} is not prime`);
    }
  }

  return results;
}
const primeResults = checkPrimeNumbers(array);
console.log(primeResults);

// anohter methods

// function checkPrimeNumbers(array) {

//     function isPrime(num) {
//         for (let i = 2 ;i <= Math.sqrt(num); i++) {
//             if (num % i === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }

//     for (let i = 0; i < array.length; i++) {
//         const num = array[i];
//             results.push(`${num} is ${isPrime(num) ? 'prime' : 'not prime'}`);
//     }
//     return results;
// }
// const primeResultss = checkPrimeNumbers(array);
// console.log(primeResultss);


// Using Ternary Operator: Instead of using an if-else statement inside the forEach loop, we utilize a ternary operator to conditionally determine whether each number is prime or not.

// Ternary Operator Syntax: The syntax of the ternary operator is condition ? value1 : value2. If the condition evaluates to true, value1 is returned; otherwise, value2 is returned.

// Pushing Results: Inside the forEach loop, the ternary operator determines whether the current number (num) is prime using the isPrime function. Based on the result, it pushes a string indicating whether the number is prime or not into the results array.

// Return Result: The function returns the results array containing the status of each number in the input array.