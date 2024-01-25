const usr = {
    username: "Ashish",
    price: 250,

    welcomeMessage: function(){
        console.log(`this is ${this.username} and price for the book is ${this.price}`)
    }
   
}
usr.welcomeMessage()
usr.username= "sam"
usr.welcomeMessage()

// we can write arrow function in two types
// const add = () => {
//     return 2+6
// }

const add = () =>  2+6   // this is a short form to write the arrow function 
// to return any object we have to use the bracket
const bookname = () =>  ({book: "harry potter"})


