// primitive 

//  7 types: String , number, boolean, null ,undefined , symbol, bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let useremail;
const id  = Symbol('123')
const anotherID = Symbol('123')
//if we compare id and anotherId with equality operator 
// It will print false because of Symbol Keyword
// It look like both id and anotherID are same but it is not beacuse of symbol
//run below line for varification 
// console.log(id===anotherID)



const bignumber = 645345451545457858n  // n prepressenting here that it is a bigint datatype



//refrence (non primitve)

// Array, Objects, Funcitons

const heros = ["ironman", "Spiderman"]
let myobj = {
    name: "Ashish",
    age: 45,
}

const myfucntion  =function(){
    console.log("hello ashishs")

}
console.log(typeof myfucntion)

