// // 1) Write a program to print the sum of odd digits in the number
// // input: Enter a number: 1633
// // output: Odd sum is : 7

// let a = 1633;
// a = a.toString(); 
// let sum = 0;

// for (let i = 0; i < a.length; i++) {
//     let digit = parseInt(a[i]); 
//     if (digit % 2 !== 0) { 
//         sum += digit; 
//     }
// }

// console.log("Odd sum:", sum); // Correct way to print the sum


// Write a program to print the difference between even sum and odd sum
// input: Enter a number: 163382
// output: Differnce: 9

// let number = 163382;
// let numStr = number.toString();
// let evenSum = 0;
// let oddSum = 0;
// for (let i = 0; i < numStr.length; i++) {
//     let digit = parseInt(numStr[i]);
    
//     if (digit % 2 === 0) {
//         evenSum += digit;
//     } else {
//         oddSum += digit;
//     }
// }
// let difference = (evenSum - oddSum);
// console.log("Difference:", difference);


//  Write a program to check whether even sum is greater or odd sum is greater.
// input: Enter a number: 163382
// output: Even sum is greater

// input: Enter a number: 123
// output: Odd sum is greater

let number = 163382;

let numStr = number.toString();

let evenSum = 0;
let oddSum = 0;

for (let i = 0; i < numStr.length; i++) {
    let digit = numStr.charCodeAt(i) - 48; // Convert character to digit without using parseInt
    
    if (digit % 2 === 0) {
        evenSum += digit;
    } else {
        oddSum += digit;
    }
}

if (evenSum > oddSum) {
    console.log("Even sum is greater");
} else if (oddSum > evenSum) {
    console.log("Odd sum is greater");
} else {
    console.log("Even sum and odd sum are equal");
}
