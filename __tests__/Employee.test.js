const Employee = require("../lib/Employee");

describe("Employee class", () => {
    it("should create a new employee instance", () => {//checks if a new Employee object is created
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    })
    describe("getName", () => {//Checks if getName function returns the name
        it("Returns the employee's name", () => {
            const name = "John";
            const employee = new Employee(name);
            expect(employee.getName()).toBe(name);
        })
    })
    describe("getRole", () => {
        it("Returns the employee's role", () => {
            const role = "Manager" //You can replace "Manager" with "Engineer" or "Intern" here to test different roles
            const employee = new Employee("John", role);
            expect(employee.getRole()).toBe(role);
        })
    })
    describe("getId", () => {//Checks if the getId function returns the employee's id
        it("Returns the employee's ID", () => {
            const id = 1;//change this number to test
            const employee = new Employee("John", "Manager", id);
            expect(employee.getId()).toEqual(id);
        })
    })
    describe("getEmail", () => {//Checks if the getEmail function returns the employee's email
        it("Returns the employee's email", () => {
            const email = "jdoe@gmail.com";//change this to test
            const employee = new Employee("John", "Manager", 1, email);
            expect(employee.getEmail()).toBe(email);
        })
    })
})