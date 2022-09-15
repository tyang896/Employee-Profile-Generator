const Manager = require("../lib/Manager");

describe("Manager Class", () => {
    it("creates a new instance of manager", () => {
        const manager = new Manager();
        expect(typeof(manager)).toBe("object");
    })
    it("includes a office number property inside of the manager class", () => {
        const manager = new Manager("Clark", 0, "cdavis@gmail.com", "123.456.7890")
        expect(manager.officeNum).toBe("123.456.7890");
    })
    describe("getOfficeNum", () => {
        it("Returns the manager's office number", () => {
            const manager = new Manager("Clark", 0, "cdavis@gmail.com", "123.456.7890")
            expect(manager.getOfficeNum()).toBe("123.456.7890");
        })
    })
})