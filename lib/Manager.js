const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name,id, email, officeNum){
        super(name, "Manager", id, email );
        this.officeNum = officeNum;
    }

    getOfficeNum(){
        return this.officeNum;
    }
}

module.exports = Manager;