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
    var passwordLength = parseInt(window.prompt("Enter a character length between 8 and 128."));
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
    //uppercase 
    var isUppercaseChar = confirm("Do you want to include uppercase characters?");

    //lowercase
    var isLowercaseChar = confirm("Do you want to include lowercase characters?");

    //numeric
    var isNumericChar = confirm("Do you want to include numbers?");
    
    //symbols
    var isSpecialChar = confirm("Do you want to include special characters/symbols?");
    

    if (isUppercaseChar === false && isLowercaseChar === false && isNumericChar === false && isSpecialChar === false) {
        alert("At least one option needs to be selected.");
        return null;
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

   let mustHaveCharacters = [];
   let passwordResults = [];

   if (passwordOptions.isUppercase) {
    allCharacters = allCharacters.concat(UPPERCASECHAR);
   mustHaveCharacters.push(getRandom(UPPERCASECHAR));
   }

   if (passwordOptions.isLowercase) {
    allCharacters = allCharacters.concat(LOWERCASECHAR);
    mustHaveCharacters.push(getRandom(LOWERCASECHAR));
   }
   //numeric
   if (passwordOptions.isNumeric) {
       allCharacters = allCharacters.concat(NUMERIC);
       mustHaveCharacters.push(getRandom(NUMERIC));
   }
   //symbol
   if (passwordOptions.isSymbol) {
       allCharacters = allCharacters.concat(SPECIALCHAR);
       mustHaveCharacters.push(getRandom(SPECIALCHAR));
   }

    for (var i =0; i < passwordOptions.passwordLength; i++) {
        var getCharacters = getRandom(allCharacters);
    
        passwordResults.push(getCharacters);
      
    }

    for (var i = 0; i < mustHaveCharacters.length; i++ ) {
        passwordResults[i] = mustHaveCharacters[i];
    }

    return passwordResults.join("");
 
}

function getRandom (array) {
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