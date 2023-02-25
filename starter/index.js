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

inquirer
.prompt([
    {
        type: "input",
        message: "Manager's Name?",
        name: "managerName",
    },
    {
        type: "input",
        message: "Manager's Id?",
        name: "managerID",
    },
    {
        type: "input",
        message: "Manager's Email?",
        name: "managerEmail",
    },
    {
        type: "input",
        message: "Manager's Office Number?",
        name: "managerOfficeNumber",
    },

    ]).then(response => {
    // populate manager info  - pseudocode from Office hours tutor
    // promptForNexEmployee ()  - pseudocode from Office hours tutor
    promptForNextEmployee();
})

const promptForNextEmployee = () => {
    inquirer.prompt([
        // choice of 3  - pseudocode from Office hours tutor
        {
            type: "list",
            message: ["Engineer", "Manager", "Intern"],
            name: "employeeRole",
        },
]).then(response => {
        // if engineer  - pseudocode from Office hours tutor
        //    promptForEngineer
        // else if intern
        //    promptForIntern
        // else
        //    use the functionality from page-template to generate the team  - pseudocode from Office hours tutor
    })
}

const promptForEngineer = () => {
    inquirer.prompt([
        //engineer questions  - pseudocode from Office hours tutor
        {
            type: "input",
            message: "Engineer's Name?",
            name: "engineerName",
        },
        {
            type: "input",
            message: "Engineer's Id?",
            name: "engineerID",
        },
        {
            type: "input",
            message: "Engineer's Email?",
            name: "engineerEmail",
        },
        {
            type: "input",
            message: "Engineer's Github?",
            name: "engineerGithub",
        },
    
    ]).then(response => {
        // add new engineer to employees array  - pseudocode from Office hours tutor
        // promptForNextEmployee  - pseudocode from Office hours tutor
    })
};

const promptForIntern = () => {
    inquirer.prompt([
        //intern questions  - pseudocode from Office hours tutor
        {
            type: "input",
            message: "Intern's Name?",
            name: "internName",
        },
        {
            type: "input",
            message: "Intern's Id?",
            name: "internID",
        },
        {
            type: "input",
            message: "Intern's Email?",
            name: "internEmail",
        },
        {
            type: "input",
            message: "Intern's School?",
            name: "internSchool",
        },
    ]).then(response => {
        // add new intern to employees array  - pseudocode from Office hours tutor
        // promptForNextEmployee  - pseudocode from Office hours tutor
    })
}

const buildPage = () => {
// render(myArrayOfTeamMembers)  - pseudocode from Office hours tutor
}