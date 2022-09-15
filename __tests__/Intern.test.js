const Intern = require("../lib/Intern");

describe("Intern Class", () => {
    it("creates a new instance of intern", () => {
        const intern = new Intern();
        expect(typeof(intern)).toBe("object");
    })
    it("includes a school property inside of the intern class", () => {
        const intern = new Intern("Adams", 3, "abaker@gmail.com", "University")
        expect(intern.school).toBe("University");
    })
    describe("getSchool", () => {
        it("Returns the intern's school name", () => {
            const intern = new Intern("Adams", 3, "abaker@gmail.com", "University")
            expect(intern.getSchool()).toBe("University");
        })
    })
})