let directoryName = __dirname 
let enVar = process.env.MY_VAR
let enVar2 = process.env.MY_VAR2

console.log(`The directory path/name is: ${directoryName}`)

console.log(enVar);

setTimeout(() => {
    console.log(enVar2)
}, 2000);

