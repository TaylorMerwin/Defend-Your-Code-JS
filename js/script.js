import { validateName, validateInt, isValidPassword, checkOverflow } from './modules/validation.js';
import { hashInput, generateSalt } from './modules/utils.js';
import { updateInputValue } from './modules/ui.js';

//tracks which buttons have been clicked
let clicks = {
  promptForName: false,
  promptForNumbers: false,
  promptForFiles: false,
  promptForPassword: false
};


document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('nameButton').addEventListener('click', promptForName);
  document.getElementById('numbersButton').addEventListener('click', promptForNumbers);
  document.getElementById('fileNamesButton').addEventListener('click', promptForFiles);
  document.getElementById('passwordButton').addEventListener('click', promptForPassword);
  document.getElementById('importExportButton').addEventListener('click', initiateFileSelection);
});

function promptForName() {
  const instructions = "Please enter a name using only letters (A-Z, a-z). Maximum 50 characters.";

  let firstName = prompt("Enter your first name:\n" + instructions);
  while (!validateName(firstName)) {
    alert("Invalid first name. \n");
    firstName = prompt("Enter first name again:\n" + instructions);
  }

  let lastName = prompt("Enter your last name: \n" + instructions);
  while (!validateName(lastName)) {
    alert("Invalid last name. \n");
    lastName = prompt("Enter last name again:\n" + instructions);
  }
  alert("Hello, " + firstName + " " + lastName);
  clicks.promptForName = true;
  checkAllClicked();
  updateInputValue('Name', `${firstName} ${lastName}`);
}

function promptForNumbers() {
  const instructions = "Integers must be between -2,147,483,648 and 2,147,483,647."
  let firstInt = prompt("Enter the first integer:\n" + instructions);
  let secondInt = prompt("Enter the second integer:\n" + instructions);

  //check for valid numbers
  if (!validateInt(firstInt) || !validateInt(secondInt) || checkOverflow(firstInt, secondInt)) {
    alert("Invalid Input or overflow will occur! Try again");
    promptForNumbers();
  }
  clicks.promptForNumbers = true;
  checkAllClicked();
  updateInputValue('Numbers', `${firstInt} and ${secondInt}`);
}

function promptForFiles() {

  const txtExtensionPattern = /\.txt$/i;
  const jsonExtensionPattern = /\.json$/i;

  let inputFileName = prompt("Enter name of the input .txt file");
  let outputFileName = prompt("Enter name of the output .json file");

  //validate the input file name
  if (!txtExtensionPattern.test(inputFileName)) {
    alert("Invalid input file name. The file must be a .txt file.");
    return promptForFiles(); // Retry
  }

  // Validate the output file name
  if (!jsonExtensionPattern.test(outputFileName)) {
    alert("Invalid output file name. The file must be a .json file.");
    return promptForFiles(); // Retry
  }

  alert(`Input File: ${inputFileName}\nOutput File: ${outputFileName}`);
  storedInputFileName = inputFileName;

  clicks.promptForFiles = true;
  checkAllClicked();
  updateInputValue('I/O Files', `${inputFileName} and ${outputFileName}`);
}

/**
 * TODO: 
 * Write Hashed password to file
 */
async function promptForPassword() {
  const salt = generateSalt();
  let match = false;

  alert("Passwords must be at least 8 characters long and inlude 1 uppercase, 1 lowercase, 1 digit, and 1 symbol.");

  while (!match) {
    let password = prompt("Enter your password:");
    //before going further ensure that password is secure
    if (!isValidPassword(password)) {
      alert("Password must be at least 8 characters long and inlude 1 uppercase, 1 lowercase, 1 digit, and 1 symbol.\n Try Again!");
      continue;
    }
    const firstHashed = await hashInput(password + salt);
    let password2 = prompt("Re-enter your password:")
    const secondHashed = await hashInput(password2 + salt);

    if (firstHashed === secondHashed) {
      match = true; // The hashes match, set the flag to true to exit the loop
      alert("The passwords match. First = " + firstHashed + "\nSecond Hash = " + secondHashed);
    }
    else {
      alert("The passwords do not match. Please try again.");
    }
  }
  clicks.promptForPassword = true;
  checkAllClicked();
  updateInputValue('Password', '********');
}


function initiateFileSelection() {
  const fileInput = document.getElementById('fileInput');
  fileInput.click(); // Programmatically open the file dialog

  fileInput.onchange = async function (event) {
    const file = event.target.files[0];
    if (!file) {
      alert("No file selected.");
      return;
    }

    if (file.name !== storedInputFileName) {
      alert("The selected file does not match the input file name. Please select the correct file.");
      fileInput.value = ''; // Reset the file input
      initiateFileSelection(); // Attempt to re-initiate file selection - This approach won't work due to security restrictions
      return;
    }

    // If the file name matches, proceed to read the selected file
    readSelectedFile(file);
  };
}

/**
 * TODO: Implement file processing
 */
function readSelectedFile(file) {
  const reader = new FileReader();
  reader.onload = function (event) {
    const contents = event.target.result;
    console.log(contents);
  };
  reader.readAsText(file);
}

/**
 * Used for enabling the file writing button after all other buttons have been clicked
 */
function checkAllClicked() {
  if (Object.values(clicks).every(value => value)) {
    document.getElementById('importExportButton').disabled = false;
  }
}