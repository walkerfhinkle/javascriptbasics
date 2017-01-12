//for IN loops

var footballTeam = "Packers";
for (var char in footballTeam) {
	console.log(footballTeam[char]);
}


console.log("----------------------------------")
//create a for in loop that prints each letter of your fav. show

var favshow = "Travelers";
for (var char in favshow) {
	console.log(favshow[char]);
}

console.log("----------------------------------")
//create a for in loop for your fa. food
//then count each vowel that occurs in that food

var vowelcount = 0;
var favfood = "Cheese";
console.log(favfood.length);
for (letter in favfood) {
	if (favfood[letter].toLowerCase() == "e") {
		vowelcount++
	}
}
console.log("There are " + vowelcount + " vowels in " + favfood);
