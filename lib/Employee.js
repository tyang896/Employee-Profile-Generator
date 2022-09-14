class Employee {
    constructor(name, role, id, email){
        //Add code here that multiple emloyees share in common. Include writing code to a card here
        this.name = name;
        this.role = role
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getRole(){
        return this.role;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }

}

module.exports = Employee;