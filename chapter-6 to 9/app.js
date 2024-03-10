

document.write(`<h3>task no 1</h3>`)

var num = 10

document.write(`<h4>the value of num is ${num}</h4>`)

var num2 = ++num

document.write(`<h4>the value of ++num is ${num2}</h4>`)
document.write(`<h4>now the value of num is ${num}</h4>`)

var numer = 11
var numberr = numer++

document.write(`<h4>the value of numer is ${numberr}</h4>`)
document.write(`<h4>the value of numer++ is ${numer}</h4>`)


var decrement =  11
var decrementation = --decrement



document.write(`<h4>the value of decrement is 11 ::: predecrement ${decrement}</h4>`)
document.write(`<h4>now the value of --decrement  is ${decrementation}</h4>`)



var postdecrement = 11
var postdecrementation = postdecrement--




document.write(`<h4>the value of postdecrement is  ${postdecrement}</h4>`)
document.write(`<h4>now the value of postdecrement  is ${postdecrementation}</h4>`)




document.write(`<h3>task no 2</h3>`)

var a = 2
document.write(`<h4>the value of a is ${a}</h4>`)

var b = 1
document.write(`<h4>the value of b is ${b}</h4>`)

var result = --a - --b + ++b + b--

document.write(`<h4>after doing the arithmatics : --a - --b + ++b + b-- </h4>`)

document.write(`<h4>the result is ${result}</h4>`)





document.write(`<h3>task no 3 is on pop up message</h3>`)

var userInput = prompt('Enter your Name')

if (userInput) {
    alert('Assalam 0 Alaikum')
}
else{
    alert('enter your correct name')
}


document.write(`<h3>TASK NO 4</h3>`)


var user_s_Input = prompt("enter your number")
document.write(`<h5> ${user_s_Input} x 1 = ${user_s_Input*1} </h5>`)
document.write(`<h5> ${user_s_Input} x 2 = ${user_s_Input*2} </h5>`)
document.write(`<h5> ${user_s_Input} x 3 = ${user_s_Input*3} </h5>`)
document.write(`<h5> ${user_s_Input} x 4 = ${user_s_Input*4} </h5>`)
document.write(`<h5> ${user_s_Input} x 5 = ${user_s_Input*5} </h5>`)
document.write(`<h5> ${user_s_Input} x 6 = ${user_s_Input*6} </h5>`)
document.write(`<h5> ${user_s_Input} x 7 = ${user_s_Input*7} </h5>`)
document.write(`<h5> ${user_s_Input} x 8 = ${user_s_Input*8} </h5>`)
document.write(`<h5> ${user_s_Input} x 9 = ${user_s_Input*9} </h5>`)
document.write(`<h5> ${user_s_Input} x 10 = ${user_s_Input*10} </h5>`)




document.write(`<h3>TASK NO 5</h3>`)


var subject1 = prompt("Enter name of first subject:");
var subject2 = prompt("Enter name of second subject:");
var subject3 = prompt("Enter name of third subject:");

var totalMarks = 100

var obtainedMarks1 = +prompt('enter your obtained marks for subject 1')
var obtainedMarks2 = +prompt('enter your obtained marks for subject 2')
var obtainedMarks3 = +prompt('enter your obtained marks for subject 3')


var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;

var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;


document.write("<h2>Subject Marks</h2>");
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("<tr><td colspan='2'>Total</td><td>" + totalObtainedMarks + "</td></tr>");
document.write("<tr><td colspan='2'>Percentage</td><td>" + percentage.toFixed(2) + "%</td></tr>");
document.write("</table>");
