



for (let i = 1; i <= 10; i++) {
    console.log(i);

}


console.log("even numbers")


for (let i = 2; i <= 20; i += 2) {
    console.log(i);

}



console.log("Odd numbers")


for (let i = 1; i <= 20; i += 2) {
    console.log(i);

}




var number = 5;


let factorial = 1;


for (let i = 1; i <= number; i++) {
    factorial *= i;
}

console.log(`The factorial of ${number} is: ${factorial}`);






console.log("table of 7")



for (i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${i * 7} `)
}




console.log("table of 8")



for (i = 1; i <= 10; i++) {
    console.log(`8 x ${i} = ${i * 8}`)
}



console.log("table of 9")



for (i = 1; i <= 10; i++) {
    console.log(`9 x ${i} = ${i * 9}`)
}



console.log("table of 10")



for (i = 1; i <= 10; i++) {
    console.log(`10 x ${i} = ${i * 10}`)
}




var number = 123;


var numberString = number.toString();


var sum = 0;


for (let i = 0; i < numberString.length; i++) {

    sum += parseInt(numberString[i]);
}


console.log(`The sum of digits of ${number} is: ${sum}`);





var string = "Hello world!"

var strLength = string.length;

var reverseString = '';

for (var i = strLength - 1; i >= 0; i--) {
    reverseString += string[i];
}

console.log(reverseString)







for (var i = 1; i <= 10; i++) {
    console.log(i * i)
}






var numbers = [10, 5, 30, 53, 32, 499, 354]

var largestNumber = 0
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
        largestNumber = numbers[i]
    }
}
console.log('the largest number is' + largestNumber)


var arrayNumbers = [3 , 7 , 2 , 9 , 5]

var smallestNumber = arrayNumbers[0];

for (var i = 0 ; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] < smallestNumber) {
        smallestNumber = arrayNumbers[i]
    }
}
console.log('the smallest number is' + smallestNumber)





console.log("Fibonacci series")


var term1 = 0;
var term2 = 1;

console.log(term1)
console.log(term2)

for (var i = 2; i <= 15; i++) {
    var newTerm = term1 + term2;
    console.log(newTerm)

    term1 = term2;
    term2 = newTerm
}