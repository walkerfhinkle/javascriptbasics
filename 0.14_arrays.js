

var nameOne = "paul"
var nameTwo = "gavin"
var nameThree = "vern"
var nameFour = "lisa"
var nameFive = "kenn"

//this is how to create a JS array
//  names =    1        2       3       4       5
var names = ["paul", "gavin", "vern", "lisa", "kenn"];
console.log(names[2])

//same example using numbers (begin count from 0 to 6)
var nums = [1, 2, 3, 4, 5, 6, 4501];
console.log(nums[6])

//can we use a for in loop to iterate and console.log each name in names?

console.log(names);
for (name in names) {
	console.log(name[names]);
}

//create an array of fav. candy bars
var candy = ["snickers, twix, reeses"];
console.log(candy);
candy.push("Peanut Butter Cups");
console.log(candy);
candy.pop();
console.log(candy);

//how to remove a specific element of an array
//.indexOf will return the index of where a value is located in the array
//.splice will allow us to remove (and change) the item from the array
console.log(candy.indexOf("SPK"));
candy.splice(0, 1);
console.log(candy);

