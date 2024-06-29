// const cp = require('child_process');

// console.log('Starting execution of demo.js...');
// setTimeout(() => {
//     try {
//         let output = cp.execSync('node demo.js');
//         console.log('Command executed successfully.');
//         console.log('Output: ' + output.toString());
//     } catch (error) {
//         console.error('Error executing demo.js:', error);
//     }
// },1);

// let os = require("os")
// console.log(os.arch())
// console.log(os.platform())
// console.log(os.networkInterfaces())
//  let c = console.log(os.cpus())

// let fs = require("fs")

// let data = fs.readFileSync("f1.txt")
// console.log(data.toString())

// let path = require("path") 
// console.log(path.dirname("C:\\Users\\HP\\Desktop\\New folder\\node\\first.js"))
// console.log(path.basename("C:\\Users\\HP\\Desktop\\New folder\\node\\first.js"))

// let buffer = Buffer.alloc(28)
// let l = "this is vishwam thakur this side" // is side se offset apna value cut karna chalu karta hai.

// let len  = buffer.write(l,2);// length(or octate) will be returned.(buffer.alloc - offset(18-1 = length))

// console.log(`the length of the string is :- ${len}`)

// console.log(buffer.toString()) //only 18 bytes will be printed on screen not whole string kyunki allocate hi 18 bytes hua hai to usse zyada nahi fit hoga


let fig = require("figlet")

figlet("vishwam", (err,data)=>{
    if(err){
        console.log("something went wrong")
    }
    console.log(data)
})
