



// var txt = 'Which platform you will be using for the payment.'

// // if(abc == ' ')
// for (var i = 0; i < txt.length; i++) {
//     if (txt.slice(i, i + 7) === 'payment') {
//         alert('Payment word is not allowed')
//     }
// }   




// task no 01 

var userFirstName = prompt("enter your first name")

var userLastName = prompt("enter your last name")

var fullName = userFirstName + " " + userLastName

alert("hello " + fullName + "....")





// task no 02 

// Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser


var usersInput = prompt("enter your fav mob model name")


alert("length of string is : " + usersInput.length)



// Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .




          var name = "Pakistani"

          console.log("index number of letter n is " , name.indexOf("n"))



  
  
   // task no 04 


   // Write a program to find the last index of letter “l” in the
   // word “Hello World” and display the result in your browser.


   var Greet = "hello world"

   console.log("last index of letter l in hello world is" , Greet.lastIndexOf("l"))


 // task no 05


//  Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.



   var character = "Pakistani"

   console.log(character.charAt(3))


   // tasl no 06

   // Repeat Q1 using string concat() method.



    
var userFirstName = prompt("enter your first name").split(",")

var userLastName = prompt("enter your last name").split(",")

var fullName = userFirstName.concat(userLastName)

alert(fullName)
console.log(fullName)





  // question no 07


  
// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.


      var wordd = 'hyderabad'

     console.log(wordd.replace("hyder" , "islam"))




// task no 08 

// Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;



   var message = "ali and sami are best friends. they play cricket and football together"

   console.log(message.replaceAll("and" , "&"))



   // task no 09 


   // Write a program that converts a string “472” to a number
   // 472. Display the values & types in your browser.


     var str = "472"
     var num = Number(str)

     console.log(num)



   // question no 10
//  Write a program that takes user input. Convert and
// show the input in capital letters.




var user_Input = "peanuts"

console.log(user_Input.toUpperCase())



// task no 11
// Write a program that takes user input. Convert and
// show the input in title case.


 var userLang = 'javascript'

 console.log(userLang.slice(0))

 console.log(userLang[0].toUpperCase() + userLang.slice(1))



 // task no 12 


//  // Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.




       var numBer = 3536
       
       var convert = String(numBer)

       console.log(convert)

       console.log(typeof(convert))



   // task no 13
   // remaining

//      Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64


      var userrInput = prompt("enter your username")

      if (userrInput.includes("!") || userrInput.includes(",") || userrInput.includes(".") || userrInput.includes("@") ) {
        alert("enter a valid username")
      }else{
        alert("ok bhaii... thanks")
      }



       



  // task no 14

  // You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:



     var array  = ['cake', 'apple pie', 'cookie' , 'chips' , "patties"]

var userInfo = prompt('Enter the item you required')

for (var i = 0; i < array.length; i++) {
    if (userInfo.toLowerCase() == array[i].toLowerCase()) {
        alert("item is available")
        break
    }else{
      alert("item is not available")
      break
    }
}



  // task no 15
  // remaining
  

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



   






   // task no 16
   // remaining
//    // Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.


 var university = "University of Karachi"

 var arr_Line = university.split(" ")

 console.log(arr_Line)




 // Write a program to display the last character of a user input.


var userInput_Country = prompt("enter your country name:");


if (userInput_Country !== null && userInput_Country !== "") {
    var lastCharacter = userInput_Country.slice(-1);
    
    console.log("The last character of the input is: " + lastCharacter);
} else {
    console.log("No input provided. Please try again.");
}


//    task no 18

var sentence = "The quick brown fox jumps over the lazy dog";

var lowerCaseSentence = sentence.toLowerCase();

var words = lowerCaseSentence.split(" ");

var count = 0;
words.forEach(function(word) {
    if (word === "the") {
        count++;
    }
});

console.log("Number of occurrences of 'the': " + count);




