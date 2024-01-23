// How we can declare a obect using constructor

const friends = new Object()  // this is called singletpn object 
// console.log(friends)  //empty objr\ect

const friend = {}   // this is called non-singleton onbject
// console.log(friend)

// we can put object inside object as much as we want

const car = {
    name: "Tata",
    model: {
        engine: {
            strokemodel: "bfjv",
            engineoilModel: "bfbvjfb"
        }
    }
}

// console.log(car.model.engine.engineoilModel)

const obj1 =  {a:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3= {obj1, obj2}  // this will return the obect inside object 
// to solve the problem 

const obj3 = Object.assign(obj1,obj2)
// console.log(obj3)

// Anther tip:
//  console.log(Object.assign({}, obj1, obj2, obj3))   here all other obj will work as source 
// const obj3 = {...obj1, ...obj2} //same thing 


// objects inside array 
const user = [
    {
        id: 1,
        a: 2
    },
    {
        id: 3,
        a: 5
    }
]
// console.log(user[1].id)
// console.log(Object.keys(car))
// console.log(Object.values(car))

// to check that object have that property
console.log(car.hasOwnProperty('tireNUm'))


///// desstructuring of object

const courses  = {
    name: "js",
    student: "Ashish"
}
// destructuring
const {student: stuName} = courses
console.log(stuName)

// json
// in json both key and value are writtten in string

// {
//     "name": "Garg",
//     "course": "js"
// }

 // ALso we get json in array format
//  [
//     {},
//     {}
//  ]
