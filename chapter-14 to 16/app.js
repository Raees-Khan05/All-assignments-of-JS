
var  Students = []

console.log(Students)

var Stu_dents = new Array();

console.log(Stu_dents)





var stringArray = ["hassan" , "usman" , "ismail" , "ibrahim"]

console.log(  stringArray)


var NumberArray = [10 , 20 , 30 , 40 , 50 , 60 , 70 , 80 , 90 , 100]

console.log(   NumberArray)

var booleanArray = [true , false , true , false]

console.log( booleanArray)


var mixedArray = ['X-khAN' , true , 100 , "hero"]

console.log(  mixedArray)

var availabeEducation = ['SSC', 'HSC' , 'BCS' , 'BS' , 'BCOM' , 'MS' , "P.PHILL" , "PHD"]

document.write(`<h3>list of education qualifications in Pakistan</h3><ol><li>${availabeEducation [0]}</li>

<li>${availabeEducation [1]}</li>
<li>${availabeEducation [2]}</li>
<li>${availabeEducation [3]}</li>
<li>${availabeEducation [4]}</li>
<li>${availabeEducation [5]}</li>
<li>${availabeEducation [6]}</li>
<li>${availabeEducation [7]}</li>
</ol>`)




// 2nd task

var studentNames = ["bilal" , "usman" , "ahmed"];

var studentsScores = [300 , 310 , 360];

var totalScore = 500

document.write(`score of ${studentNames[0]} is ${studentsScores[0]} and percentage is ${studentsScores[0]/totalScore * 100}<br>`)

document.write(`score of ${studentNames[1]} is ${studentsScores[1]} and percentage is ${studentsScores[1]/totalScore * 100}<br/>`)

document.write(`score of ${studentNames[2]} is ${studentsScores[2]} and percentage is ${studentsScores[2]/totalScore * 100}`)




var colors = ["red" , "blue" , "green" , "yellow"]
console.log(colors)

var user_input = prompt("enter your colour name to add in start")

colors.unshift(user_input)
console.log(colors)



var colors = ["green" , "gray" , "black" , "pink"]
console.log(colors)

var user_input = prompt("enter your colour name to add in last or end")

colors.push(user_input)
console.log(colors)



var colors = ["green" , "gray" , "black" , "pink"]
console.log(colors)

colors.splice(0,0,"yellow", "brown")
console.log(colors)


var colors = ["green" , "gray" , "black" , "pink"]
console.log(colors)

colors.shift()
console.log(colors)



var colors = ["green" , "gray" , "black" , "pink"]
console.log(colors)

colors.pop()
console.log(colors)



var colors = ['brown', 'magenta', "silver", 'white' , "cyan" , "orange" , "blue"]
console.log(colors)

var user_index = prompt('enter the index number where i write name of color')
var userInputOfColor = prompt('enter the color name')

colors.splice(user_index , 0 , userInputOfColor)

console.log(colors)



var colors = ['brown', 'magenta', "silver", 'white' , "cyan" , "orange" , "blue"]
console.log(colors)

var user_indexing = prompt('enter the index number from where i delete')
var users_inputs = prompt("how many colors would you want to delete?")

colors.splice(user_indexing , users_inputs)

console.log(colors)




var cities = ["karachi", "lahore" , "quetta" , " islamabad" ,"peshawar"]
document.write(`<h4>Cities list: <br/> ${cities}</h4>`)


var selectiedCities = cities.slice(3)
document.write(`<h4>Selected Cities list: <br/> ${selectiedCities} </h4>`)


var arr = ["this" , "is" , "my" , "cat"]
var method = arr.join(" ")

console.log(method)

document.write(`<h3>array:<br>${arr}</h3>`)
document.write(`<h3>string:<br>${method}</h3>`)


 

var values = [];

values.unshift("keyboard")
values.unshift("mouse")
values.unshift("printer")
values.unshift("monitor")

document.write(`<h3>Devices: ${values[0]}, ${values[1]} , ${values[2]} ,${values[3]}</h3>`)

console.log(values[0]);
console.log(values[1]);
console.log(values[2]);
console.log(values[3]);


var valuableValues = []

valuableValues.push("printer")
valuableValues.push("monitor")
valuableValues.unshift("mouse")
valuableValues.unshift("keyboard")



document.write(`<h3>Devices: ${valuableValues[0]}, ${valuableValues[1]} , ${valuableValues[2]} ,${valuableValues[3]}</h3>`)


console.log(valuableValues[0]);
console.log(valuableValues[1]);
console.log(valuableValues[2]);
console.log(valuableValues[3]);








let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];


document.write("<select>");


document.write("<option value='" + manufacturers[0] + "'>" + manufacturers[0] + "</option>");
document.write("<option value='" + manufacturers[1] + "'>" + manufacturers[1] + "</option>");
document.write("<option value='" + manufacturers[2] + "'>" + manufacturers[2] + "</option>");
document.write("<option value='" + manufacturers[3] + "'>" + manufacturers[3] + "</option>");
document.write("<option value='" + manufacturers[4] + "'>" + manufacturers[4] + "</option>");
document.write("<option value='" + manufacturers[5] + "'>" + manufacturers[5] + "</option>");


document.write("</select>");



