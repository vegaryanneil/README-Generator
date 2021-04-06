// Reads inquirer input
const inquirer = require('inquirer');
// saves the file as a index.html
const fs = require('fs');
// Takes the answers from inqurer and inputs them in specific location. This is also the html boiler plate for the index.html file.
// ${ deconstructs the prompt and takes the specific information indicated}
const generateREADME = (answers) =>
`
# ${answers.title} ${answers.license}
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
## Contributors
Github: https://github.com/${answers.github}

Email: ${answers.email}
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
      message: 'What license is used?',
      choices:[
        {
          key: 'a',
          name: 'MIT License',
          value: '![MIT License](https://img.shields.io/crates/l/test1)',
        }, 
        {
          key: 'b',
          name: 'GNU GPLv3',
          value: '![GPL License](https://img.shields.io/cran/l/devtools)' 
        }, 
        {
          key: 'c',
          name: 'PyPI',
          value: '![BSD License](https://img.shields.io/pypi/l/django)' 
        }, 
        {
          key: 'd',
          name: 'Apache 2',
          value: '![Apache 2](https://img.shields.io/hexpm/l/plug?style=plastic)' 
        }, 
      ],
    },
        {
          type: 'input',
          name: 'github',
          message: 'What is your github userID?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your email?',
        },
  ])
  .then((answers) => {
    const readME = generateREADME(answers);

    fs.writeFile('README.md', readME, (err) =>
   
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });