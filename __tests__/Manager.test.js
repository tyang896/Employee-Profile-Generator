const Manager = require("../lib/Manager");

describe("Manager Class", () => {
    describe("getOfficeNum", () => {
        it("Returns the manager's office number", () => {
            const manager = new Manager("Clark", 0, "cdavis@gmail.com", "123.456.7890")
            expect(manager.getOfficeNum()).toBe("123.456.7890");
        })
    })
})