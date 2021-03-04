const inquirer = require('inquirer');
const fs = require('fs');
const { generate } = require('rxjs');


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
        }
    ]).then(response => {
        const managName = response.managName;
        const managId = response.managId;
        const managEmail = response.managEmail;
        const manageNum = 
    })
};

function engineerQuest() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of the first engineer.'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id number of the employee?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the team members email.'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter the team members Github username.'
        }
    ])
};

function internQuest() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the interns name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID number for this intern?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the interns email?'
        },
        {
            type: 'input',
            name: 'education',
            message: 'Where does the intern attend school?'
        }
    ])
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
let manager = [];
let intern = [];
let engineer = [];

function employeeDirHtml(manager, intern, engineer) {
    let managerHTML
}


const writeToFile = (response) =>
    `${response.name}
${response.id}
${response.email}`


const init = () => {
    try {
        const html = writeToFile(response);
        fs.writeFileSync(`index.html`, html);
        console.log('YAY!!!!! You wrote to the employee directory file');
    } catch (err) {
        console.log(err);
    }
};

init();