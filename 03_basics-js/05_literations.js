// for loop types

const arr= [1,2,23]
// for (const num of arr) {
//     console.log(num)
// }

// for //maps

const map = new Map()
map.set('In', "India")
map.set('Np', "nepal")
map.set('Rj', "Rajasthan")

// console.log(map)

// for (const [key, value] of map) {
//     console.log(key, "=>", value)
// }


// for object we use the for in loop

const games= {
    g1: "gta",
    g2: "fly"

} 

// for (const key in games) {
//     console.log(key)
//     console.log(`${key} is ${games[key]}`)
// }

// foreach loop or high order for loop
// arr.forEach( (item) => {
//     console.log(item)
// } )

// we have also other things to use with the item such as
arr.forEach( (item, index, arr) => {
    console.log(item, index, arr)
} )


// to do literation on this kind of object inside Array

const coding = [
    {
        langname: "js",
        location: "in"
    },
    {
        langname: "python",
        location: "in"
    },
    {
        langname: "java",
        location: "in"
    }
]
coding.forEach( (item)=>{   // here now every obect name is item
    console.log(item.langname)
})
