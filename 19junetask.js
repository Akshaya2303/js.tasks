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


//  find the odd numbers in an array and push into new array
let arr=[2,1,4,3,5,6,7]
let odd=[];
for(i=0;i<arr.length;i++)
{
    if(arr[i]%2!=0)
    {
        odd.push(arr[i]);
    }    
}
console.log(odd);
