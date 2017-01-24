//IIFE =  Immediately Invoked Functional Expressions

//build a function that is called greeting - it
//accepts a name and console logs "hello " + name

var walker = {
	name : "walker",
	greeting : function(name){
		return "hello " + name + "!";
	}
};
console.log(walker.greeting("walker"))

//build a function that takes two numbers and adds
//them together and console log the total.
var addNums = function(num1, num2) {
	console.log(num1 + num2);
}

addNums(5,6);