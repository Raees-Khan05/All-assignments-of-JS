
// document.write(`<h1>assignment No 9 to 11</h1>`)


// document.write(`<h3>task no 01 is on pop up alert</h3>`)

var cityName = prompt("enter your city name")

if (cityName == 'karachi') {
    alert('welcome to the city off lights')
} else {
    alert('karachi ajao phir bat krenge')
}

// document.write(`<h3>task no 02</h3>`)

var gender = prompt("enter your gender please")

if (gender == 'male') {
    alert("hello sir")
} else if (gender == 'female') {
    alert("hello ma'am")
} else {
    alert('enter your correct gender')
}


// document.write(`<h3>task no 03</h3>`)

var colour = prompt("enter any signal color")
if (colour == 'red') {
    alert("must stop")
} else if (colour == 'yellow') {
    alert("ready to move")
}else if (colour == 'green') {
    alert("move now")
}else{
    alert('you had entered wrong colour name')
}

// document.write(`<h3>task no 04</h3>`)

var fuelValue = +prompt('enter your amount of fuel in litres ??')
 if (fuelValue <= 0.25) {
    alert("please refill the fuel in your car")
 }else{
    alert("you have enough fuel bro")
 }


// document.write(`<h3>task no 05</h3>`)


var urdu = parseFloat(prompt("Enter marks obtained in urdu:"));
var english = parseFloat(prompt("Enter marks obtained in english:"));
var physics = parseFloat(prompt("Enter marks obtained in physics:"));

var totalMarks = parseFloat(prompt("Enter total marks of all three subjects:"));

var totalObtainedMarks = urdu + english + physics;

var percentage = (totalObtainedMarks / totalMarks) * 100;

if (percentage >= 90) {
    alert("A+1  Grade");
} else if (percentage >= 80) {
    alert("A Grade");
} else if (percentage >= 70) {
    alert("B Grade");
} else if (percentage >= 60) {
    alert("C Grade");
} else if (percentage >= 50) {
    alert("D Grade");
} else {
    alert("Fail");
}

document.write(`<h4>Total marks: ${totalMarks}</h4>`);
document.write(`<h4>Total obtained marks: ${totalObtainedMarks}</h4>`);
document.write(`<h4>Percentage: ${percentage.toFixed(2)}</h4>`); 





// document.write(`<h3>task no 06</h3>`)

var secretNum = 5
var Users_Input = +prompt("guess any number between 1 t0 10")

if (Users_Input === secretNum) {
    alert("Bingo ! Correct answer")
}else{
    alert("Your answer is wrong!")
}




// document.write(`<h3>task no 07</h3>`)


var checkingNumber = +prompt("enter a Number for checking wether it is divisible by 3?")

if (checkingNumber % 3 === 0) {
    alert("Thew number is divisible by 3")
}else{
    alert("the number is not divisible by 3")
}


document.write(`<h3>task no 08</h3>`)

var Number_valuE = +prompt("enter any number for checking it is odd or even?")

if (Number_valuE % 2 === 0) {
    alert("the number is even")
}else{
    alert("the number is odd")
}






// document.write(`<h3>task no 10</h3>`)

var Temperature = +prompt("enter current temperature of your city")
if (Temperature >= 40) {
    alert("It is too hot outside")
}else if (Temperature >= 30) {
    alert("The weather today is normal")
}else if (Temperature >= 20) {
    alert("Todays weather is cooool")
}else if (Temperature >= 10) {
    alert("OMG! today's weather is so cool")
}else{
    alert("baraf q nhi horhi is pe??")
}






// document.write(`<h3>task no 11</h3>`)


var input_1 = +prompt("enter first number")
var input_2 = +prompt("enter second number")
var input_3 =  prompt("enter any operation ,,  + , - , / , * , %")

var result;

if (input_3 == '+') {
    alert(result = input_1 + input_2)
}else if (input_3 == '-') {
    alert(result = input_1 - input_2)
}else if (input_3 == '/') {

    if(input_2 === 0){
          alert("Can not divide numbers by zero (0)")
    }else{

        alert(result = input_1 / input_2)
    }
}else if (input_3 == '*') {
    alert(result = input_1 * input_2)
}else if (input_3 == '%') {
    alert(result = input_1 % input_2)
}else{
    alert("enter correct operation please")
}




