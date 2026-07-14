const fname = "Pratham" //typeof returns string
const lname = "Bairagi"

// console.log("first name is " + fname + "last name is " + lname); //don't use this way 

// console.log(`First name is ${fname} Last name is ${lname}`); //string interpolation method 

// To define string
const str = new String("Javascript") // typeof returns object
// console.log(fname.toUpperCase());

// console.log(str.length);
// console.log(str.__proto__);
// console.log(str.toUpperCase());
// console.log(str.charAt(2));
// console.log(str.concat(fname));
// console.log(str.indexOf("J"));
const newString = str.substring(0,4)
// console.log(newString);

const name = "     Pratham      "
const trimString = name.trim()

console.log(name.trimLeft());

const sliceString = str.slice(-7, 8)
console.log(str.padStart(15,"hello"));






