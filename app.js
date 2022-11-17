const inquirer = require ('inquirer');
const Manager = require ('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require ('./lib/Intern');

const createSite = require ('./src/create-site.js'); 
const fs = require("fs");
const path = require ("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Must enter");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your Employee ID',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Must enter')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Must enter')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message:'Enter your office number',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Must enter')
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type:'list',
            name:'menu',
            message:'Please select which option you would like to continue with:',
            choices: ['add an engineer', 'add an intern', 'finish building my team']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "add an engineer":
                    promptEngineer();
                    break;
                case "add an intern":
                    promptIntern();
                    break;
                default:
                    buildTeam();
            }
        });
};

const promptEngineer = () => {
    console.log(`
    Add an Engineer
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Engineer, what is your name?',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('Must enter');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Engineer, enter your Employee ID',
            validate: employeeId => { 
                if (employeeId) {
                    return true;
                } else {
                    console.log('Must enter')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Engineer, enter your email address',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Must enter')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message:'Engineer, enter your Github username',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log('Must enter)')
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.github);
        teamMembers.push(engineer);
        promptMenu();
    })
};

const promptIntern = () => {
    console.log(`
    ===============
    Add a New Intern
    ===============
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Intern, what is your name?',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('Please enter your name (Required)');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Intern, enter your Employee ID',
            validate: employeeId => { 
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter your Employee ID (Required)')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Intern, enter your email address',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter your email address (Required)')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message:'Intern, enter the school you are attending',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('Please enter the name of the school you are attending (Required)')
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
        teamMembers.push(intern);
        promptMenu();
    })
};

const buildTeam = () => {
    console.log(`
    Done building the team
    `);

    if(!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, createSite(teamMembers), "utf-8");
}

promptManager();