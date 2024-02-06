// //ES6

// class user {
//     constructor(username, email, password){
//         this.username =username;
//         this.email =email
//         this.password =password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
// }
// const user1 = new user("Ashish", "jd@gmail.com", "123")
// console.log(user1.encryptPassword());


//behind the scene

function user(username, email, password){
    this.username =username;
    this.email =email
    this.password =password
}

user.prototype.encryptPassword =function(){
    return `${this.password}abc`   
}
user.prototype.changeUsername = function(){
    console.log(`${this.username.toUpperCase()}`)
}

const user2 = new user("jd", "kj@gmail.com", "456")
console.log(user2.encryptPassword())
console.log(user2.changeUsername())