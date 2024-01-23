//array
const myarr= [1,2,3,5,8,7,9]

// console.log(myarr)

// methods
myarr.push(6)
myarr.pop()
myarr.unshift(50)   // add item in the first place of array
myarr.shift()  // remove the first item no need any value
// console.log(myarr.includes(3))
// console.log(myarr.indexOf(50))
const newarr = myarr.join() //  this will convert the array into string format it will remove the outer brackets
// console.log(myarr)

// slice and splice

// first slice will just take a copy. nothing will change into original one 

// splice
// it has two things first it will change into original array also it includes the range 
// example 
console.log(myarr)
const arr1 = myarr.splice(0,4)
console.log(arr1)
console.log(myarr)


