const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, username){
        super(name, "Engineer", id, email );
        this.username = username;
    }

    getUserName(){
        return this.username;
    }
}

module.exports = Engineer;