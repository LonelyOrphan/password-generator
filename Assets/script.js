const generateBtn = document.querySelector("#generate");

// Store password characters
let passwordChars = [];

// Store password length
let passwordLength = 0;

// Function to get password length
function getPasswordLength() {
  let lengthChoice = Number(prompt("Please enter a number between 8 and 28", "10"));
  if (typeof lengthChoice == "number" && (lengthChoice >= 8 && lengthChoice <= 128)) {
    passwordLength = lengthChoice;
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
    passwordChars = [];
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
    passwordChars.push("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~");
  } else if (fourthAnswer == "no" || fourthAnswer == "n") {
    // do nothing
  } else {
    alert("Please answer either yes or no");
    fourthCriteria();
  }
}

function createRandomPassword() {
let minChars = "";
let restChars = "";
let passwordString = passwordChars.join("");
// Selects one of each character from each criteria, ensures each criteria is used
for (let i = 0; i < passwordChars.length; i++) {
  minChars += passwordChars[i][Math.floor(Math.random() * passwordChars[i].length)];
}
// Randomly selects characters from all criteria to make up the rest of the password
for (let i = 0; i < (passwordLength - passwordChars.length); i++) {
  restChars += passwordString[Math.floor(Math.random() * passwordString.length)];
}
console.log(passwordChars)
return minChars + restChars;
}


// Function to generate password
function generatePassword() {
  getPasswordLength();
  getPasswordCriteria();
  // Request that user selects at least one criteria
  if (passwordChars.length === 0) {
    alert("A password has to be made from something! Please answer yes to at least one of the questions...");
    return "please try again 😘"
  } else { 
    const randomPassword = createRandomPassword();
    return randomPassword;
  }
}

// Called when generate button is clicked
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
