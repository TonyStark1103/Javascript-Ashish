// stack and heap memory

// in stack memory you get the vopy of the vsrisble 

//example of stack

let username = "Ahsihjifj"
let anotername = username
 
console.log(username)
console.log(anotername)

// but if you chanhe the value of thr anothernamae it will change becasue it's taking the copy of the vsriable

let userOne = {
    name: "Ashish",
    email: "Ashish484@gmail.com"
}

// now its save in heap memory and it will take reference 
let usertwo = userOne
console.log(userOne.email)
console.log(usertwo.email)
// but if change the value beacuse both taking reference from same placr

usertwo.email = "hdusubuf@gmail.com"
console.log(userOne.email)
console.log(usertwo.email)
