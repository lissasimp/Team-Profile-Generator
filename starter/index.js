const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee")
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
//manager questions - pseudocode from Office hours tutor

const = employess
inquirer
.prompt([
    {
        type: "input",
        message: "What is the manager's Name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is the manager's Id?",
        name: "ID",
    },
    {
        type: "input",
        message: "What is the manager's email?",
        name: "email",
    },
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNumber",
    },

    ]).then(response => {
    // populate manager info  - pseudocode from Office hours tutor
    // promptForNexEmployee ()  - pseudocode from Office hours tutor
})

const promptForNextEmployee = () => {
    inquirer.prompt([{
        // choice of 3  - pseudocode from Office hours tutor
    }]).then(response => {
        // if engineer  - pseudocode from Office hours tutor
        //    promptForEngineer
        // else if intern
        //    promptForIntern
        // else
        //    use the functionality from page-template to generate the team  - pseudocode from Office hours tutor
    })
}

const promptForEngineer = () => {
    inquirer.prompt([{
        //engineer questions  - pseudocode from Office hours tutor
    }]).then(response => {
        // add new engineer to employees array  - pseudocode from Office hours tutor
        // promptForNextEmployee  - pseudocode from Office hours tutor
    })
}

const promptForIntern = () => {
    inquirer.prompt([{
        //intern questions  - pseudocode from Office hours tutor
    }]).then(response => {
        // add new intern to employees array  - pseudocode from Office hours tutor
        // promptForNextEmployee  - pseudocode from Office hours tutor
    })
}

const buildPage = () => {
// render(myArrayOfTeamMembers)  - pseudocode from Office hours tutor
}