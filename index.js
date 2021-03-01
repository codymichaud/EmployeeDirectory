const inquirer = require('inquirer');
const fs = require('fs');
const { generate } = require('rxjs');


const managerQuest = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your managers name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter your employee id number.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'officeNum',
        message: 'What is your office number?'
    }
];

const engineerQuest = [
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
];

const internQuest = [
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
        name: 'school',
        message: 'Where does the intern attend school?'
    }
];
//Asking if user wants to add another team member
const addTeam = [
    {
        type: 'confirm',
        name: 'addTeam',
        message: 'Would you like to add another Team Member to your directory?'
    }
];
// if user wants to add another team member the user will then be greeted with this question
const
const init = () => {
    try {
        const html = writeToFile(response);
        fs.writeFileSync(`index.html`)
    }
 }

init();