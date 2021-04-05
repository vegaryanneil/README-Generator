// Reads inquirer input
const inquirer = require('inquirer');
// saves the file as a index.html
const fs = require('fs');

// Takes the answers from inqurer and inputs them in specific location. This is also the html boiler plate for the index.html file.
// ${ deconstructs the prompt and takes the specific information indicated}
const generateREADME = (answers) =>
`
# ${answers.title}
## Description
${answers.desc1}. ${answers.desc2}. ${answers.desc3}. ${answers.desc4}.
## Table of Contents

### [Installation](#Installation)
### [Usage](#Usage)
### [License](#License)
### [Contributing](#Contributing)
### [Tests](#Tests)

## Installation
${answers.installation}
## Usage
${answers.usage}
## License
${answers.license}
## Contributing
${answers.contributing}
## Tests
${answers.tests}
`
 
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'desc1',
      message: 'What was your motivation?',
    },
    {
      type: 'input',
      name: 'desc2',
      message: 'Why did you build this project?',
    },
    {
      type: 'input',
      name: 'desc3',
      message: 'What problem does it solve?',
    },
    {
      type: 'input',
      name: 'desc4',
      message: 'What did you learn?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.',
    },
    {
      type: 'list',
      name: 'license',
      choices: ['MIT License', 'GNU GPLv3', 'Mozilla Public License 2.0', 'Community License'],
      message: 'Provide instructions and examples for use.',
    },
   


  ])
  .then((answers) => {
    const readME = generateREADME(answers);

    fs.writeFile('README.md', readME, (err) =>
   
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });

// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
