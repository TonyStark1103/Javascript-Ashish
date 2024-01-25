// falsy value 

/*
false, 0 , -0, bigint 0n, null, undifined, NaN

*/

// Truthy value
// "0", 'false', " ", [], {}, function(){}


// to check that a array is empty or not
// if (username.length === 0){
//     console.log("array is empty")
// }


// to check that a array is empty or not
// if (Object.keys(objectname).length === 0){
//     console.log("array is empty")
// }


// Nullish Coalescing Operator (??): null, undefined
let val;
val = 5 ?? 10
console.log(val)
val = null ?? 10
console.log(val)   // avoid null and undefined values to prevent failure of the code
val = null ?? null ?? 56

// turnery operator
// condition ? true : false
