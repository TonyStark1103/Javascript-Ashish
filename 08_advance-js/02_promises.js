// // we use promises to fulfill a task 
// // for understanding checking that promise it fulfilled or how much time it taking to complete it
// //  or what's the error that you are getting and catching it
// please read it carefully to understand

// const promiseone = new Promise(function(resolve, reject){

//     // Do asunc task
//     // DB calls , cryptography, network
//     setTimeout(()=>{
//         console.log("Asyn 1 ")
//         resolve()  // here resolve keyword enssure that task is complete once is completed it will run the then message 
//     }, 2000)
    
// })
// promiseone.then(()=>{
//     console.log("Async 1 is comlete")
// })

// new Promise(function(resolve, reject){

//     setTimeout(()=>{
//         console.log("Asyn 2 ")
//         resolve({username: "Ashish", age: 20})   
//     }, 2000)
    
// }).then((data)=>{
//     console.log("Async 2 is comlete")
//     console.log(data)
// })

// const promisefour = new Promise(function(reject, resolve){
//     setTimeout(()=>{
//         let error = false  // here false is for condition if false the do else if it's not false then go for if condition
//         if(!error){
//             resolve({username: "Good", age: 15})
//         }
//         else{
//             reject("something went wrong")
//         }
//     }, 2000)
// })
// .then((data)=>{
//     console.log(data)
//     return data.username // to print the username we have to rechain again now this will pass the data into new then
// })
// .then((userinfo)=>{
//     console.log(userinfo)
// })
// .catch((error)=>{
//     console.log(error)    // for any error we use catch 
// })
// .finally(()=>{  // it will work both way
//     console.log("The promise is either resolved or rejected")
// })


// we ca use async on the place of then to handle the reponse 
const promisefive = new Promise(function(reject, resolve){
    setTimeout(()=>{
        let error = true  // here false is for condition, if false then do else,  if it's not false, then go for if condition
        if(!error){
            resolve({username: "Good", age: 15})
        }
        else{
            reject("something went wrong")
        }
    }, 2000)
})
//change the error from false to true for cheking the async 

async function consumePromisefive(){
       
    // to solve the catch and finally we will use the try catch method
    try{
        const response = await promisefive
        console.log(response)   
    }catch(error){
        console.log(error)
    }
    // important thing call the function
}

// consumePromisefive()

// result if error it will print it if not data will print


async function getalluser(){
    try{
    const response = await fetch("https://api.github.com/users/hiteshchoudhary")
    const data =  await response.json()
    console.log(data)  
     // if we run this like this it will print promise pending because json also take time to convert 
     // we have to put a  await keyword before converting data

    }
    catch(error){
console.log("error")
    }
}
getalluser()

//same thin you can use with the then method

fetch("https://api.github.com/users/hiteshchoudhary")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(`${error} data is not found`)
})