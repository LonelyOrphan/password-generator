// Declare generate button variable
const generateBtn = document.querySelector("#generate");

// Function to generate password
function generatePassword() {
  //prompt for password criteria
  //prompt 1 - input password length (between 8 and 128 characters)
  //if length under 8 or above 128 is selected, the user is asked again to choose the correct amount

  //prompt 2 - user is asked whether to include lowercase, uppercase, numeric, and/or special characters
  // Ensure at least one character type has been selected, otherwise request user to select again
  //
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
