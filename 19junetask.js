// print before letters of every charecter 
// by using askey values' 

// let inputString = "Akshaya Nayakidi";
// let result = "";

// for (let i = 0; i < inputString.length; i++) {
//     let asciiValue = inputString.charCodeAt(i);
//     if (asciiValue > 0) {
//         let previousAsciiValue = asciiValue - 1;
//         let previousChar = String.fromCharCode(previousAsciiValue);
//         result += previousChar;
//     }
// }


// console.log(result);


//  remove spaces between a sentence'


// let str="        welcome  everyone ";
// let value=str.trim();
// console.log(value);

// // reverse a hello word without using methods'

// let str="hello";
// let value="";
// for(i=str.length-1;i>=0;i--){
// value+=str[i];
// }

// console.log(value);


// find the length of a string without using method.
// let str = "Hello, World!";
// let length = 0;

// while (true) {
//     if (str[length] === undefined) {
//         break;
//     }
//     length++;
// }

// console.log("Length of the string is:", length);


// // 1)iterabe object values through for in loop


// const obj = { a: 1, b: 2, c: 3 };
// for(const key in obj){
//     console.log(obj[key]);
// }

// //2) iterabe object keys  through for in loop
// const obj={a: 1, b: 2, c: 3};
// for(const key in obj){
//     console.log(key);
// }

// // 3)iterate object values and keys using entries , keys and values methods
//     // object entrries - keys and values
//     const obj={a: 1, b: 2, c: 3};
//     for(const [key,value]of Object.entries(obj));
// {
//     console.log('key:${key},value:${value}');
// }

//     // object keys - keys and values
// const obj={a:1,b:2,c:3};
// for(const key of Object.key(obj)){
//     console.log("key:${key},value:${obj[key]}");
// }

//     // /object values - we can get only values
// const obj={a:1,b:2,c:3};
// for(const value of Object.values(obj)){
//     console.log(value);
// }

// find the largest number in an array
// let arr=[1,5,7,4,6]
// let max=arr[0];
// for(i=0;i<=arr.length;i++)
// {
//     if(arr[i]>max)
//     {
//         max=arr[i];
//     }
// }
// console.log(max);


//  find the second largest number in an array
// let arr=[1,3,2,5,4]
// let max=arr[0];
// let secmax=arr[0];
// for(i=0;i<=arr.length;i++)
// {
//     if(arr[i]>max)
//     {
//         secmax=max;
//     }
//     if(arr[i]>secmax)
//     {
//         secmax=arr[i];
//     }
// }
// console.log(secmax);


// //  find the smallest number in an array


// let arr = [1, 3, 2, 5, 4];
// let min = arr[0]; 
// for (let i = 1; i < arr.length; i++) { 
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }
// console.log(min); 

// //  find the sum of the even numbers in an array
// let arr=[3,1,2,6,5,4];
// let even=0;
// for(i=0;i<arr.length;i++)
// {
//     if(arr[i]%2==0)
//     {
//         even=even+arr[i];
//     }
// }
// console.log(even);


// //  find the odd numbers in an array and push into new array
// let arr=[2,1,4,3,5,6,7]
// let odd=[];
// for(i=0;i<arr.length;i++)
// {
//     if(arr[i]%2!=0)
//     {
//         odd.push(arr[i]);
//     }    
// }
// console.log(odd);

// 25 tasks

// Task 1: Using concat()
// // Objective: Merge two arrays into one.
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6]; // [1, 2, 3, 4, 5, 6]
// const arr3=array1.concat(array2)
// console.log(arr3);

// Task 2: Using flat()
// Objective: Flatten a nested array up to a specific depth.
// const nestedArray = [1, [2, [3, [4]]]]; // [1, 2, 3, [4]]
// const arr=nestedArray.flat(2)
// console.log(arr);

// Task 3: Using splice()
// Objective: Remove elements from an array and optionally insert new elements.

