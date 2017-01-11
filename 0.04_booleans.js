//booleans express either true or false
//on or off
var tired = false;
var hungry = true;

//equal sign (=) assigns information
//double equal sign (==) evaluates values "true or false"
//triple equal sign (===) evaluates values and TYPE of variable

var isTrue = 1 == 1;
console.log(isTrue);

//"1" is a string. 1 (number) cannot be equal to the TYPE of string - "1" (string).

var numTwo = 1 === "1";
console.log(numTwo);

var numThree = 3;
var strThree = "3";
var checkTrue = numThree == strThree;
console.log(checkTrue);
console.log(typeof numThree);
console.log(typeof strThree);

//  Operator  Meaning
//  ==        Equality
//  ===       Strict equality
//  !=        Inequality (NOT equal)
//  !==       Strict inequality
//  >         Greater than
//  >=        Greater than or equal
//  <         Less than
//  <=        Less than or equal

var num1 = 35
var num2 = 34
console.log(num1 != num2)

var num1 = 35
var num2 = "35"
console.log(num1 !== num2)

/*CHALLENGE: Bronze
Create 5 boolean variables that would be used in everyday programming
Using the boolean variables created above integrate logical and comparison operators to return true and false statements in the console.
*/

var parentage = 27
var childage = 5
console.log(parentage > childage)

var age = 18
if(age >= 18){
	greeting = "You can smoke"
} else {
	greeting = "You CAN'T smoke"
}
console.log(greeting)


/*CHALLENGE: Silver
Write your own conditional that deals with Boolean Operators and Boolean Logic. Get as complicated as you want, just make sure it runs. Sign up for an account on Repl.io. Add the code there and send it to James, Paul, and Kenn. You can do that on Slack by using the @ symbol for all of us.
*/

var hoursworked = 8
var basepay = 15
var taxes = .7
var gross = hoursworked * basepay
var aftertax = gross * taxes
console.log(gross != aftertax)
console.log(gross * taxes)

var aftertax = 84

if (aftertax >= 70){
	greeting  = "You make enough to survive!"
} else {
	greeting = "You're broke af."
}
console.log(greeting)

/*CHALLENGE: Gold 
I want to order some Colts gear online(Jona, go ahead with the Bengals(boo)), and I'm not sure 
which courier service to use yet. I want to know which one to use
for Next Day Air, 2 day air, 3 day ground, and whenever. Can you write
an if/else statement that helps me pick the best one? It's just your opinion here.
*/


