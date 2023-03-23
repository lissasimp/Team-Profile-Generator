const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const teamMembers= []

//https://stackoverflow.com/questions/35048686/whats-the-difference-between-path-resolve-and-path-join
const OUTPUT_DIR = path.resolve(__dirname, "output"); //this will output 'output'
const outputPath = path.join(OUTPUT_DIR, "team.html"); //this will output the folder and the file

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.
//manager questions (written by me) - pseudocode (function) from Office hours tutor
//Gathers information about the manager
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
      
      // const myJSON = JSON.stringify(response)
      teamMembers.push(new Manager(response.managerName, response.managerID, response.managerEmail, response.managerOfficeNumber)) //support by ABC
      // console.log(response)
      promptForNextEmployee();
      // return new Manager
      
    });
    
};

 
const promptForNextEmployee = () => { //pseudocode (function) from Office hours tutor
  inquirer
    .prompt([
      //next employee questions (written by me)
      //asks user is they want to add another employee or create the new team
      {
        type: "list",
        message: "Do you want to add another employee or create team?",
        choices: ["Engineer", "Intern", "Create Team"],
        name: "addEmployee",
      },
    ])
    //response (written by me)
    .then((response) => {
      if (response.addEmployee === "Engineer") {
        promptForEngineer();
      } else if (response.addEmployee === "Intern") {
        promptForIntern();
      } else if (response.addEmployee === "Create Team") {
        buildPage();
      }
    });
};

//gathers user information about engineer
const promptForEngineer = () => { //prompt function - pseudocode from office hours
  inquirer
    .prompt([
      //questions written by me
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
      const myJSON = JSON.stringify(response)
      teamMembers.push(new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.engineerGithub))
      // console.log(response)
      promptForNextEmployee();
    });
};

//pseudocode from Office hours tutor for function
const promptForIntern = () => {
  inquirer
    .prompt([
      //gather information about intern
      //intern questions - written by me 
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
      teamMembers.push(new Intern(response.internName, response.internID, response.internEmail, response.internSchool))
      promptForNextEmployee();
    });
};
promptForManager()

const buildPage = () => {
    // //https://www.geeksforgeeks.org/node-js-fs-writefile-method/
    // //https://stackoverflow.com/questions/20964372/how-to-write-file-to-parent-folder-with-fs-of-nodejs
   
  
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    } else {
  
      fs.writeFileSync(outputPath, render(teamMembers), "UTF-8");
      console.log("File created in the output folder");
    }
    };

   


