// // Write a JavaScript function that takes two numbers and an operator 
// // ('+', '-', '*', '/') as arguments and returns the result of the arithmetic operation.
// function calculate(num1, num2, operator) {
//     switch(operator) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             return num1 / num2;
//         default:
//             return 'Invalid operator';
//     }
// }
// // // Write a JavaScript function that takes a number as a ar
// // gument and returns it's square value
// function square(number) {
//     return number * number;
// }
//  // Write a JavaScript function that takes two numbers as a
// // arguments and returns the highest(max ) of the number using terinary operator inside a function
// function max(num1, num2) {
//     return num1 > num2 ? num1 : num2;
// }

// // //Write a javascript function which takes three arguments 
// // (amount , rate of interest, no of years ) returns the total value of interest
// function calculateInterest(amount, rateOfInterest, numberOfYears) {
//     return amount * rateOfInterest * numberOfYears / 100;
// }

// // input: Enter a number: 567
// // output: 765
// // input: Enter a number: -890
// // output: -98
// function reverse(num) {
//     let reversed = 0;
//     let isNegative = num < 0;
//     num = Math.abs(num);
//     while (num > 0) {
//       reversed = reversed * 10 + (num % 10);
//       num = Math.floor(num / 10);
//     }
//     return isNegative ? -reversed : reversed;
//   }
//   console.log(reverse(567));   
//   console.log(reverse(-890)); 

// TASK : 
// // 1) input: Enter no of non-fib series: 10
// // output: 4 6 7 9 10

// function nonFibonacciSeries(n) {
//     let a = 0;
//     let b = 1;
//     let c = a + b;
//     let nonFibNumbers = [];
//     let count = 0;  
//     while (count < n) {
//       for (let i = b + 1; i < c; i++) {
//         if (count < n) {
//           nonFibNumbers.push(i);
//           count++;
//         }
//       }
//       a = b;
//       b = c;
//       c = a + b;
//     } 
//     console.log(nonFibNumbers.join(' '));
//   }
//   nonFibonacciSeries(10);
  


// 2) input: Enter no of fib-series: 7
// output: prime numbers in the fib series are: 2 3 5


function fibonacciSeries(n) {
    let a = 0, b = 1;
    let fibNumbers = [a, b];
    for (let i = 2; i < n; i++) {
      let next = a + b;
      fibNumbers.push(next);
      a = b;
      b = next;
    }
    return fibNumbers;
  }
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  function primeFibonacciSeries(n) {
    let fibNumbers = fibonacciSeries(n);
    let primeFibNumbers = fibNumbers.filter(num => isPrime(num));
    console.log('Prime numbers in the fib series are:', primeFibNumbers.join(' '));
  }
  primeFibonacciSeries(7); 




// // 3) input: Enter no of fib-series: 7
// // output: Non prime numbers in the fib series are: 0 1 1 8 .
// function fibonacciSeries(n) {
//     let a = 0, b = 1;
//     let fibNumbers = [a, b];
  
//     for (let i = 2; i < n; i++) {
//       let next = a + b;
//       fibNumbers.push(next);
//       a = b;
//       b = next;
//     }
  
//     return fibNumbers;
//   }
  
//   function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   }
  
//   function nonPrimeFibonacciSeries(n) {
//     let fibNumbers = fibonacciSeries(n);
//     let nonPrimeFibNumbers = fibNumbers.filter(num => !isPrime(num));
//     console.log('Non prime numbers in the fib series are:', nonPrimeFibNumbers.join(' '));
//   }
  
//   nonPrimeFibonacciSeries(7); 
  

  
