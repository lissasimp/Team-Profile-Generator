const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const testArray = []

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.
//manager questions - pseudocode from Office hours tutor
const promptForManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Manager's Name?",
        name: "managerName",
        //https://pakstech.com/blog/inquirer-js/?utm_content=cmp-true
        validate(answer) {
          if (!answer) {
            return "Please fill in this information";
          }
          return true;
        },
      },
      {
        type: "input",
        message: "Manager's Id?",
        name: "managerID",
        validate(answer) {
          if (!answer) {
            return "Please fill in this information";
          }
          return true;
        },
      },
      {
        type: "input",
        message: "Manager's Email?",
        name: "managerEmail",
        // https://stackoverflow.com/questions/65189877/how-can-i-validate-that-a-user-input-their-email-when-using-inquirer-npm
        validate: function (email) {
          // Regex mail check (return true if valid mail)
          return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
            email
          );
        },
      },
      {
        type: "input",
        message: "Manager's Office Number?",
        name: "managerOfficeNumber",
        validate(answer) {
          if (!answer) {
            return "Please fill in this information";
          }
          return true;
        },
      },
    ])
    .then((response) => {
      
      const myJSON = JSON.stringify(response)
      testArray.push(new Manager) //not working
      // console.log(response)
      promptForNextEmployee();
      // return new Manager
      
    });
    
};

const promptForNextEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Do you want to add another employee or create team?",
        choices: ["Engineer", "Intern", "Manager", "Create Team"],
        name: "addEmployee",
      },
    ])
    .then((response) => {
      if (response.addEmployee === "Engineer") {
        promptForEngineer();
      } else if (response.addEmployee === "Intern") {
        promptForIntern();
      } else if (response.addEmployee === "Manager") {
        promptForManager();
      } else if (response.addEmployee === "Create Team") {
        buildPage();
      }
    });
};

const promptForEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Engineer's Name?",
        name: "engineerName",
        validate(answer) {
          if (!answer) {
            return "Please fill in this information";
          }
          return true;
        },
      },
      {
        type: "input",
        message: "Engineer's Id?",
        name: "engineerID",
        validate(answer) {
          if (!answer) {
            return "Please fill in this information";
          }
          return true;
        },
      },
      {
        type: "input",
        message: "Engineer's Email?",
        name: "engineerEmail",
        validate: function (email) {
          // Regex mail check (return true if valid mail)
          return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
            email
          );
        },
      },
      {
        type: "input",
        message: "Engineer's Github?",
        name: "engineerGithub",
        validate(answer) {
          if (!answer) {
            return "Please fill in this information";
          }
          return true;
        },
      },
    ])
    .then((response) => {
      // add new engineer to employees array  - pseudocode from Office hours tutor
      // promptForNextEmployee  - pseudocode from Office hours tutor
      const myJSON = JSON.stringify(response)
      testArray.push(new Engineer)
      // console.log(response)
      promptForNextEmployee();
    });
};

const promptForIntern = () => {
  inquirer
    .prompt([
      //intern questions  - pseudocode from Office hours tutor
      {
        type: "input",
        message: "Intern's Name?",
        name: "internName",
        validate(answer) {
          if (!answer) {
            return "Please fill in this information";
          }
          return true;
        },
      },
      {
        type: "input",
        message: "Intern's Id?",
        name: "internID",
        validate(answer) {
          if (!answer) {
            return "Please fill in this information";
          }
          return true;
        },
      },
      {
        type: "input",
        message: "Intern's Email?",
        name: "internEmail",
        validate: function (email) {
          // Regex mail check (return true if valid mail)
          return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
            email
          );
        },
      },
      {
        type: "input",
        message: "Intern's School?",
        name: "internSchool",
        validate(answer) {
          if (!answer) {
            return "Please fill in this information";
          }
          return true;
        },
      },
    ])
    .then((response) => {
      // add new intern to employees array  - pseudocode from Office hours tutor
      // promptForNextEmployee  - pseudocode from Office hours tutor
      testArray.push(new Intern)
      promptForNextEmployee();
    });
};
promptForManager()

// // const buildPage = () => {
// // // render(myArrayOfTeamMembers)  - pseudocode from Office hours tutor
// // }
const buildPage = () => {
    
    
  
 console.log(testArray)
//  render(testArray)
}
// buildPage();
