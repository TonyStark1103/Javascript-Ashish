function twosum(){
    const sum = 5+6
    // when function does not return anything it returns the undefined 
    return sum
}
let result = twosum()
console.log(result)
console.log(twosum())

function login(username){   // if we put false value in the argument it never will enter into the condition
    if(!username){    // argument mean here is when username not found and true print the console message
        console.log("Please enter a username")
        return
    }
    return `just logged in ${username}`
}
console.log(login())


// infuctio if argument is same type we and use rest operator for multiple values

function num(...num1){
    return num1 // using this we will get a array which we can use for loop and other things
}

//  we can also pass object as argument
const user = {
    name: "Ashish",
    age: 20
}
const pi = 3.14
function printinfo(anyObject){
    // const pi = 3.89
    console.log(pi)
    return `my name is ${anyObject.name} and age is ${anyObject.age}`
    
}
console.log(printinfo(user))
// also pass a array and work on that
