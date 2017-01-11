var firstname = "walker"

var age = 27
var message = firstname + ": " + age
console.log(typeof message)
console.log(typeof age)

//quotes?
var lastname = "hinkle"
console.log(typeof lastname)
var greetings = 'walker says "How\'s your day?"'
console.log(greetings)

//string methods
console.log(greetings.length)
console.log(greetings.toUpperCase())
console.log(greetings.toLowerCase())
console.log(greetings.split(" "))
console.log(greetings.slice())

//Challenge: Bronze
//Write a string that has two variables. Output should be something like this: 
//I graduated from TooCoolForSchool High School in 1994.

var graduation = "1994"
var school = "TooCoolForSchool"
var message = 'I graduated from' + " " + school + 'High School in' + " " + graduation
console.log(message)

//Challenge: Silver
//Create one variable that holds a string that prints out three other variables. The three other //variables should be the make, model, and year of your car.
// “I drive a 1968 Chevy Impala.”

var make = "Toyota"
var model = "Avalon"
var year = "2016"
var message2 = 'I drive a ' + year + " " + " " + make + " " + model
console.log(message2)

//Challenge: Gold
//Create a variable called age. Give the age a value.
//Use a conditional to check the age.
//If the age is 18, console.log('You are an adult');
//If the age is less than 18, console.log('You are a minor');

var age = 27

if (age >= 18){
	greeting  = "You are an adult"
} else {
	greeting = "You are a minor"
}
console.log(greeting)