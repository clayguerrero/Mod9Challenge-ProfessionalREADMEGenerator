// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    isc: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    mit: "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)",
  };

  if (!license) return "";
  else return badges[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const links = {
    MIT: `[MIT](https://choosealicense.com/licenses/mit/)`,
    ISC: `[ISC](https://choosealicense.com/licenses/isc/)`,
    none: "",
  };
  return links[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license === 'none')
    return `This application is licensed with ${renderLicenseLink(license)}`;
  else return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing

  ## Tests
  ${data.tests}

  ## Questions
  Checkout my GitHub at ${data.github}
  You can reach out to me for more questions at ${data.email}
`;
}

module.exports = generateMarkdown;
