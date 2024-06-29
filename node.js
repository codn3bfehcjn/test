// let add = (a,b)=>{
//     console.log(a+b)
// }
// module.exports = {
//     vish:add
// }


// function printMessage() {
//     console.log('This message repeats every second');
//   }
  

//   let intervalId = setInterval(printMessage, 1000);
  

//   function stopInterval() {
//     clearInterval(intervalId);
//     console.log('Interval stopped');
//   }
  
//   setTimeout(stopInterval, 5000);

//   const url = new URL('https://www.geeksforgeeks.org/node-js-global-objects/?ref=next_article')
//   console.log(url)

//   let vish = new TextEncoder()
//   let text = "my name is vishwam"
//   let e = vish.encode(text)
//   console.log(e)

//   let vish1 = new TextDecoder()
//   console.log(vish1.decode(e))

// const assert = require("assert");
// let a = require("assert")
// let x = 8;
// let y = 8;
// try {
//    assert(x===y) 
//    console.log("the two numbers are equal")
// } catch{
//     console.log("numbers are not equal")
// }

// const ass = require('assert'); 
// let x1 = 5; 
// let y1= 5; 
// ass(x1>y1); 

// const assert = require("assert");
// let arr1 = [7,7,7,7,7,7,7,8]
// let arr2 = [7,7,7,7,7,7,7,7]
// assert.deepStrictEqual(arr1,arr2,"the operation is not succesfull")
// console.log("the operation is succes")
//The original usage assert.deepStrictEqual(x, y, z, c, "the operation is not succesfull"); is incorrect because assert.deepStrictEqual() expects an array or object as its first argument, not individual values.
// Since the original code does not correctly form the assertion, it doesn't compare the values as intended, and therefore, it doesn't throw an error even though x, y, z, and c have different values.


// Requiring the module 
// function divide(a, b) {
//     if (b === 0) {
//         throw new Eror('Division by zero is not allowed');
//     }
//     return a / b;
// }

// try {
//     let result = divide(10, 0); // Throws an error
//     console.log(result); // This line will not execute
// } catch (eror) {
//     console.error('Caught an error:', eror.message); // Output: Caught an error: Division by zero is not allowed
// }


// function divide(a,b){
//     if(b===0){
//         throw new Error("not able to divide")
//     }
//     let c = a/b;
//     return c
// }

// try {
//    let l =  divide(10,2)
//      console.log(l)
// } catch (e) {
//     console.log("the error is:",e)
//     console.log("the error is:",e.message)
// }

// let as = require("assert")
// let a=4;
// let b=4;
// (as.equal(a,b))

// const assert = require('assert');
// try {
//     assert.strictEqual(1, 2);
// } catch (error) {
//     if (error) {
//         console.error('Assertion error occurred:', error.message);
//     }
// }

// Requiring the module
// const assert = require('assert');
// let a  = 4;
// try {
//   let l = /4/  
//   assert.match(a,l,"operation not succesfull")
//     console.log(`${l} found`)
// } catch (error) {
//     console.log(error.message)
// }

const assert = require('assert').strict;
 
let a = "GeeksforGeeks";
let b = "Geeks4Geek";
 
// Function call
try {
    assert.strictEqual(a, b);
} catch (error) {
    console.log("Error: ", error.message)
}