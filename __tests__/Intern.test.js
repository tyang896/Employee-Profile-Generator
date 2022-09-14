const Intern = require("../lib/Intern");

describe("Intern Class", () => {
    describe("getSchool", () => {
        it("Returns the intern's school name", () => {
            const intern = new Intern("Adams", 3, "abaker@gmail.com", "University")
            expect(intern.getSchool()).toBe("University");
        })
    })
})