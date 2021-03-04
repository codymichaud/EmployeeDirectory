const inquirer = require('inquirer');
const fs = require('fs');
const { generate } = require('rxjs');
const Employee = require('./library/employHub');
const Manager = require('./library/managerprof');
const Engineer = require('./library/engineerprof');
let employDirect = [];

function managerQuest() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managName',
            message: 'What is your managers name?'
        },
        {
            type: 'input',
            name: 'managId',
            message: 'Please enter your employee id number.'
        },
        {
            type: 'input',
            name: 'managEmail',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'manageNum',
            message: 'What is your office number?'
        },
    ]).then(response => {
        const managName = response.managName;
        const managId = response.managId;
        const managEmail = response.managEmail;
        const manageNum = response.manageNum;
        const manager = new Manager(managName, managId, managEmail, manageNum);
        employDirect.push(manager)
        console.log(manager);
        engineerQuest();
    })
};

function engineerQuest() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engName',
            message: 'Enter the name of the first engineer.'
        },
        {
            type: 'input',
            name: 'engId',
            message: 'What is the id number of the employee?'
        },
        {
            type: 'input',
            name: 'engEmail',
            message: 'Please enter the team members email.'
        },
        {
            type: 'input',
            name: 'engGithub',
            message: 'Please enter the team members Github username.'
        }
    ]).then(response => {
        const engName = response.engName;
        const engId = response.engId;
        const engEmail = response.engEmail;
        const engGithub = response.engGithub;
        const engineer = new Engineer(engName, engId, engEmail, engGithub);
        employDirect.push(engineer);
        console.log(engineer)
    })
};

function internQuest() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'intName',
            message: 'What is the interns name?'
        },
        {
            type: 'input',
            name: 'intId',
            message: 'What is the ID number for this intern?'
        },
        {
            type: 'input',
            name: 'intEmail',
            message: 'What is the interns email?'
        },
        {
            type: 'input',
            name: 'intEdu',
            message: 'Where does the intern attend school?'
        }
    ]).then(response => {
        const intName = response.intName;
        const intId = response.intId;
        const intEmail = response.intEmail;
        const intEdu = response.intEdu;
        const intern = new Intern(intName, intId, intEmail, intEdu);
        employDirect.push(intern);
        console.log(intern);
    })
};
//Asking if user wants to add another team member
const addTeam = [
    {
        type: 'confirm',
        name: 'addTeam',
        message: 'Would you like to add another employee to your directory?'
    }
];
// if user wants to add another team member the user will then be greeted with this question



// const writeToFile = (response) =>
//     `${response.name}
// ${response.id}
// ${response.email}`


// const init = () => {
//     try {
//         const html = writeToFile(response);
//         fs.writeFileSync(`index.html`, html);
//         console.log('YAY!!!!! You wrote to the employee directory file');
//     } catch (err) {
//         console.log(err);
//     }
// };

// init();
managerQuest();
console.log(employDirect);
