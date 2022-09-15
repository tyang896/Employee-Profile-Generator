const Manager = require("../lib/Manager");

describe("Manager Class", () => {
    it("creates a new instance of manager", () => {//checks if a new Manager object was created
        const manager = new Manager();
        expect(typeof(manager)).toBe("object");
    })
    it("includes a office number property inside of the manager class", () => {//tests if the manager object contains the officeNum property
        const officeNumber = "123.456.7890";//Change this string to test
        const manager = new Manager("Clark", 0, "cdavis@gmail.com", officeNumber)
        expect(manager.officeNum).toBe(officeNumber);
    })
    describe("getOfficeNum", () => {//Checks if the getOfficNum function will return the office number
        it("Returns the manager's office number", () => {
            const officeNumber = "123.456.7890";//Change this string to test
            const manager = new Manager("Clark", 0, "cdavis@gmail.com", officeNumber)
            expect(manager.getOfficeNum()).toBe(officeNumber);
        })
    })
})