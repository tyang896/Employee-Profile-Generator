const inquirer = require("inquirer");
const fs = require("fs");

//inquirer-loop source: https://www.npmjs.com/package/inquirer-loop
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

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
                    when(answers){
                        return answers.teamMemberType === "Engineer";
                    } 
                     
                },
                {
                    type: "input",
                    name: "engineerId",
                    message: "What is your engineer's id?",
                    when(answers){
                        return answers.teamMemberType === "Engineer";
                    }
                },
                {
                    type: "input",
                    name: "engineerEmail",
                    message: "What is your engineer's email?",
                    when(answers){
                        return answers.teamMemberType === "Engineer";
                    }
                },
                {
                    type: "input",
                    name: "engineerGitHub",
                    message: "What is your engineer's GitHub username?",
                    when(answers){
                        return answers.teamMemberType === "Engineer";
                    }
                },
                {   
                    type: "input",
                    name: "internName",
                    message: "What is your intern's name?",
                    when(answers){
                        return answers.teamMemberType === "Intern";
                    } 
                },
                {
                    type: "input",
                    name: "internId",
                    message: "What is your intern's id?",
                    when(answers){
                        return answers.teamMemberType === "Intern";
                    }
                },
                {
                    type: "input",
                    name: "internEmail",
                    message: "What is your intern's email?",
                    when(answers){
                        return answers.teamMemberType === "Intern";
                    }
                },
                {
                    type: "input",
                    name: "internSchool",
                    message: "What is your intern's school?",
                    when(answers){
                        return answers.teamMemberType === "Intern";
                    }
                },
            ]
        }       
    ]).then((answers) => {
        console.log(answers.teamMember);

    })
}

init();