// const array = [1, 2, 3, 4, 5]; // [1, 2, 'a', 'b', 5]
// array.splice(2,2,"a","b");
// console.log(array); // [3, 4]

// Task 4: Using slice()
// Objective: Extract a portion of an array into a new array.

// const array = [1, 2, 3, 4, 5]; // [2, 3, 4]

// Task 5: Using toSpliced()
// Objective: Create a new array with some elements replaced, without modifying the original array.


// const array = [1, 2, 3, 4, 5];// [1, 'a', 'b', 4, 5]
// console.log(array); // [1, 2, 3, 4, 5]


// // Task 6: Using copyWithin()
// // Objective: Copy part of an array to another location in the same array.
// const array = [1, 2, 3, 4, 5];
// array.copyWithin(0, 3); // [4, 5, 3, 4, 5]
// console.log(array); 

// Task 7: Using indexOf()
// // Objective: Find the first occurrence of a value in an array.
// const array = [1, 2, 3, 2, 1];
// const index = array.indexOf(2); // 1
// console.log(index); 


// // Task 8: Using lastIndexOf()
// // Objective: Find the last occurrence of a value in an array.

// const array = [1, 2, 3, 2, 1];
// const lastIndex = array.lastIndexOf(2);
// console.log(lastIndex); // 3


// Task 9: Using includes()
// Objective: Check if an array contains a certain value.
// const array = [1, 2, 3, 4, 5];
// const hasValue = array.includes(3); // true
// console.log(hasValue); 

// Task 10: Combining Methods
// Objective: Use multiple array methods in a single task.

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const mergedArray = array1.concat(array2).flat();
// // console.log(mergedArray); // [1, 2, 3, 4,

// const splicedArray = mergedArray.toSpliced(2, 1, 'a');
// console.log(splicedArray); 
// const finalArray = splicedArray.slice(1, 5);
// console.log(finalArray); 
// console.log(finalArray.includes('a')); // true
// console.log(finalArray.indexOf(5)); // 3


// 1.Write a function that takes an array of objects as an 
// argument and returns an array of the keys of each object using for...in iteration.
// Input: [{ a: 1, b: 2 }, { c: 3, d: 4 }, { e: 5, f: 6 }]
// // Output: [["a", "b"], ["c", "d"], ["e", "f"]]
// const obj= [{ a: 1, b: 2 }, { c: 3, d: 4 }, { e: 5, f: 6 }];
// let x= obj.map(item => Object.keys(item));
// console.log(x);


// 2.Write a function that takes an array of objects as an 
// argument and returns an array of the values of each object using for...in iteration.
// Input: [{ a: 1, b: 2 }, { c: 3, d: 4 }, { e: 5, f: 6 }]
// Output: [[1, 2], [3, 4], [5, 6]]
 
// const obj= [{ a: 1, b: 2 }, { c: 3, d: 4 }, { e: 5, f: 6 }];
// let x= obj.map(item=> Object.values(item));
// console.log(x);


// 4.Write a function that takes an array of objects as an 
// argument and returns a new array with the objects sorted by a specific property 
// using for...in iteration.
// Input: [{ a: 2 }, { a: 1 }, { a: 3 }], "a"
// Output: [{ a: 1 }, { a: 2 }, { a: 3 }]

// const Array = [{ a: 2 }, { a: 1 }, { a: 3 }];
// const a = "a";
// Array.sort((a, b) => a[a] - b[a]);
// console.log(Array); 



// 5.Write a function that takes an array of objects as an argument and 
// returns a new object with the properties from all the objects in the array 
// using for...in iteration.
// Input: [{ a: 1 }, { b: 2 }, { c: 3 }]
// Output: { a: 1, b: 2, c: 3 }

const objArray = [{ a: 1 }, { b: 2 }, { c: 3 }];
let result = {};
for (let obj of objArray) {
  for (let key in obj) {
    result[key] = obj[key];
  }
}
console.log(result); 



