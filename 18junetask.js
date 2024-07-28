// 26,27,June JS tasks
// // 1)  check how isNaN works in different scenario
// // console.log(isNaN(NaN));        
//  true, because NaN is Not-a-Number
// // console.log(isNaN("NaN"));       
// true, string "NaN" is coerced to NaN
// // console.log(isNaN(undefined));   
// true, undefined is coerced to NaN
// // console.log(isNaN({}));         
//  true, object is coerced to NaN
// // console.log(isNaN("123"));       
// false, string "123" is coerced to number 123
// // console.log(isNaN(123));        
//  false, 123 is a number
// // console.log(isNaN(""));          
// false, empty string is coerced to number 0
// // console.log(isNaN(" "));         
// false, string with a space is coerced to number 0
// // console.log(isNaN(true));      
//   false, true is coerced to number 1
// // console.log(isNaN(false));       
// false, false is coerced to number 0
// // console.log(isNaN(null));        
//  false, null is coerced to number 0
// // console.log(isNaN("hello"));     //
//  true, string "hello" is coerced to NaN


// // 2) study types of coercion
// Type Coercion
// Type coercion refers to the automatic or implicit conversion of
//  values from one data type to another. This process happens in 
//  the background during operations involving values of different types.

// Types of Type Coercion
// Implicit Coercion: This occurs automatically when JavaScript 
// encounters an operation involving different data types.
// Explicit Coercion: This is when you manually convert a value
//  from one type to another using functions or methods.

// Explicit Type Conversion
// JavaScript type conversion, allowing you to convert values
//  from one data type to another.
// String(): Converts a value to a string.
// let num = 123; let str = String(num); console.log(str); // Output: "123" 
// Number(): Converts a value to a number.
// let str = "123"; let num = Number(str); console.log(num); // Output: 123  
// 3. Boolean(): Converts a value to a boolean.
// let num = 0; let bool = Boolean(num); console.log(bool); // Output: false


// // // 3) write a program to print a random otp

// let otp = '';
// const characters = '0123456789';
// const otpLength = 6;
// for (let i = 0; i < otpLength; i++) {
//   otp += characters.charAt(Math.floor(Math.random() * characters.length));
// }
// console.log(`Your OTP is: ${otp}`);


// // 1) Write a function that displays the current date and time in 
// // the format YYYY-MM-DD HH:MM:SS.

// function displayCurrentDateTime() {
//     const now = new Date();
//     const year = now.getFullYear();
//     const month = String(now.getMonth() + 1).padStart(2, '0');
//     const day = String(now.getDate()).padStart(2, '0');
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const seconds = String(now.getSeconds()).padStart(2, '0');
  
//     const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
//     console.log(formattedDateTime);
//   }
  
//   displayCurrentDateTime();
  

// 2) Write a function that calculates the number of days between two dates.

// function calculateDaysBetweenDates(date1, date2) {
//     const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
//     const firstDate = new Date(date1);
//     const secondDate = new Date(date2);
//     const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
//     return diffDays;
//   }
//   const daysBetween = calculateDaysBetweenDates('2023-06-01', '2023-07-30');
//   console.log(daysBetween);
  

// // 3) Write a function that returns the day of the week for a given date.

// function getDayOfWeek(date) {
//     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const givenDate = new Date(date);
//     const dayOfWeek = daysOfWeek[givenDate.getDay()];
//     return dayOfWeek;
// }
//   const day = getDayOfWeek('2023-06-28');
//   console.log(day); // Output: Friday (or the correct day of the week for the given date)
  
