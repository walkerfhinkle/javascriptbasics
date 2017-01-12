function setline(){
	console.log("-----------------------------------")
}

function hello(){
	console.log("Hello World");
}

hello();
//making a function with greeting
function greeting(name) {
	return "Good'ay " + name + "!";
}

greeting("Walker");
var addGreeting = greeting("Walker") + " how are you doing today?";
console.log(addGreeting);


//adding a number to functions
function printNumber(){
	console.log(1);
}

printNumber();

function sumSum(num1, num2){
	return num2 + num1;
}

function sumNum(num1, num2){
	return num2 * num1;
}

function numSum(num1, num2){
	return num1 / num2;
}

console.log(numSum(6,2));

console.log(sumNum(2,5));

console.log(sumSum(1,4));

function calculatPriceIndiana(quantity, price){
	var tax = 0.07;
	var tottaltax = quantity * price * tax
	var totalPrice = tottaltax + quantity * price

	return totalPrice;
}

console.log(calculatPriceIndiana(17, 5))

//built in functions example
var today = new Date();
console.log(today.toDateString());

function checkOdd(num){

	if (num % 2 === 0){
		return "Yo dawg, "+ num + " is even."
	} else {
		return "Nah dawg, "+ num + " is odd."
	}

}
console.log(checkOdd(12))

function divByThree(num){

	if (num % 3 === 0){
		return "Breh, shit's divisiable by three."
	} else {
		return "Breh, you must be crazy."
	}
}
console.log(divByThree(9))

setline();

function twoStrings(eager, allen){
	return eager + " " +allen
}
console.log(twoStrings("nevermore", "nevermore"))

function hourlyWages(hours, pay){
	var tax = 0.7;
	var aftertax = hours * pay * tax 

	return aftertax;
}
console.log(hourlyWages(8, 15))

//mistakes can be solved by using functions
// console.log("Hello Worl")
// console.log("Hello World")
// console.log("hello World")
// console.log("Hell World")
// console.log("Hello wld")


