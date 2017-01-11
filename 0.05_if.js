var isOn = true;
var isHot = true;

//I
if(isOn === true){
	console.log("This light is on. It's too bright, dud.");
}

if(isOn){
	console.log("Dud, turn that music off.");
}

///   && = and
if(isOn && isHot){
	console.log("Dud, that music is on, and it is so hot.")
}

// if/else

var elevatorUp = true;
var elevatorDown = true;
var elevatorOpen = true;
var elevatorBroken = true;
var elevatorStuckAndWeAreOnIt = true;
var elevatorNumber = 13;

if (elevatorUp === true) {
	console.log("Going Up");
} else {
	console.log("Going Down");
}

// Write one for elevator broken.

if (elevatorBroken === true) {
	console.log("You're F@&*ed")
} else {
	console.log("Enjoy the ride")
}

if (elevatorStuckAndWeAreOnIt) {
	console.log("My God, I'm about to pee myself")
} else {
	console.log("Enjoy the ride")
}

//usage with boolean

if (elevatorBroken && elevatorStuckAndWeAreOnIt) {
	console.log("Help will arrive soon")
} else {
	console.log("Enjoy the ride")
}

//CHALLENGE: Bronze
//WRITE YOUR OWN CONDITIONAL USING BOOLEANS AND LOGICAL OPERATORS.
//Come up with a simple example

var teacherarriveslate = true;
var teacherarrivesontime = true;

if (teacherarriveslate === true) {
	console.log("Woo! No Class!")
}	else {
	console.log("Enjoy the course!")
}
//Challenge: Silver
//Create a simple login console message.
// create 2 variables 1 for your users firstName, 2 for the boolean condition
// If login is true then print "You're Logged In!"
//Else if login is false then print "Please Sign In"

var firstName = "Walker";
var password = "0807"
var loggedin = true;
var walker = true;
var turner = true;

if (loggedin && walker) {
	console.log("Welcome "+ firstName + "!")
} else {
	console.log("Try again")
}

//CHALLEGE: Gold
//Set up a var with bankAccount and a var with debt.
//Also set up a difference var.
//Do some logic to show whether or not you will pay off your debt or prints out a message if you have extra money.

var bankAccount = 1000
var debt = 750
var remainder = bankAccount % debt

if (remainder >= 0) {
	console.log("Debt is paid!")
} else {
	console.log("You're s**t out of luck, man.")
}