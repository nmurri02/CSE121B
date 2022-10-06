/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
// Step 2: In the function, return the sum of the parameters number1 and number2
function add(number1, number2) {
    return number1 + number2;
}


// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
// Step 4: Assign the return value to an HTML form element with an ID of sum
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers


function addNumber() {
    let num1 = parseInt(document.querySelector('#addend1').value);
    let num2 = parseInt(document.querySelector('#addend2').value);
    document.querySelector('#sum').value = add(num1, num2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumber);

function divide(number1, number2) {
    return number1 / number2;
}

function divideNumber() {
    let num1 = parseInt(document.querySelector('#dividend').value);
    let num2 = parseInt(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(num1, num2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumber);


let subtract = function (number1, number2) {
    return number1 - number2;
}

let subtractNumber = function () {
    let num1 = parseInt(document.querySelector('#minuend').value);
    let num2 = parseInt(document.querySelector('#subtrahend').value);
    document.querySelector('#difference').value = subtract(num1, num2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumber);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
multiply = (number1, number2) => number1 * number2;

multiplyNumbers = () => {
    let num1 = parseInt(document.querySelector('#factor1').value);
    let num2 = parseInt(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(num1, num2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const today = new Date();
// Step 2: Declare a variable to hold the current year
const currentyear = new Date(year);
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
let date = today.getFullYear(currentyear);
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector('#year')

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector('#array') = numbers
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
document.querySelector('#odds') = numbers.filter((n) => n % 2 == 1)
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
document.querySelector('#evens') = numbers.filter((n) => n % 2 == 0)
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
document.querySelector('#sumOfArray').innerHTML = numbers.reduce(sumofArray);
function sumofArray(total, num) {
    return total + num;
}
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
document.querySelector('#multiplied') = numbers.map(multiplied)
function multiplied(num) {
    return num * 2;
}
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.querySelector('#sumOfMultiplied') = numbers.reduce.map(sumofmultiplied)

//stuck on Step 7, also make sure array method steps 1-7 work
