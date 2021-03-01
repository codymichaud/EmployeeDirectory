const inquirer = require('inquirer');
const fs = require('fs');


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

]