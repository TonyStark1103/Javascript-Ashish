// Array part 2

const courses = ["aws", "web", "mongo", "cloud"]
const prefrence = [1,5,6,8]

// courses.push(prefrence)
console.log(courses)

// if i have to call particluar name in array then have to use like this 
// console.log(courses[4][2])
// this will print the 6 


// const mixed = courses.concat(prefrence)
// console.log(mixed)

// spreading 
const allelem = [...courses, ...prefrence]
console.log(allelem)

// for serie of multiple array

const inifite = [1,2,3,6,[8,93,2,[5,5,6,],[5]]]
console.log(inifite)
const singlearray = inifite.flat(Infinity) // this will flat all levels of array
console.log(singlearray)



// At professonals level we have to convert things into array foe looping
// use capital a for Array
console.log(Array.isArray("Ashish"))
console.log(Array.from("AshishGarg"))

// for objects it wiil print empty arrya because we have to tell for which we want to create the array like it is key or value
console.log(Array.from({id: 1})) 

// Interesting
// to convert same kind of value to into a array we use method "of"
let num1= 1
let num2= 2 
let num3= 3
console.log(Array.of(num1, num2, num3))
