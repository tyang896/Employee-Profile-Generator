const Intern = require("../lib/Intern");

describe("Intern Class", () => {
    it("creates a new instance of intern", () => {//Checks if a new Intern object is created
        const intern = new Intern();
        expect(typeof(intern)).toBe("object");
    })
    it("includes a school property inside of the intern class", () => {//checks if intern contains a school object
        const school = "Universtiy of California";//Change this to test
        const intern = new Intern("Adams", 3, "abaker@gmail.com", school)
        expect(intern.school).toBe(school);
    })
    describe("getSchool", () => {//checks if the function correctly returns the employee's school
        it("Returns the intern's school name", () => {
            const school = "Universtiy of Washington";//Change this to test
            const intern = new Intern("Adams", 3, "abaker@gmail.com", school)
            expect(intern.getSchool()).toBe(school);
        })
    })
})