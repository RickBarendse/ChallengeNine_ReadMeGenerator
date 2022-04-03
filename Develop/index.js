// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter project title!');
                    return false;
                }
            }
        },
    
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description for your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('A project description is required!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions. (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('You must include installation instructions!')
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Describe how to use your project. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log("It's best practices to provide a description of how to use your project!")
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'contribute',
            message: 'Tell other developers how they can contribute to your project. (Required)',
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                } else {
                    console.log("Other developers can't contribute if you don't tell them how!")
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'tests',
            message: 'Please provide test samples?',
        },


        {
            type: 'checkbox',
            name: 'licenses',
            message:  'Select which licenses to include. (Select all that apply)',
            choices: ['GitHub', 'MIT', 'GNU', 'NPM', 'Apache 2.0', 'ISC']
        },

        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username. (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('You must provide your GitHub username!')
                    return false;
                }
            }       
        },

        {
            type: 'input',
            name: 'email',
            message: 'Input your email address. (required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please include your email address!')
                    return false;
                }
            }
        }
    ]);
}
    

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
questions()