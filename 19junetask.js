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

    // /object values - we can get only values
const obj={a:1,b:2,c:3};
for(const value of Object.values(obj)){
    console.log(value);
}