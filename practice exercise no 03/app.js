

// Coding Question 1: Write a function in JavaScript called roundNumber() that takes a number as input and returns the number rounded to the nearest integer.
// Hint: Consider using the Math.round() method to round the input number to the nearest integer.


  var round = document.getElementById("round")
  var round_result = document.getElementById("round_result")


  function roundIt() {
    var Result = Math.round(round.value)
    round_result.innerText = Result
  }



//   Coding Question 2: Create a function called generateRandomInRange(min, max) that generates a random integer between min and max (inclusive) in JavaScript.
//   Hint: You can use Math.random() to generate a random number between 0 and 1, then scale and shift it to fit within the specified range.










// Coding Question 3: Write a JavaScript function called convertToNumber(str) that takes a string as input and converts it into a number. Ensure the function returns NaN if the string cannot be converted into a valid number.
// Hint: Look into the parseInt() and parseFloat() functions in JavaScript. Make sure to handle cases where the string is not a valid number. 


function convertToNumber(str) {
    let number = parseFloat(str);

    
    return isNaN(number) ? NaN : number;
  }

  function convertAndDisplay() {
    
    let inputValue = document.getElementById("inputField").value;

    let result = convertToNumber(inputValue);

    
    document.getElementById("result").textContent = isNaN(result) ? "Invalid input" : "Converted number: " + result;
  }




 

  // Coding Question 4: Implement a JavaScript function called truncateDecimal(num, decimals) that truncates a number num to a specified number of decimals.
// Hint: You may want to multiply the input number by a power of 10, truncate the decimal part, and then divide it back to the original power of 10 to achieve the desired truncation.

function truncateDecimal(num, decimals) {

     let power = Math.pow(10, decimals);
  
    let shiftedNum = num * power;
    // console.log(shiftedNum)
  
    let truncatedNum = Math.trunc(shiftedNum);
  
    let result = truncatedNum / power;
  
    return result;

}

console.log(truncateDecimal(3.14159, 2));   
console.log(truncateDecimal(10.5678, 1));   
console.log(truncateDecimal(123.456, 0));   
  





/*




Coding Question 5: Develop a JavaScript function named formatNumber(num, decimalPlaces) that formats a number num to a string representation with the specified number of decimal places decimalPlaces. Ensure that the function returns a string even if the input is not a valid number.
Hint: Use the .toFixed() method to control the number of decimal places. Remember to handle non-numeric inputs gracefully to prevent errors. /** */


    


function formatNumber(num, decimalPlaces) {

    let parsedNum = parseFloat(num);
  
    let formattedNum = parsedNum.toFixed(decimalPlaces);
  
    return formattedNum; 
  }
  
 
  console.log(formatNumber(3.14159, 2));    
  console.log(formatNumber(1033.5678, 1));    
  console.log(formatNumber(123.456, 0));   
  console.log(formatNumber("Hello", 2));   
  
