// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "motivation",
    message:
      "What was your motiviation for your project, and why did you build it?",
  },
  {
    type: "input",
    name: "problems",
    message: "What are some challeges you faced making your project?",
  },
  {
    type: "input",
    name: "lesson",
    message: "What did you learn from your project?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
