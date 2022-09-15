const Engineer = require("../lib/Engineer");

describe("Engineer Class", () => {
    it("creates a new instance of engineer", () => {//checks if a new Engineer object is created
        const engineer = new Engineer();
        expect(typeof(engineer)).toBe("object");
    })
    it("includes a gitHub username property inside of the engineer class", () => {//This tests if the engineer object contains a username
        const username = "ijones";//Change the username here to test
        const engineer = new Engineer("Irwin", 1, "ijones@gmail.com", username);
        expect(engineer.username).toBe(username);
    })
    describe("getUserName", () => {//This checks if the function correctly returns the employee's username
        it("Returns the employee's GitHub username", () => {
            const username = "ijones";//change this to test
            const engineer = new Engineer("Irwin", 1, "ijones@gmail.com", username);
            expect(engineer.getUserName()).toBe(username);
        })
    })
})