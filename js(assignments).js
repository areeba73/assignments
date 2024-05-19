                        // ASSIGNMENT 1 
/* 

let firstNumber=prompt("enter first number");
    //  we use 'parseInt' to change datatype (string into integer) also we use 'parseFloat' to changing in datatype.
firstNumber = parseInt(firstNumber);
let secondNumber=prompt("enter second number");
secondNumber = parseInt(secondNumber);
     // Calculation
let sum= firstNumber + secondNumber
alert (`sum of the  firstNumber and secondNumber is ${sum}`);   //this is literal template

*/

/*
//  Now BONUS: also subtract, multiply, and divide!

let first=prompt("enter first number");
let second=prompt("enter second number");

//  we use 'number' to change datatype (string into integer)   Another Way instead of parseInt

let total= Number(first) + Number(second)
let subtract= Number(first) - Number(second);
let multiply= Number(first) * Number(second);
let divide= Number(first) / Number(second);   
//we use console.log and alert to output
alert (`sum is ${total} diffrence is ${subtract} product is ${multiply} division is ${divide}`); 

*/

                        // ASSIGNMENT 2

/*

// age of ten students
let age1= Number(prompt("Enter the age of student 1"));
let age2= Number(prompt("Enter the age of student 2"));
let age3= Number(prompt("Enter the age of student 3"));
let age4= Number(prompt("Enter the age of student 4"));
let age5= Number(prompt("Enter the age of student 5"));
let age6= Number(prompt("Enter the age of student 6"));
let age7= Number(prompt("Enter the age of student 7"));
let age8= Number(prompt("Enter the age of student 8"));
let age9= Number(prompt("Enter the age of student 9"));
let age10= Number(prompt("Enter the age of student 10"));
//sum of  the ages
let sum1= age1+age2+age3+age4+age5+age6+age7+age8+age9+age10;
// average formula
let average = sum1 / 10;
console.log(`The Average is  ${average}`);
*/


                        // ASSIGNMENT 3

/*

//radius from the user
let radius= Number(prompt("Enter the radius of the circle"));
//formulas
let diameter= 2*radius;
let circumference= 2*Math.PI*radius;
let area= Math.PI*radius*radius;
// for output
console.log(`Diameter is ${diameter} Circumference is  ${circumference} Area is ${area}`);

*/

                            // ASSIGNMENT 4

/*
let bill= Number(prompt("Enter bill amount"));
let discount; 
//calculate discount   
if(bill>5000) {
    discount= bill*0.15;
} else {
    discount= bill*0.10;
}                    
//calculate payable amount 
let payableAmount = bill-discount;
console.log(`Payable Amount is  " ${payableAmount}`);

*/

                        // ASSIGNMENT 5

/*
let heightInInches=parseFloat(prompt("Enter your height in inches"));
let weightInPounds=parseFloat(prompt("Enter your weight in pounds"));
//BMI Formula
let bmi=(weightInPounds*703)/(heightInInches*heightInInches);
//BMI category
let bmiCategory;

if(bmi<16.0)
{
  bmiCategory= "Severely Underweight";
}else if(bmi>=16.0 && bmi<=18.4)
{
  bmiCategory= "Underweight";
}else if(bmi>= 18.5 && bmi<=24.9)
{
  bmiCategory= "Normal";
}else if(bmi>= 25.0 && bmi<=29.9)
{
  bmiCategory= "Overweight";
}else if(bmi>= 30.0 && bmi<=34.9)
{
  bmiCategory= "Moderately Obese";
}else if(bmi>= 35.0 && bmi<=39.9)
{
  bmiCategory= "Severely Obese";
}else{
  bmiCategory= "Morbidly Obese";
}
// Output the BMI and category
console.log(`Your BMI is ${bmi}and category is ${bmiCategory}`);    

*/

                          // ASSIGNMENT 6

/*

let Age= prompt("What is your age?");
// also we use switch statment 
if (Age<18)
{
  alert("Sorry, you are too young to drive this car. Powering off");
} else if(Age==="18")
{
  alert("Congratulations on your first year of driving. Enjoy the ride!");
} else
{
  alert("Powering On. Enjoy the ride!");
}

*/

                            // ASSIGNMENT 7
/*

// banner
console.log("Welcome to Our Shop");
let Name = prompt("Enter the name of the item you are buying");
let Price= parseInt(prompt("Enter the price of the item"));
let quantity= parseInt(prompt("Enter the quantity you are purchasing"));
// Calculation
let subtotal=quantity*Price;
//output subtotal
console.log(`the quantity is  ${quantity} the name is  ${Name}  and the price is ${Price}.subtotal is ${subtotal}`);

*/

                            // ASSIGNMENT 8
