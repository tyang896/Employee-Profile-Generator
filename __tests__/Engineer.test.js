const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer Class", () => {
    it("creates a new instance of engineer", () => {
        const engineer = new Engineer();
        expect(typeof(engineer)).toBe("object");
    })
    it("includes a gitHub username property inside of the engineer class", () => {
        const engineer = new Engineer("Irwin", 1, "ijones@gmail.com", "ijones");
        expect(engineer.username).toBe("ijones")
    })
    describe("getUserName", () => {
        it("Returns the employee's GitHub username", () => {
            const engineer = new Engineer("Irwin", 1, "ijones@gmail.com", "ijones")
            expect(engineer.getUserName()).toBe("ijones");
        })
    })
})