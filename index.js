const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./library/managerprof');
const Engineer = require('./library/engineerprof');
const Intern = require('./library/internprof');
const Choices = require('inquirer/lib/objects/choices');
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
        employDirect.push(manager);
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
        },
        {
            type: 'list',
            name: 'nextNew',
            message: 'Would you like to add an Intern?',
            choices: ['Yes', 'No']
        }
    ]).then(response => {
        const engName = response.engName;
        const engId = response.engId;
        const engEmail = response.engEmail;
        const engGithub = response.engGithub;
        const engineer = new Engineer(engName, engId, engEmail, engGithub);
        employDirect.push(engineer);
        console.log(engineer);
        let nextNew = response.nextNew;
        if (nextNew === 'Yes') {
            internQuest();
        } else if (nextNew === 'No') {
            createHTML();
        }
        //internQuest();
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
        addTeam();
    })

    function addTeam() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'addEmpl',
                message: 'Would you like to add another employee to your directory?',
                choices: ['Engineer', 'Intern', 'No']
            }
        ]).then(response => {
            let addEmpl = response.addEmpl;

            if (addEmpl === 'Engineer') {
                engineerQuest();
            } else if (addEmpl === 'Intern') {
                internQuest();
                return;
            } else {
                createHTML();
            };
        });

    }
};

function createHTML() {


    let employeeCards = "";
    employDirect.forEach(employee => {
        const employeeCard = employee.newEmpCard();
        employeeCards += employeeCard;
    })


    let pageHTML = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <title>Employee Directory</title>
</head>

<body>
    <div class="yourEmpCont container-fluid text-center" style="height: 80px; background-color:dimgray; color: cyan;">
        <h1 class="yourEmplHead" style="padding-top: 5px;">Welcome to your Employee Directory</h1>
<hr style="background-color: black;">
    </div>
    <div class="container" style="padding-top: 25px;">
        <div class="card-columns justify-content-center">
        ${employeeCards}
        <br>
        <br>
       
        <br>
        <br>
        
        
         </div>
    </div>
</body>

</html>`;
    fs.writeFile('./index.html', pageHTML, (error) => {
        if (error) {
            throw error;
        }
    });
};


//Asking if user wants to add another team member

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
