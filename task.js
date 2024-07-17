// // console.log(10 + 10);     
// // console.log(10 + "10"); 
// // console.log(10 + +"10");  
// // console.log(10+"10"+10);  
// // console.log(10+ +"10" + 10);
// // console.log(10 - "2");
// // console.log(10 - "2" - "8");
// // console.log(10+"2" - "2");
// // console.log(10>9>8);
// // console.log(10 * "10");
// // console.log(100 / "100");
// // console.log(100/"0");
// // console.log(100 + +"100" - "100" * "100");
// // console.log(1 == "1");
// // console.log(1 === "1");
// // console.log(1 == "one");
// // console.log(1 === "one");
// // console.log(1+true);
// // console.log(1 - true);
// // console.log(1 + true - false);
// // console.log("1" + true);
// // console.log(+"1" + true);
// // console.log(undefined == undefined);
// // console.log(undefined === undefined);
// // console.log(null == null);
// // console.log(null === null);
// // console.log(undefined == null);
// // console.log(undefined === null);
// // console.log(2+NaN);
// // console.log("2"+NaN);
// // console.log("2"+undefined);
// // console.log(2+undefined);
// // console.log(typeof "123");
// // console.log(typeof 2);
// // console.log(typeof true);
// // console.log(typeof undefined);
// // console.log(typeof null);
// // console.log(typeof []);
// // console.log(typeof 1n);
// // console.log(typeof 1n+2n);
// // console.log(typeof 1+2n);
// // console.log(typeof 1/1n);


// // console.log(null == undefined);
// // console.log( [] == false); 
// // console.log({} + {}) ;
// // console.log(typeof 42n) ;
// // console.log("" == false) ;
// // console.log(+'') ;
// // console.log(Boolean("0")) ;
// // console.log([] === []) ;
// // console.log(typeof Infinity) ;

// // Write a program to find the sum of all even numbers in an array using a for loop.

// //   Example: let arr = [1, 2, 3, 4, 5, 6];
// // 

// // 2.Use a do-while loop to print the numbers from 1 to 10, but only if 
// // the number is not equal to 5.
// // Example: let num = 1;
// // Test Case: printNumbers()

// // function primenum(){
// // let num=1;
// // do{
// //     if(num!=5){
// //         console.log(num);
// //     }
// //     num++;
// // }
// // while(num<=10);
// // }
// // primenum();

// // 6.
// // *
// // **
// // *
// // **
// // ***
// // function printPattern() {
// //     let pattern = [1, 2, 1, 2, 3];
  
// //     for (let i = 0; i < pattern.length; i++) {
// //       let stars = '';
// //       for (let j = 0; j < pattern[i]; j++) {
// //         stars += '*';
// //       }
// //       console.log(stars);
// //     }
// //   }
  
// //   printPattern();

// // check whether given input string is palindrome or not?
// // I/p:mom-->is a palindrome
// // I/p:father:--->is not a palindrome.

// // let str="father";
// // let str1="";
// // for(i=str.length-1; i>=0;i--)
// //   {
// //     str1+=str[i]
// //   }
// //   if(str1==str)
// //     {
// //       console.log(`${str} is a palindrom`)
// //     }
// //     else{
// //       console.log(`${str} is not a palindrom`)}

// // 4.Write a program using a do-while loop to print the numbers from 10 to 1, 
// // but only if the number is odd. If the number is even, print "Skipping even number".
// // Example: let num = 10;
// // Output: 9, Skipping even number, 7, Skipping even number, 5, 
// // Skipping even number, 3, Skipping even number, 1
 
// // let num=10;
// //  do{
// //   if(num%2==!0)
// //     {
// //       console.log(num)
// //     }
// //     else(
// //       console.log("Skipping even numbers")
// //     )
// //     num--
// //  }
// //  while(num>0)

// // 5.Write a program using a while loop to find the average of all 
// // numbers in an array. 
// // If the average is greater than 50, print "Average is large".
// // Example: let arr = [1, 2, 3, 4, 5, 6];

// // let arr=[1,2,3,4,5,6]
// // let i=0;
// //  let sum=0;
// //  while(i<arr.length){
// //   sum+=arr[i];
// //   i++;
// //  }
// //  let average=sum/arr.length;
// //  console.log("average of n.o:",average);
// //  if(average>50){
// //   console.log("Average is large");
// //  }

// Write a program to print the prime numbers, such the digits in a prime should be  in increasing order in the prime number in the given range 1 to num (input).
// Input: Enter a number: 150
// Output: Such Prime Numbers are:
// 13 17 19 23 29 37 47 59 67 79 89 127 137 139 149


// let num=150;
// let i=2;
// while(i<=num){
//   let flag=0;
//   for(let j=2;j<i;j++){

//     if(i%j==0){
//       flag=1;
//       break;
//     }
//   }
//   if(flag==0){
//     console.log(i);
//   }
//   i++;
// }

// let num = prompt("Enter a number: ");
// let strNum = num.toString();
// let max = strNum[0];
// let min = strNum[0];
// let maxFirst = true;
// for (let i = 1; i < strNum.length; i++) {
//     let digit = strNum[i];
//     if (digit > max) {
//         max = digit;
//     }
//     if (digit < min) {
//         min = digit;
//     }
//     if (digit === max && i < strNum.indexOf(min)) {
//         maxFirst = true;
//     }
//     if (digit === min && i < strNum.indexOf(max)) {
//         maxFirst = false;
//     }
// }
// if (maxFirst) {
//     console.log("Maximum is first and Minimum is second.");
// } else {
//     console.log("Minimum is first and Maximum is second.");
// // }
// // 1) Write a program to convert the lower case vowels to upper and viceversa.

// // input: I am Good
// // output: I Am GOOd

// str=prompt("enter a string:")
// str1="aeiouAEIOU"
// res=""
// for(i of str)
// {
//     if(str1.includes(i)){
//         if(i==i.toUpperCase()) 
//         {
//             res+=i.toLowerCase();
//         }
//         else
//         {
//             res+=i.toUpperCase();
//         }
//     }
// else{
//         res+=i
// }
// }
// console.log(res);




// 2) Write a program to print one vowel, followed by consnant and soon.
// input: I am Good
// output: ImaGodo

// input: Hello World
// output: eHololWorld


str = prompt("Enter a string: ");
str1 = "aeiouAEIOU";
let vowel = "";
let con = "";
for (i of str) {
  if (str1.includes(i) && i != " ") {
    vowel += i;
  } else if (i != " ") {
    con += i;
  }
}
console.log(con, vowel);
let res = "";
let j = 0;
if (vowel.length > con.length) {
  while (j < con.length) {
    res = res + vowel[j] + con[j];
    j++;
  }
  res = res + vowel.slice(j);
} else if (vowel.length < con.length) {
  while (j < vowel.length) {
    res = res + vowel[j] + con[j];
    j++;
  }
  res = res + con.slice(j);
} else {
  if (j < vowel.length) res = res + vowel[j] + con[j];
  j++;
}
console.log(res);





// // 3) Write a program to print the vowels followed consnants in every word.

// // input: Hello World
// // output: eoHll oWrld
// x = prompt("enter a string: ").split(" ");
// res = "";
// arr = [];
// for (i of x) {
//   let v = "";
//   let c = "";
//   let str = "aeiouAEIOU";
//   for (j of i) {
//     if (str.includes(j)) {
//       v = v + j;
//     } else {
//       c = c + j;
//     }
//   }
//   res = res + v + c + " ";
// }
// arr.push(res);
// console.log(arr.join("  "));


