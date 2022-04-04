const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

function badge(license){
  return `![Badge](https://img.shields.io/badge/License-${license}-blueviolet)`
}

badge()

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Instatallation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribute](#contribute)
  * [Tests](#tests)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This application is covered under the ${data.license} license

  ## Contribute
  ${data.contribute}

  ## Tests
  ${data.tests}

  ## Questions
  Please visit my GitHub Overview page at: https://github.com/${data.github}

  If you have any questions regardinmg this application please email me at [${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;