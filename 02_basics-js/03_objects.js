// singleton 
// obeject.create


// another type
// object literals

// important ⚠
// all the keys in object are strins but we don't need to use the comma's
// but for the value we have to write in appropriate type

const jsuser = {
     "full name": "Ashish",   // always remeber when the key has space put it in string format it is same like panda lib 
     age: 20,
     college: "Sheridan",
     isCourseDoing: true,
     readigday: ["Moday", "tuesday"]

}
// to excess the objects
console.log(jsuser.age)

// Anpther way to excess the objects for the keys that have sapce in their name and cannot not be used as . method 
// it' called square notation 
console.log(jsuser["full name"])

// Using symbol type in onjects
const symbol1 =  Symbol("new")
console.log(typeof(symbol1))

// now using this in object
// to use symbol as symnol in object we use square brackets


const symobj = {
    [symbol1]: "new",
    id: 2
}
// also while printing have to use the square brcket
// value type cannot be symbol but key type will be symbol
console.log(symobj)


// to chnage  any value just take ref
jsuser.age = 21
// for freezing the object so cannot be chnaged
// Object.freeze(jsuser)

jsuser.greeting = function(){
    console.log("Good Morning Guys")
}
jsuser.greetingtwo = function(){
    console.log(`Good Morning ${this["full name"]}  `)
}
// console.log(jsuser.greeting)
console.log(jsuser.greeting())
console.log(jsuser.greetingtwo())

