// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title? (Required)',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter your project title!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a project description (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please enter a project description!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please enter the installation instructions (Required)',
    validate: installationInput => {
      if (installationInput) {
        return true;
      } else {
        console.log('Please enter the installation instructions!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please enter the usage information (Required)',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please enter the usage information!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Please enter the contribution guidelines (Required)',
    validate: contributionInput => {
      if (contributionInput) {
        return true;
      } else {
        console.log('Please enter the contribution guidelines!');
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'license',
    message: 'Would you like to chose a license?',
    choices: [
      {name:"No", value:"No"},
      {name:"Yes, MIT License", value:"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"},
      {name:"Yes, GNU GPLv3", value:"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"},
      {name:"Yes, GNU AGPLv3", value:"[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"},
      {name:"Yes, GNU LGPLv3", value:"No"},
      {name:"Yes, Mozilla Public License 2.0", value:"[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"},
    ]
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please enter the test instructions (Required)',
    validate: testInput => {
      if (testInput) {
        return true;
      } else {
        console.log('Please enter the test instructions!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub username (Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address (Required)',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter your email address!');
        return false;
      }
    }
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  
  return new Promise((resolve, reject) => {
    fs.writeFile('./'+fileName, data, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then( data => {
    // writeToFile("README.me",data);
    const file = generateMarkdown(data);
    writeToFile("README.md", file)
  })
}

// Function call to initialize app
init();
