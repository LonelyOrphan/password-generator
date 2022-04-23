// Declare generate button variable
const generateBtn = document.querySelector("#generate");

// Function to generate password
function generatePassword() {
  // prompt 1 - input password length (between 8 and 128 characters)
  let firstPrompt = prompt("How many characters in length would you like your password to be? (Min 8, max 128", "8");
  
// if length under 8 or above 128 is selected, the user is asked again to choose the correct amount
if (firstPrompt < 8 || firstPrompt > 128) {
  alert("Please enter a number between 8 and 128");
  generatePassword();
} else 


  // prompt 2 - user is asked whether to include lowercase, uppercase, numeric, and/or special characters
  // Ensure at least one character type has been selected, otherwise request user to select again
  

  // Password is generated taking the above into consideration and is written to the page
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
