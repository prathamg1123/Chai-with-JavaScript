console.log("Pratham")
let n = 4;
const faltumsg = '      HElloooo lellloooo!      '
const finalmsg = faltumsg.trim() // removes white spaces for start and end
// const num_alph = faltumsg.concat(finalmsg)
// console.log(num_alph)
// console.log(finalmsg)


// console.log(finalmsg.includes("HEllo")) => show true or false

const lastFourDigits = '7854'
const maskedAccountNumber = lastFourDigits.padStart(10, '*')
console.log(maskedAccountNumber)