// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword()
{
var gPassword = [];
var pwd = '';
var passwordLength = window.prompt("How many characters do you want in your password ?(choose between 8 to 128)")

if(passwordLength === null)
{ 
  
  if(window.confirm("Are you sure you don't want to create a password") )
  {
  return "";
  }
  else {
          window.prompt("How many characters do you want in your password ?(choose between 8 to 128)") 
        }
        
}

else if (passwordLength < 8 || passwordLength > 128) {
    alert( "Choose a length between 8 and 128 characters")
    window.prompt("How many characters do you want in your password ?(choose between 8 to 128)")
  }
else if(isNaN(passwordLength))
{ 
    alert("You have chosen a string please enter a number only")
    window.prompt("How many characters do you want in your password ?(choose between 8 to 128)")
}

else {
     alert("Choose options for your password") 
}


var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var numbers = '0123456789'.split('');
var specialCharacters = ' !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'.split('');

do{

if (window.confirm("Do you want lower case in your password"))
{ 
   gPassword = gPassword.concat(lowerCase);
}
if (window.confirm("Do you want upper case in your password"))
{
  gPassword = gPassword.concat(upperCase);
}
if (window.confirm("Do you want numbers in your password"))
{
  gPassword = gPassword.concat(numbers);
}
if (window.confirm("Do you want special characters in your password"))
{
  gPassword = gPassword.concat(specialCharacters);
}
if (gPassword.length === 0)
{ 
  window.alert("You haven't selected any preferences")
  
}
}
while(gPassword.length === 0);


for(i=0;i<passwordLength;i++)
{ 
  pwd = pwd+gPassword[Math.floor(Math.random()*gPassword.length)];
  
}

return pwd;
}




///  from the given assignment 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
