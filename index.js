const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//inquirer-loop source: https://www.npmjs.com/package/inquirer-loop
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

//Takes the answers from the user's responses to the prompts and generates an index.html page
const writeFile = (answers) => {
    const manager = new Manager(answers.manager, answers.managerId, answers.managerEmail, answers.managerPhone);
    const engineers = [];
    const interns = [];
    let engineerCards = "";
    let internCards = "";
    //For each new employee added, they are added to the engineers or interns list
    answers.teamMember.forEach(employee => {
        if (employee.teamMemberType === "Engineer") {
            const engineer = new Engineer(employee.engineerName, employee.engineerId, employee.engineerEmail, employee.engineerGitHub);
            engineers.push(engineer);
        } else if (employee.teamMemberType === "Intern") {
            const intern = new Intern(employee.internName, employee.internId, employee.internEmail, employee.internSchool);
            interns.push(intern);
        }
    })
    //Create a card for each new engineer added
    if (engineers.length !== 0) {
        engineers.forEach(engineer => {
            let card = `
                    <div class="card m-3" style="width: 18rem;">
                        <div class="card-body">
                            <div class="card-header bg-primary text-light">
                                <h5 class="card-title">${engineer.getName()}</h5>
                                <h6 class="card-subtitle mb-2">${engineer.getRole()}</h6>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${engineer.getId()}</li>
                                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}" class="card-link">${engineer.getEmail()}</a></li>
                                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getUserName()}" target="_blank">${engineer.getUserName()}</a></li>
                            </ul>
                        </div>
                    </div>`
            engineerCards += card;
        })
    }
    //Create a card for each new intern added
    if (interns.length !== 0) {
        interns.forEach(intern => {
            let card = `
                    <div class="card m-3" style="width: 18rem;">
                        <div class="card-body">
                            <div class="card-header bg-primary text-light">
                                <h5 class="card-title">${intern.getName()}</h5>
                                <h6 class="card-subtitle mb-2">${intern.getRole()}</h6>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${intern.getId()}</li>
                                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}" class="card-link">${intern.getEmail()}</a></li>
                                <li class="list-group-item">School: ${intern.getSchool()}</li>
                            </ul>
                        </div>
                    </div>`
            internCards += card;
        })
    }
    //Creates an index.html file inside the dist folder
    fs.writeFile("./dist/index.html", `<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
            crossorigin="anonymous"></script>
    </head>

    <body>
        <header class="bg-danger text-light text-center p-4 m-4">My Team</header>
        <main>
            <div class="container d-flex justify-content-center">
                <div class="row">
                <div class="card m-3" style="width: 18rem;">
                        <div class="card-body">
                            <div class="card-header bg-primary text-light">
                                <h5 class="card-title">${manager.getName()}</h5>
                                <h6 class="card-subtitle mb-2">${manager.getRole()}</h6>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${manager.getId()}</li>
                                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}" class="card-link">${manager.getEmail()}</a></li>
                                <li class="list-group-item">Office number: ${manager.getOfficeNum()}</li>
                            </ul>
                        </div>
                    </div>
                ${engineerCards}
                ${internCards}
        </div>
    </div>
</main>
</body>
</html>
                                    `, (err) => err ? console.error(err) : console.log("index.html generated successfully"));
}

//This function runs when the user runs "node index.js" in the terminal. 
const init = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "manager",
            message: "What is the team manager's name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the team manager's id?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the team manager's email?"
        },
        {
            type: "input",
            name: "managerPhone",
            message: "What is the team manager's office number?"
        },
        //code based on Inquirer Loop: https://www.npmjs.com/package/inquirer-loop
        {
            type: "loop",
            name: "teamMember",
            message: "Add a new team member?",
            questions: [
                {
                    type: "list",
                    name: "teamMemberType",
                    message: "Which type of team member would you like to add?",
                    choices: ["Engineer", "Intern"]

                },
                {
                    type: "input",
                    name: "engineerName",
                    message: "What is your engineer's name?",
                    when(answers) {
                        return answers.teamMemberType === "Engineer";
                    }

                },
                {
                    type: "input",
                    name: "engineerId",
                    message: "What is your engineer's id?",
                    when(answers) {
                        return answers.teamMemberType === "Engineer";
                    }
                },
                {
                    type: "input",
                    name: "engineerEmail",
                    message: "What is your engineer's email?",
                    when(answers) {
                        return answers.teamMemberType === "Engineer";
                    }
                },
                {
                    type: "input",
                    name: "engineerGitHub",
                    message: "What is your engineer's GitHub username?",
                    when(answers) {
                        return answers.teamMemberType === "Engineer";
                    }
                },
                {
                    type: "input",
                    name: "internName",
                    message: "What is your intern's name?",
                    when(answers) {
                        return answers.teamMemberType === "Intern";
                    }
                },
                {
                    type: "input",
                    name: "internId",
                    message: "What is your intern's id?",
                    when(answers) {
                        return answers.teamMemberType === "Intern";
                    }
                },
                {
                    type: "input",
                    name: "internEmail",
                    message: "What is your intern's email?",
                    when(answers) {
                        return answers.teamMemberType === "Intern";
                    }
                },
                {
                    type: "input",
                    name: "internSchool",
                    message: "What is your intern's school?",
                    when(answers) {
                        return answers.teamMemberType === "Intern";
                    }
                },
            ]
        }
    ]).then((data) => {
        writeFile(data);
    })
}

init();