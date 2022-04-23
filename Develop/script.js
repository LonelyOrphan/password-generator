// Declare generate button variable
const generateBtn = document.querySelector("#generate");

// Function to get password length
function getPasswordLength() {
  let lengthChoice = Number(prompt("Please enter a number between 8 and 28", "10"));
  if (typeof lengthChoice == "number" && (lengthChoice >= 8 && lengthChoice <= 128)) {
    return lengthChoice;
  } else {
    alert("Please enter a number between 8 and 128");
    getPasswordLength();
  }
}

// Function to get password criteria - this needs to only be called if above has been completed
function getPasswordCriteria() {
  let firstCriteria = prompt("Would you like to include lowercase characters in your password?", "yes").toLowerCase();
    if (firstCriteria == "yes" || firstCriteria == "y") {
      return "abcdefghijklmnopqrstuvwxyz"
    } else if (firstCriteria == "no" || firstCriteria == "n") {
      return "";
    } else {
      alert("Please answer either yes or no");
      getPasswordCriteria();
    }
  }

  console.log(getPasswordCriteria());


// Function to create random password
function createRandomPassword() {
console.log();
}

// Function to generate password
function generatePassword() {
  const passwordLength = getPasswordLength();
  const passwordCriteria = getPasswordCriteria();
  const randomPassword = createRandomPassword(passwordLength, passwordCriteria);
}

// On click of generate button, this function is called
// Function to write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
