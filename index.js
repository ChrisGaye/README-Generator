// TODO: Include packages needed for this application
import generateMarkdown from "./utils/generateMarkdown";
import fs from "fs";
import inquirer from "inquirer";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project.",
    },
    {
        type:"input",
        name:"description",
        message:"Give a description of your project please!",
    },
    {
        type:"input",
        name:"installation",
        message:"What steps are required to install your project.",
    },
    {
        type:"input",
        name:"usage",
        message:"Provide instructions and examples for the usage of your project.",
    },
    {
        type:"input",
        name:"credits",
        message:"List collaborators, tutorials used, and third-party assets, if there are any.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
