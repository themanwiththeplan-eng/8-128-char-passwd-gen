// Assignment code here
var finalPass = [];
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", ];
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passLen;
function promptFunc(){
  var passLen = (prompt("How long would you like your password? Pick a value between 8 and 128"));
  if(passLen < 8 || passLen > 128){
    alert("Your password has to be between 8 and 128 characters")
    return NaN;
  }else{
    alert("You chose " + passLen);
  }
  
  var uppCase = window.confirm("Do you want to use uppercase letters?");
  if(uppCase){
    finalPass = finalPass.concat(upperLetters);
    console.log(`finalPassword: ${finalPass}`);
  }else{
    alert(`You don't want any uppercase letters in your password.`);
  }

  var lowerCase = window.confirm(`Do you want to use lowercase letters?`);
  if(lowerCase){
    finalPass = finalPass.concat(lowerLetters);
    console.log(`finalPassword: ${finalPass}`);
  }else{
    alert(`You don't want any lowercase letters in your password`);
  }

  var numbers = window.confirm(`Do you want to use numbers?`);
  if(numbers){
    finalPass = finalPass.concat(nums);
    console.log(`finalPass: ${finalPass}`);
  }else{
    alert(`You don't want numbers in your password`);
  }

  var special = window.confirm(`Do you want to use special characters?`)
  if(special){
    finalPass = finalPass.concat(specialChars);
    console.log(`finalPass: ${finalPass}`);
  }else{
    alert(`You don't want to use special characters.`);
  }
  console.log(passLen);


var random = ""
function randomizer(){
    random += finalPass[Math.floor(Math.random() * finalPass.length)];
  }
  for(i = 0; i < passLen; i++){
    randomizer();
  }
  console.log(random);
  return random;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = promptFunc();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
