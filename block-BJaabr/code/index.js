// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration

function addOne(number) {
  return number+1;
}

addOne(12)
// - Write a Function Expression
let sumone = function addOne(number) {
  return number+1;
}

// - Write an Arrow Function without curly brackets(if possible)
let sumone = number => number+1

// - Write an Arrow Function with curly brackets

let sumone = (number) => {
  return number+1
}



// - Execute the function

sumone(30)

// - Execute the function and store the return value in a variable.
let returnsumone  =sumone(30)

// - What is the typeof returnValue
"number"

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function subtractOne(number) {
  return number-1;
}

subtractOne(12)

// - Write a Function Expression
let subone  = function subtractOne(number) {
  return number-1
}

// - Write an Arrow Function without curly brackets(if possible)

let subone = number=> number-1

// - Write an Arrow Function with curly brackets
let subone = (number) => {
  return number-1
}

// - Execute the function
subone(30)

// - Execute the function and store the return value in a variable.

let returnsubone = subone(30)

// - What is the typeof returnValue
"number"

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration

function addNumber(num1 , num2) {
  return num1+num2
}

// - Write a Function Expression

let addNumbers = function addNumber(num1 , num2) {
  return num1+num2
}

// - Write an Arrow Function without curly brackets(if possible)

let addNumbers = (num1 , num2 )=> num1+num2

// - Write an Arrow Function with curly brackets
let addNumbers = (num1 , num2)=> {
  return num1+num2
}


// - Execute the function

addNumbers (23,12)

// - Execute the function and store the return value in a variable
let returnaddNumbers =addNumbers(23,12)

// - What is the typeof returnValue
"number"

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration

function square(number) {
  return number*number
}

// - Write a Function Expression

let squaring = function square(number) {
  return number * number
}

// - Write an Arrow Function without curly brackets(if possible)

let squaring  = number=> number*number

// - Write an Arrow Function with curly brackets

let squaring = number => {
  return number*number
}

// - Execute the function

squaring(19)

// - Execute the function and store the return value in a variable
let returnsquaring  = squaring(19)

// - What is the typeof returnValue
"number"

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration

function isGreater(x,y) {
  if (x>y) {
    return true;
  }

  else {
    return false ;
  }
}

// - Write a Function Expression

let great  = function isGreater(x,y) {
  if (x>y) {
    return true;
  }

  else {
    return false ;
  }

}

// - Write an Arrow Function without curly brackets(if possible)

let great = (x,y) => x>y ? true : false ;


// - Write an Arrow Function with curly brackets

let great  =(x,y) => {
  if (x>y) {
    return true;
  }

  else {
    return false ;
  }
}

// - Execute the function

great (20,19)

// - Execute the function and store the return value in a variable

let returngreat = great(20,19)

// - What is the typeof returnValue
"boolean"

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration

function oddorEven (number) {
  if (number % 2 !=0) {
    return "Number is odd"
  }

  else {
    return "Number is even"
  }
}

// - Write an anonymous Function Expression

let oddeven = function (number) {
  if (number % 2 !=0) {
    return "Number is odd"
  }

  else {
    return "Number is even"
  }
}

// - Write an named Function Expression

let oddeven = function oddOrEven (number) {
  if (number % 2 !=0) {
    return "Number is odd"
  }

  else {
    return "Number is even"
  }
}

// - Write an Arrow Function without curly brackets (hint: use ternary operator)

let oddeven = number =>  number % 2 !=0 ? "Number is odd"  :  "Number is even"

// - Write an Arrow Function with curly brackets


// - Execute the function

oddeven (33)

// - Execute the function and store the return value in a variable
let returnoddeven = oddeven(33)

// - What is the typeof returnValue
"string"