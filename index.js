// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { writeFile } = require("fs").promises;
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your application.",
  },
  {
    type: "input",
    name: "install",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide instructions and examples for use.",
  },
  {
    type: "input",
    name: "contribution",
    message:
      "Please provide contribution guidelines",
  },
  {
    type: "input",
    name: "tests",
    message:
      "Please provide test instuctions. If your application does not have any tests please enter 'null'",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose the license you wish to use",
    choices: ['MIT', 'ISC',],
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  writeFile(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((answers) => writeToFile('README.md', generateMarkdown(answers)))
  .then(() => console.log(`created readme`))
}

// Function call to initialize app
init();
