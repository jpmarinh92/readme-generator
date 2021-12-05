
  # Test
  [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
  ## Description

  Every good project needs a quality README with information about the app - what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project.<br/><br/> This is a command-line application that runs with Node.js that dynamically generates a README.md file based on input about your project.

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)


  ## Installation

  To generate your own README, `git clone` the repo down to your local so you have the Node project on your local.<br/><br/>  Run `npm install` in order to install the following npm package dependencies as specified in the `package.json`:<br/><br/> [inquirer](https://www.npmjs.com/package/inquirer) will prompt you for your inputs from the command line.<br/><br/> The application will start by running `node index.js` in the command line.<br/><br/> Answer the prompts in your command line to generate the README.<br/><br/> After answering all the prompts, your README file will be named 'README.md' and will be ready for you at the root of the repo.

  ## Usage

  When you run `node index.js`, the application uses the `inquirer` package to prompt you in the command line with a series of questions about your GitHub and about your project.<br/><br/> The application will generate markdown and a table of contents for the README conditionally based on your responses to the Inquirer prompts. The README will also include badges for your GitHub repo.<br/><br/> Finally, `fs.writeFile` is used to generate your project's README.md file.

  ## Contributing

  We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, caste, color, religion, or sexual identity and orientation.<br/><br/> We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.

  ## License

  Licensed under the [ GPL v3](https://www.gnu.org/licenses/gpl-3.0) license.

  ## Questions 

  https://github.com/JPMarinh92
  
  jpmarin92@hotmail.com
  
  If you have any questions, concerns or suggestions please contact me through the email provided above and please include the name of the repository in the email subject.
  
