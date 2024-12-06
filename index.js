// TODO: Include packages needed for this application
import inquirer  from "inquirer";
// import colors from "colors";
import fs from 'fs';
//  import generateMarkdown from "./utils/generateMarkdown.js"
 import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
  
    {
        type: 'input',
        message: 'what s the title of your project',
        name : 'title',
    },

    {
        type: 'input',
        message: 'what s the description of your project',
        name : 'description',
    },


    {
        type: 'input',
        message: 'can you provide the intruction of the installation',
        name : 'installation',
    },
    
    {
        type: 'input',
        message: 'provide the usage',
        name : 'usage',
    },

    {
        type: 'input',
        message: 'the constribution',
        name : 'constribution',
    },

    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPL', 'Apache']
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Provide guidelines for contributing:'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions for running tests:'
      },
      {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username:'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
      }


];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

        fs.writeFile(fileName, data, (err) => {
          if (err) {
            console.log('Error writing file:', err);
          }
          console.log('README.md has been generated!');
        });
      


    
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then((answers) => {
      // Generate README content
      const readmeContent = generateMarkdown(answers);
      
      // Write the README file
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.log('Error prompting user:', error);
    });


}

// Function call to initialize app
init();
