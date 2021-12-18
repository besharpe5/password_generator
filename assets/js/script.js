// Assignment code here

function generatePassword () {
   // console.log("this message works");
    //return "this message works";
    //password length 
    var passwordLength = parseInt(window.prompt("Select required character length"));
    if (Number.isNaN(passwordLength));
    alert("A value needs to be entered.");
    return null;
    if (passwordLength < 8) {
        alert("Password needs to be at least 8 characters in length.");
        return null;
    }
    if (passwordLength > 128) {
        alert("Password needs to be less than 128 characters in length.");
        return null;
    }
    console.log(passwordLength);
    //uppercase 
    var isUppercaseChar = confirm("Do you want to include uppercase characters?");
    console.log(isUppercaseChar);
    //lowercase
    var isLowercaseChar = confirm("Do you want to include lowercase characters?");
    console.log(isLowercaseChar);
    //numeric
    var isNumericChar = confirm("Do you want to include numbers?");
    console.log(isNumericChar);
    //symbols
    var isSpecialChar = confirm("Do you want to include special characters/symbols?");
    console.log(isSpecialChar);

    if (isUppercaseChar === false && isLowercaseChar === false && isNumericChar === false && isSpecialChar === false) {
        alert("At least one option needs to be selected.");
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