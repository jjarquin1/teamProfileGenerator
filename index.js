const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname,'output');
const outputPath = path.join(OUTPUT_DIR,'team.html')

const render = require('./lib/render');
const Employee = require('./lib/employee');
const team = []

function empQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Input employee name',
            name: 'name', 
        },
        {
            type: 'input',
            message: 'Input employee Id',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Input email',
            name: 'email',
        },
        {
            type: 'list',
           message: 'Input employee role', 
           name: 'role',
           choices: ['Engineer', 'Intern', 'Manager']
        },

    ]).then(function(answers){
        if (answers.role === 'Engineer') {
            engQuestions(answers);
        } else if (answers.role === 'Intern') {
            intQuestions(answers);
        } else {
            mangQuestions(answers);
        }
    })
}

function engQuestions(baseAnswers) {
    inquirer.prompt ([
        {
            type: 'input',
            message: 'Input Github useranme',
            name: 'github'
        },
        {
            type:'confirm',
            message: 'Add another employee?',
            name: 'addAnother',
        },

    ]).then(function(answers){
        const newEngineer = new Engineer(baseAnswers.name, baseAnswers.id, baseAnswers.email, answers.github);
        team.push(newEngineer);
        if (answers.addAnother === true) {
            empQuestions()
        } else {
            buildTeam();
            console.log('Team Complete!')
        }
    })
}

function intQuestions(baseAnswers) {
    inquirer.prompt ([
        {
            type: 'input',
            message: 'Input school attending',
            name: 'school',
        },
        {
            type:'confirm',
            message: 'Add another employee?',
            name: 'addAnother',
        },
    ]).then(function(answers){
        const newIntern = new Intern(baseAnswers.name, baseAnswers.id, baseAnswers.email, answers.school);
        team.push(newIntern);
        if (answers.addAnother === true) {
            empQuestions()
        } else {
            buildTeam();
            console.log('Team Complete!')
        }
    })
}

function mangQuestions(baseAnswers) {
    inquirer.prompt ([
        {
        type: 'input', 
        message: 'Input office number',
        name: 'officeNumber',
        },
        {
            type:'comfirm',
            message: 'Add another employee?',
            name: 'addAnother',
        },
    ]).then(function(answers){
        const newManager = new Manager(baseAnswers.name, baseAnswers.id, baseAnswers.email, answers.officeNumber);
        team.push(newManager);
        if (answers.addAnother === true) {
            empQuestions()
        } else {
            buildTeam();
            console.log('Team Complete!')
        }
    })
}

function buildTeam() {
    if (!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(team),'utf-8');
}

empQuestions();