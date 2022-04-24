// Declare generate button variable
const generateBtn = document.querySelector("#generate");

// Declare array for password characters
let passwordChars = [];

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

// Function to get password criteria
function getPasswordCriteria() {
  firstCriteria();
  secondCriteria();
  thirdCriteria();
  fourthCriteria();
}

// Gets answer for first criteria and adds to password characters array
  function firstCriteria() {
     let firstAnswer = 
     prompt("Would you like to include lowercase letters in your password?", "yes").toLowerCase();
    if (firstAnswer == "yes" || firstAnswer == "y") {
      passwordChars.push("abcdefghijklmnopqrstuvwxyz");
    } else if (firstAnswer == "no" || firstAnswer == "n") {
      // do nothing;
    } else {
      alert("Please answer either yes or no");
      firstCriteria();
    }
  }

  // Gets answer for second criteria and adds to password characters array
    function secondCriteria() {
      let secondAnswer = 
      prompt("Would you like to include uppercase letters in your password?", "yes").toLowerCase();
    if (secondAnswer == "yes" || secondAnswer == "y") {
      passwordChars.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    } else if (secondAnswer == "no" || secondAnswer == "n") {
      // do nothing
    } else {
      alert("Please answer either yes or no");
      secondCriteria();
    }
  }

  // Gets answer for third criteria and adds to password characters array
  function thirdCriteria() {
    let thirdAnswer = 
    prompt("Would you like to include numbers in your password?", "yes").toLowerCase();
  if (thirdAnswer == "yes" || thirdAnswer == "y") {
    passwordChars.push("0123456789");
  } else if (thirdAnswer == "no" || thirdAnswer == "n") {
    // do nothing
  } else {
    alert("Please answer either yes or no");
    thirdCriteria();
  }
}

  // Gets answer for fourth criteria and adds to password characters array
  function fourthCriteria() {
    let fourthAnswer = 
    prompt("Would you like to include special characters in your password?", "yes").toLowerCase();
  if (fourthAnswer == "yes" || fourthAnswer == "y") {
    passwordChars.push("!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
  } else if (fourthAnswer == "no" || fourthAnswer == "n") {
    // do nothing
  } else {
    alert("Please answer either yes or no");
    fourthCriteria();
  }
}


// Function to create random password
function createRandomPassword(a, b) {
// what is password length? e.g. 8
// what is password crit? e,g, [0,1,2]
// what is array length? e.g. 3
// select random char from array[0,1,2]
// loop through array, get random from 0, 1, 2, 0, 1, 2... (if i reaches array.length - 1 then start over)
// until number of times this is done reaches password length
let minChars = "";
let restChars = "";
let passwordString = passwordChars.join("");
// selects
for (let i = 0; i < passwordChars.length; i++) {
  minChars += passwordChars[i][Math.floor(Math.random() * passwordChars[i].length)];
}

for (let i = 0; i < (passwordLength - passwordChars); i++) {

}
return minChars;
}


// Function to generate password
function generatePassword() {
  const passwordLength = getPasswordLength();
  const passwordCriteria = getPasswordCriteria();
  const randomPassword = createRandomPassword(passwordLength, passwordChars);
  return randomPassword;
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
