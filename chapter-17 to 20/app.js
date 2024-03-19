// assignment of chapter 17 to 20

// task no 01

var multiDimensionalArray = [[]]


// task no 02     


var multiDimensionalArray = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
]

for (let i = 0; i < multiDimensionalArray.length; i++) {
    document.write(multiDimensionalArray[i].join(" "))

}


// task no 03


for (let i = 1; i <= 10; i++) {
    console.log(i)

}




// task no 04


var userNumber = prompt("enter number of table")
var userindex = prompt("enter index numbers")


console.log(`multiplication table for ${userNumber} and length is ${userindex} `)

for (let i = 1; i <= userindex; i++) {
    console.log(`${userNumber} x ${i} = ${userNumber * i}`)

}



// task no 05



fruits = ["apple", "banana", "mango", "orange", "strawberry"]

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}



// task no 06 

// (a)


for (var i = 1; i <= 15; i++) {
    console.log("Counting")
    console.log(i)

}


// (b)


for (var i = 10; i >= 1; i--) {
    console.log(`reverse counting:`)
    console.log(i)

}


// (c)



for (var i = 0; i <= 20; i += 2) {
    console.log(`even number:`)
    console.log(i)

}


// (d)


for (var i = 1; i <= 19; i += 2) {
    console.log(`odd number:`)
    console.log(i)
}


// (e)


for (var i = 2; i <= 20; i += 2) {
    console.log(`series:`)
    console.log(i + "k")
}


// task no 07




var foodArray = ["cake", "apple pie", "cookie", "chips", "patties"] 


var flag = false;

var userInput = prompt("search item acc to your need");
for (let i = 0; i < foodArray.length; i++) {
    if ( userInput === foodArray[i] ) {
       console.log(`${userInput}  is available`)
        alert(`${userInput}  is available`)
        flag = true;
        break;
    }
}

if (flag === false) {
    console.log(`${userInput} is not available`)
    alert(`${userInput} it is not available`)
}


// task no 08

let maximumNumber = [24, 53, 78, 91, 12];

let max = maximumNumber[0]; 


for (let i = 1; i < maximumNumber.length; i++) {
    if (maximumNumber[i] > max) {
        max = maximumNumber[i];
    }
}

console.log("The largest number in the array is:", max);






// task no 09



let minimumNumber = [24, 53, 78, 91, 12];

let min = minimumNumber[0]; 


for (let i = 1; i < minimumNumber.length; i++) {
    if (minimumNumber[i] < min) {
        min = minimumNumber[i];
    }
}


console.log("The smallest number in the array is:", min);



// task no 10



for (let i = 0; i <=100; i++) {
    if(i % 5 === 0){
            console.log(i)
    }
    
}