// Assignment chapter 12 


// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).



var inputChar = prompt('Enter a character:');

var charCode = inputChar.charCodeAt(0);

if (charCode >= 48 && charCode <= 57) {
    alert(inputChar + ' is a number.');
}
else if (charCode >= 65 && charCode <= 90) {
    alert(inputChar + ' is an uppercase letter.');
}
else if (charCode >= 97 && charCode <= 122) {
    alert(inputChar + ' is a lowercase letter.');
}
else {
    alert(inputChar + ' is not a number or letter.');
}





// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.


var userInputOne = prompt("enter your !st number")
var userInputTwo = prompt("enter your 2nd number")

if (userInputOne > userInputTwo) {
    alert(`${userInputOne} is greater than ${userInputTwo}`)
}else if (userInputOne < userInputTwo) {
    alert(`${userInputOne} is less than ${userInputTwo}`)
}else{
    alert(`${userInputOne} is equal to ${userInputTwo}`)
}



// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

var number_One = prompt("enter yor number")


if (number_One > 0) {
    alert("the number is positive")
}else if (number_One < 0) {
    alert("the number is negative")
}else{
    alert("the number is zero")
}



// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise






// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.