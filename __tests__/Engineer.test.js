const Engineer = require("../lib/Engineer");

describe("Engineer Class", () => {
    describe("getUserName", () => {
        it("Returns the employee's GitHub username", () => {
            const engineer = new Engineer("Irwin", 1, "ijones@gmail.com", "ijones")
            expect(engineer.getUserName()).toBe("ijones");
        })
    })
})