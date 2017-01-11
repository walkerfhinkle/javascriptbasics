

var age = 26

if (age >= 18) {
	console.log("You can vote!");
}
if (age >= 21) {
	console.log("You can also drink!");
} 
if (age >= 25) {
	console.log("AND you can rent a car!");
} else if (age < 21) {
	console.log("You can not drink.");
}

//else if - to pinpoint a specific demand

//CHALLENGE: BRONZE
//expand upon our a simple login.
// create 2 variables 1 for your users username, 2 for the boolean condition then another to check if the user is an admin
// If login is true then print "You're Logged In!"
// If login is true and the user is a admin, print "This is the dashboard for your employee records you have master control"
// If Login is true and the user is a manager, print "This is the dashboard for your employee records, you can only read but not create users"
// If login is true and the user is a employee, print "clock in and clockout please" 
//Else if login is false then print "Please Sign In"

var isloggedin = true
var firstname = "walker"
var ismanager = false
var isadmin = false
var isemployee = true

if (isloggedin) {
	console.log("Welcome " + firstname + "!");
}
	if (ismanager) {
	console.log("This is the dashboard for your employee records, you can only read but not create users");
	} else if (isadmin) {
	console.log("This is the dashboard for your employee records you have master control");
	} if (isemployee) {
	console.log("Clock in and out please :)")
} else {
	console.log("Please Sing In")
}

//CHALLENGE: SILVER
/*
Create an if statement that has several conditions.
Pretend that we will play four total games next year against the patriots.
Deal with the Patriots record versus our record. In other words, if our record was better, 
talk some smack. If not, you should still talk some smack, but in 
a different way. If the records were the same, talk some smack. 
*/

var patriotwins = 6
var coltswins = 8

if (coltswins >= patriotwins) {
	console.log("patriots ain't shisky man!")
} if (coltswins < patriotwins) {
	console.log("patriots are cool but uh..")
} else if (coltswins === patriotwins) {
	console.log("you're goin' down!")
}

//CHALLENGE: GOLD

/*1. Write a program that prompts your users in the browser to enter a
number from 1 to 5 about how optimistic they are about the Colts next year.
2. Have a different response for each number.

*HINT*
you have to build this in relp.it 
Research prompt*/

//in repl.it
