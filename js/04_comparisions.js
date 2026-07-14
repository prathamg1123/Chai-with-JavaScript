// console.log("2" >= 2);
// console.log("2" == true);

//data types

//Primitive = [string, number , boolean, bigInt, null, undefined, symbol]
const bigNumber = 45674567865456n
const bool = true
const id = undefined


//non Primitive(reference) = [array, objects, fuction ]
// array
const avengers = ["IronMan", "SpiderMan", "Hulk", "CaptainAmerica", "Ghamoora", "Thor"]

//object
// const owner = {
//     name: Pratham,
//     age: 19
// }

const myFunction = function(){
    console.log("Hello World");
    
}

//myFunction()



//  +++++++++++++++++++++++++++++++++++++++++++++
// stack(premitive) , heap (non-premitive)

let myName = "Pratham"
let anotherName = myName
anotherName = "Yash"

// console.log(myName);
// console.log(anotherName);

let user1 = {
    email: "pratham@google.com",
    age: 19 
}

let user2 = user1

user2.age = 20

console.log(user1.age);
console.log(user2.age);
