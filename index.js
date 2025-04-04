// function sum (a, b) {
//     return a + b
// }

// let ans = sum(2,3)

// console.log(ans)

function sum(n){

    let sum = 0
    for(let i = 0 ; i <= n; i++){
        sum = sum + i;
    }

    return sum
}

console.log(sum(10))

const fs  = require('fs')

const fileContent = fs.readFileSync("a.txt",'utf-8');

const content = fs.readFile("b.txt" , "utf-8", (err, data)=> {
        console.log("This code will run after this function will complete execution")

        if ( err ) throw err
        console.log("Data is printing from here ",data)
})

console.log(fileContent)
// console.log(content)