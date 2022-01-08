// Assignment code here
var promptFunc = function(){
  var passLen = window.prompt("How long would you like your password?")
  if(passLen < 8 || passLen > 128){
    window.alert("Input invalid");
  }
  var specialChars = window.prompt("Would you like uppercase, lowercase, numeric, and/or special characters?")
  switch(specialChars){
    case "Uppercase":
    case "uppercase":
      
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", promptFunc());