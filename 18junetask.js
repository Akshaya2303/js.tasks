// var x = 10;
// function foo() {
//   console.log(x);
// }
// foo();

// Output: __10__


// 1. What is the output of:

// var x = 10;
// function foo() {
//   var x = 20;
//   console.log(x);
// }
// foo();

// Output: _20____


// 1. What is the output of:

// var x = 10;
// function foo() {
//   console.log(x);
//   var x = 20;
// }
// foo();

// Output: __unefined___



// 1. What is the output of:

// var x = 10;
// function foo() {
//   console.log(x);
// }
// var x = 20;
// foo();

// Output: _20____


// 1. What is the output of:

// function foo() {
//   console.log(x);
// }
// var x = 10;
// foo();

// Output: ___10__


// 1. What is the output of:

// function foo() {
//   console.log(x);
// }
// foo();
// var x = 10;

// Output: ___undefined__

// debugger
// console.log(a)
// let a=20;

// 17 July task

// // 1.Enter rows:4
// // Output:
// // 1
// // 1 2
// // 1 2 3
// // 1 2 3 4
// rows=+prompt("enter rows:");
// for(i=1;i<=rows;i++)
// {
//     s="";
//     for(j=1;j<=i;j++)
//     {
//         s=s+j +" ";
//     }
// console.log(s)
// }


// // 2. Enter rows:4
// //  Output:
// //  1
// //  2 3
// //  4 5 6
// //  7 8 9 10
// rows=+prompt("enter rows:");
// count=1;
// for(i=1;i<=rows;i++)
// {
//     s="";
//     for(j=1;j<=i;j++)
//     {
//         s+=count+" ";
//         count++;
        
//     }console.log(s);
// }


// Enter rows:4
// * * * *
//   * * *
//     * *
//       *
rows = +prompt("Enter number of rows:");
for ( i = rows; i >= 1; i--) {
     s = "";
    for ( k = 0; k < rows - i; k++) {
        s += "  "; 
    }
    for (j = 1; j <= i; j++) {
        s += "* "; 
    }
    console.log(s);
}

