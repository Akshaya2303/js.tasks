// console.log(10 + 10);     
// console.log(10 + "10"); 
// console.log(10 + +"10");  
// console.log(10+"10"+10);  
// console.log(10+ +"10" + 10);
// console.log(10 - "2");
// console.log(10 - "2" - "8");
// console.log(10+"2" - "2");
// console.log(10>9>8);
// console.log(10 * "10");
// console.log(100 / "100");
// console.log(100/"0");
// console.log(100 + +"100" - "100" * "100");
// console.log(1 == "1");
// console.log(1 === "1");
// console.log(1 == "one");
// console.log(1 === "one");
// console.log(1+true);
// console.log(1 - true);
// console.log(1 + true - false);
// console.log("1" + true);
// console.log(+"1" + true);
// console.log(undefined == undefined);
// console.log(undefined === undefined);
// console.log(null == null);
// console.log(null === null);
// console.log(undefined == null);
// console.log(undefined === null);
// console.log(2+NaN);
// console.log("2"+NaN);
// console.log("2"+undefined);
// console.log(2+undefined);
// console.log(typeof "123");
// console.log(typeof 2);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof []);
// console.log(typeof 1n);
// console.log(typeof 1n+2n);
// console.log(typeof 1+2n);
// console.log(typeof 1/1n);


// console.log(null == undefined);
// console.log( [] == false); 
// console.log({} + {}) ;
// console.log(typeof 42n) ;
// console.log("" == false) ;
// console.log(+'') ;
// console.log(Boolean("0")) ;
// console.log([] === []) ;
// console.log(typeof Infinity) ;

// Write a program to find the sum of all even numbers in an array using a for loop.

//   Example: let arr = [1, 2, 3, 4, 5, 6];
// 

// 2.Use a do-while loop to print the numbers from 1 to 10, but only if 
// the number is not equal to 5.
// Example: let num = 1;
// Test Case: printNumbers()

// function primenum(){
// let num=1;
// do{
//     if(num!=5){
//         console.log(num);
//     }
//     num++;
// }
// while(num<=10);
// }
// primenum();

// 6.
// *
// **
// *
// **
// ***

function printPattern() {
    let pattern = [1, 2, 1, 2, 3];
  
    for (let i = 0; i < pattern.length; i++) {
      let stars = '';
      for (let j = 0; j < pattern[i]; j++) {
        stars += '*';
      }
      console.log(stars);
    }
  }
  
  printPattern();
  
