// Assignment code here
const UPPERCASECHAR = [
'A',
'B',
'C',
'D',
'E',
'F',
'G',
'H',
'I',
'J',
'K',
'L',
'M',
'N',
'O',
'P',
'Q',
'R',
'S',
'T',
'U',
'V',
'W',
'X',
'Y',
'Z'
];
const LOWERCASECHAR = [
'a',
'b',
'c',
'd',
'e',
'f',
'g',
'h',
'i',
'j',
'k',
'l',
'm',
'n',
'o',
'p',
'q',
'r',
's',
't',
'u',
'v',
'w',
'x',
'y',
'z'];
const NUMERIC = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const SPECIALCHAR = [
'@',
'%',
'+',
'\\',
'/',
"'",
'!',
'#',
'$',
'^',
'?',
':',
',',
')',
'(',
'}',
'{',
']',
'[',
'~',
'-',
'_',
'.'];

function passwordRequirements () {
    //password length 
    var passwordLength = parseInt(window.prompt("Select required character length"));
    if (Number.isNaN(passwordLength)) {
    alert("A value needs to be entered.");
    return null;
    }
    
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
    const passwordOptions = {
        passwordLength: passwordLength,
        isUppercase: isUppercaseChar,
        isLowercase: isLowercaseChar,
        isNumeric: isNumericChar,
        isSymbol: isSpecialChar,
      };
      return passwordOptions;
}

function generatePassword () {
   var passwordOptions = passwordRequirements();
   let allCharacters = [];
   let passwordResults = [];

   if (passwordOptions.isUppercase) {
    allCharacters = allCharacters.concat(UPPERCASECHAR);
    console.log("uppercase", allCharacters);
   }

   if (passwordOptions.isLowercase) {
    allCharacters = allCharacters.concat(LOWERCASECHAR);
    console.log("uppercase + lowercase", allCharacters);
   }
   //numeric
   if (passwordOptions.isNumeric) {
       allCharacters = allCharacters.concat(NUMERIC);
       console.log("uppercase + lowercase + numeric");
   }
   //symbol
   if (passwordOptions.isSymbol) {
       allCharacters = allCharacters.concat(SPECIALCHAR);
       console.log("uppercase + lowercase + numeric + symbol");
   }

   //console.log("What is my password option?" , passwordOptions);
    for (var i =0; i < passwordOptions.passwordLength; i++) {
    var getCharacters = getRandom(allCharacters);
   
    //console.log("What is the index?" , index);
    passwordResults.push(getCharacters);
}
return passwordResults.join("");
 
  
}

function getRandom (array) {
    console.log("array length" , array.length);
    var index = Math.floor(Math.random() * array.length);
    return array[index];
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