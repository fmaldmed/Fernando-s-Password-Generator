// Assignment Code
var generateBtn = document.querySelector("#generate");

//Button to clear Textarea.
var clearBtn = document.querySelector("#clear");
// Arrays including possible selections.
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var symbols = ["!","@","#","$","%","^","&","*","(",")","_","+","=","-","~","'","`","'",":","?"];
var passwordArray = [];
var SecuredPassword="";


// function to clear password.
function resetpassword() {
  document.getElementById("password").value='';
  console.log("You have successfully cleared the password input.")
}
// Write password to the #password input
function writePassword() { 
var password = generatePassword();
var passwordText=document.querySelector("#password");

passwordText.value = password;

}


// Add Eventlistener to generate button 
generateBtn.addEventListener("click", writePassword);

//Eventlistener to clear password.
clearBtn.addEventListener("click", resetpassword);


// Function to generate a password through a series of prompts.
function generatePassword () {
  // Series of prompts/confirms to verify password length, and what type of characters to include.
  var passwordlength = window.prompt("How many characters would you like to include (Min = 8, Max = 128)?");

  if (passwordlength >= 8 && passwordlength <= 128) {
    window.alert("Your selection of " + passwordlength +" meets criteria.");
  }
  else {
    window.alert("Must select a number between 8 and 128");
    return;
  }
  var uselowercase = window.confirm("Would you like to include lowercase letters?");
  if (uselowercase) {
    console.log("lowercase confirmed");
  }else {
    console.log("lowercase declined.");
  }

  var useuppercase = window.confirm("Would you like uppercase letters?");
  if (useuppercase) {
    console.log("uppercase confirmed");
  }else {
    console.log("uppercase declined.");
  }

  var usenumbers = window.confirm("Would you like to include numbers?");
  if (usenumbers) {
    console.log("numbers confirmed");
  }else {
    console.log("numbers declined.");
  }

  var usesymbols = window.confirm("Would you like to include symbols?");

// Upon finishing the prompts/confirm answers will be validated and a password will be generated based on the selections.
  if (uselowercase == true || usenumbers == true || usesymbols == true || useuppercase == true) {
    window.alert("You have successfully generated your password");
    console.log("You have successfully generated your password");
  }

  if (uselowercase) { 
    passwordArray = passwordArray.concat(lowercase); 
  }
  if (useuppercase) { 
    passwordArray = passwordArray.concat(uppercase); 
  }
  if (usenumbers) { 
    passwordArray = passwordArray.concat(numbers); 
  }
  if (usesymbols) { 
    passwordArray = passwordArray.concat(symbols); 
  }

 
  for (var i = 0; i <= passwordlength; i++) {
    SecuredPassword = SecuredPassword+passwordArray[Math.floor(Math.random()*passwordArray.length)];
  }
  
//Returns password to display
  return SecuredPassword;

}
