// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license==="none") return "";
return `![MIT License](https://img.shields.io/badge/License${license}-MIT-yellow.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

if (license==="none") return"";
 switch (license) {
    case 'MIT':
      return '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'Apache 2.0':
      return '![Apache 2.0 License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'GPL 3.0':
      return '![GPL 3.0 License](https://img.shields.io/badge/License-GPL%20v3-blue.svg)';
    case 'BSD 3-Clause':
      return '![BSD 3-Clause License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    default:
      return ''; // Return empty string if the license is not recognized

 }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license==="none") return ''; // If no license is provided, return an empty string
   
  // Combine the badge and link into a readable section
  return `
## License
This project is licensed under the ${renderLicenseLink(license)}`;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data){
console.log(data);
  return `#${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.constribution}

## Tests
${data.tests}


## Questions
For any questions, you can reach me at: 
  `;


}


export default generateMarkdown;
