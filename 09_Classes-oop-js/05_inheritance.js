class user {
    constructor(username){
        this.username =username
    }
    
    logMe(){
        console.log(`Username is ${this.username}`)

    }
}
class Teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email =email
        this.password =password
    }

    addcourse(){
        console.log(`A new course was added by ${this.username}`)
    }
    // static world prevent to inherit particular funcion in other class
}

const chai = new Teacher("kj", "fjb@gmail.com", "789")
const masalachai = new user("OP")
chai.addcourse()
masalachai.logMe()