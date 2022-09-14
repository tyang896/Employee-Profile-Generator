const Employee = require("../lib/Employee");

describe("Employee class", () => {
    describe("getName", () => {
        it("Returns the employee's name", () => {
            const employee = new Employee("John");
            expect(employee.getName()).toBe("John");
        })
    })
    describe("getRole", () => {
        it("Returns the employee's role", () => {
            const employee = new Employee("John", "Manager");
            expect(employee.getRole()).toBe("Manager");
        })
    })
    describe("getId", () => {
        it("Returns the employee's ID", () => {
            const employee = new Employee("John", "Manager", 1);
            expect(employee.getId()).toEqual(1);
        })
    })
    describe("getEmail", () => {
        it("Returns the employee's email", () => {
            const employee = new Employee("John", "Manager", 1, "jdoe@gmail.com");
            expect(employee.getEmail()).toBe("jdoe@gmail.com");
        })
    })
})