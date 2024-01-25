// map filter and reduce 

// does foreach loop retunr anthing 
// let see
const num = [1,2,3,4,5]
const result = num.forEach( (item)=>{
    // console.log(item)
})
// console.log(result)

// filter
const mynum = [1,2,3,4,5,6,7,8,9,10]
const newnums = mynum.filter( (num) =>{
    return num > 5
})
// console.log(newnums)

// another example of filter using
const mybooks = [
    {
      "name": "To Kill a Mockingbird",
      "genre": "Fiction",
      "publication_year": 1960
    },
    {
      "name": "1984",
      "genre": "Dystopian",
      "publication_year": 1949
    },
    {
      "name": "Pride",
      "genre": "Romance",
      "publication_year": 1813
    },
    {
      "name": "The Great Gatsby",
      "genre": "Fiction",
      "publication_year": 1925
    },
    {
      "name": "The Catcher in the Rye",
      "genre": "Coming-of-age",
      "publication_year": 1951
    },
    {
      "name": "Harry Potter and the Philosopher's Stone",
      "genre": "Fantasy",
      "publication_year": 1997
    },
    {
      "name": "To the Lighthouse",
      "genre": "Modernist",
      "publication_year": 1927
    }
    
]
const usedbooks = mybooks.filter( (bk) => bk.genre === "Fiction")
// console.log(usedbooks)

// map is a callback function

const add= mynum.map( (item) => item+10 )
// console.log(add)

const multiply= mynum.map( (item) => item*10 ).map( (num) => num+100).filter((num)=> num < 150)
// console.log(multiply)


const fewnum = [1,2,3]
const total = fewnum.reduce( (acc, cuuval) => {
    console.log(`acc: ${acc} and currentvalue: ${cuuval}`)
    return acc+cuuval
}, 0)
console.log(total)