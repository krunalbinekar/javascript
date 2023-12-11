// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// javascript is dynamically typed

const score  = 1000
const scoreValue = 100.3

const loggedIn = false
const temp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 4565645646546545454444n


// Reference type (non primitive)

// Array, Objects, Functions

const heros = ['abc','xyz','pqr'];

let obj = {
    name : "jhhj",
    age : 22
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber)

// Stack (Primitive)(copy), Heap (Non-Primitive)(reference)

let names = "sdasad"

let anotherName = names
anotherName = 'code';

console.log(names);
console.log(anotherName)


let userOne = {
    email:"xyz@yopmail.com",
    upiId:2132313
}

let userTwo = userOne

userTwo.email = "abc@yopmail.com"

console.log(userOne);
console.log(userTwo)
