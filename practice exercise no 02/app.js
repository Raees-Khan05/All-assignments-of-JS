

// task no 01

//  Write a program that takes an array of numbers as input. Double each even number in the array and remove all odd numbers. Return the modified array


// var userInput = prompt("enter your numbers please")

// var convert = userInput.split()


// for (let i = 0; i < userInput.length; i += 2) {
    
    
// }



// task no 02


 /* Write a program to take password as an input from
user. The password must qualify these requirements:
a. It should contain alphabets and numbers
b. It should not start with a number
c. It must at least 6 characters long
If the password does not meet above requirements,
prompt the user to enter a valid password.
For character codes of a-z, A-Z & 0-9, refer to ASCII
table at the end of this document.  /**
 * 
 */


let isValid = false;

function getPassword() {
    let password = prompt("Enter a password:");

    if (password.length < 6 || password[0].match(/[0-9]/) || !(/[a-zA-Z]/).test(password) || !(/[0-9]/).test(password)) {
       alert("Password is invalid. Please enter a valid password.");
        getPassword();
      } else {
        alert("Password is valid.");
        isValid = true;
        
    }
}

getPassword();




// task no 03

//Write a program that takes two arrays of numbers as input and returns a new array containing only the elements that are present in both arrays. Use nested for loops to compare each element of the first array with each element of the second array




var input1 = prompt("Enter numbers with commas for the first array:").split(",").map(Number);
var input2 = prompt("Enter numbers with commas for the second array:").split(",").map(Number);

if (Array.isArray(input1) && Array.isArray(input2)) {
    var common = [];

    for (var i = 0; i < input1.length; i++) {
        for (var j = 0; j < input2.length; j++) {
            if (input1[i] === input2[j]) {
                common.push(input1[i]);
                break; 
            }
        }
    }

    console.log("same elements are:", common);
} else {
    console.log("Invalid input. Please enter arrays of numbers.");
}



    // task no 04 

// Write a program that takes a number as input and checks whether it is a prime number or not


















// task no 05 

// Write a program that takes a nested array as input and flattens it into a single array. For example, if the input is [[1, 2], [3, 4], [5, 6]], the output should be [1, 2, 3, 4, 5, 6].

let nestedLisTArray = [[1, 2], [3, 4], [5, 6]];

let flatArray = [];

for (let i = 0; i < nestedArray.length; i++) {
    for (let j = 0; j < nestedArray[i].length; j++) {
        flatArray.push(nestedArray[i][j]); 
    }
}

console.log(flatArray);

 