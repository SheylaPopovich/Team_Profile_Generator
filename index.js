const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");



const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");



const DIST_DIR = path.resolve(__dirname, 'dist');
const outputPath = path.join(DIST_DIR, 'index.html');
const render = require('./src/page-template.js');

const teamArr = [];
const idArr = [];

function initIndex(){
    
function addManager() {
    console.log("Start building your team profile");
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the team manager's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the team manager's name.";
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the team manager's ID number?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a valid ID number.";
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the team manager's email address?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a valid email address.";
            }
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the team manager's office number?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a valid office number.";
            }
        },
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamArr.push(manager);
        idArr.push(answers.managerId);
        addTeam();
        }); 
    }


function addTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "What kind of team member would you like to add next?",
            choices: [
                "Engineer",
                "Intern",
                "End application"
            ]
        }
    ]).then(userChoice => {
        switch (userChoice.memberChoice) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                generateHTML()    ;
        }
    });
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the Engineer's name.";
            }
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's ID number?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a valid ID number.";
            }
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email address?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a valid email address.";
            }
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's GitHub username?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the engineer's GitHub username.";
            }
        },
    ]) .then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArr.push(engineer);
        idArr.push(answers.engineerId);
        addTeam();
    });
}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the intern's name.";
            }  
        },
        {
            type: "input",
            name: "internId",
            message: "What is the intern's ID number?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a valid ID number.";
            }
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email address?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a valid email address.";
            } 
        },
        {
            type: "input",
            name: "internSchool",
            message: "Where does the intern attend school?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a proper school name.";
            }
        },
    ]) .then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamArr.push(intern);
        idArr.push(answers.internId);
        addTeam();
    });
}

function generateHTML() {
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
    }
    console.log(`
    
    ===================================================
                   🎇✨Congrats!✨🎇
    ===================================================
    Your team profile has been successfully created! 
    ===================================================
    Please check out the 'index1.html' in dist folder
    ===================================================
    `);
    fs.writeFileSync(outputPath, render(teamArr), "utf-8");
}

addManager();
}



initIndex();