/*
let tweet= prompt("Please enter your tweet:");
let count= tweet.length;
if(count<=140){
  console.log(`That ${count} char tweet will work!`);
 }
else{
  console.log(`Your ${count} character tweet will ${count-140} characters long!`);
}
*/

                           // ASSIGNMENT 9
/*
let Input = prompt("Enter a four-digit integer:");
if(Input.length !==4 || isNaN(Input))
{
  console.log("Please enter a valid four-digit integer.");
} else
{
  //separately show
  console.log(Input[0]); 
  console.log(Input[1]); 
  console.log(Input[2]); 
  console.log(Input[3]);
}
*/

                           // ASSIGNMENT 10

/*
let temp=prompt("Enter temperature.");

if(temp>30)
{
  console.log("Don't forget the factor 50!");
} else if(temp<10)
{
  console.log("Wear a jacket today!");
} else
{
  console.log("It's a T-shirt kind of day!");
}
*/


                           // ASSIGNMENT 11

/*
for (let i=1;i<=100;i++) {
  if (i%5===0)
  {
    console.log("buzz");
    
  } else if (i%3===0)
  {
    console.log("fizz");
  } else if (i%3===0 && i%5===0)
  {
    console.log("fizz buzz");
  } else {
    console.log(i);
  }
}
*/


                           // ASSIGNMENT 12   Functions assignment
/*
function colorMessage(favouriteColor,shirtColor)
{
if (favouriteColor===shirtColor)
{
  console.log(`The shirt is your favorite color!`);
} else
{
  console.log(`That is a nice color`);
}
}*/

                           // ASSIGNMENT 13
/*
let Even=num => num%2===0;
let Odd=num => num%2===1;
*/

                           // ASSIGNMENT 14

/*
function capitalize(str)
{
  console.log(`str.charAt(0).toUpperCase() str.slice(1)`);
}
capitalize('eggplant');
capitalize('pamplemousse');
capitalize('squid');
*/

                            // ASSIGNMENT 15

/*
console.log(2*3); 
console.log(9*9); 
console.log(5*4); 
// to multiply two numbers
function multiply(num1, num2)
{
return num1 * num2;
}
console.log(multiply(2,3)); 
console.log(multiply(9,9)); 
console.log(multiply(5,4)); 
*/

                      // ASSIGNMENT 16

/*
function finalGrade(grade1, grade2, grade3) 
{
if (grade1 < 0 || grade1 > 100 || grade2 < 0 || grade2 > 100 || grade3 < 0 || grade3 > 100) {
  return 'You have entered an invalid grade.';
}
let average = (grade1 + grade2 + grade3) / 3;
if(average >= 90 && average<= 100) {
  return 'A';
} else if (average >=80 && average < 90) {
  return 'B';
} else if (average >=70 && average < 80) {
  return 'C';
} else if (average>=60 && average < 70) {
  return 'D';
} else 
{
  return 'F';
}
}
*/

                      // ASSIGNMENT 17

/*
function reverseArray(arr) {
  const reversedArray = [];
for (let i = arr.length - 1; i >= 0; i--)
{
  reversedArray.push(arr[i]);
}
  return reversedArray;
}
const sentence = ['sense.', 'make', 'all', 'will', 'This'];
console.log(reverseArray(sentence)); // Output: ['This', 'will', 'all', 'make', 'sense.']
*/


                      // ASSIGNMENT 18
/*
// calculate life phase on age
function lifePhase(age) {
if (age >= 0 && age <= 3) {
  return 'baby';
} else if (age >= 4 && age <= 12) {
  return 'child';
} else if (age >= 13 && age <= 19) {
  return 'teen';
} else if (age >= 20 && age <= 64) {
  return 'adult';
} else if (age >= 65 && age <= 140) {
  return 'senior citizen';
} else {
  return "This is not a valid age";
}
}
// Example
console.log(lifePhase(5)); 
console.log(lifePhase(25)); 
console.log(lifePhase(80));
console.log(lifePhase(-5)); 
console.log(lifePhase(150));
*/


                      // ASSIGNMENT 19 if else program with functions 
/*
function fizzBuzzRecursive(num) {
if (num <= 0) {
 return;
}
fizzBuzzRecursive(num - 1);
if (num % 3 === 0 && num % 5 === 0) {
  console.log("fizz buzz");
} else if (num % 3 === 0) {
  console.log("fizz");
} else if (num % 5 === 0) {
console.log("buzz");
} else 
{
  console.log(num);
}
}

fizzBuzzRecursive(100);
*/


                  // ASSIGNMENT 20 if else program with functions 
/*
 let tweet = prompt('Please enter your tweet: ');
function tweet(tweet) {
let count = tweet.length;

if (count <= 140){
console.log(That ${count} char tweet will work!);
}
else{
console.log(Your ${count} character tweet will ${count-140} characters long!);
}
}
*/