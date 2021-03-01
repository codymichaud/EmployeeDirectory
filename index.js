const inquirer = require('inquirer');
const fs = require('fs');


const managerQues = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your managers name?'
    }
]