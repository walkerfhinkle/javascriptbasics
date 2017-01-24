//JSON is an acronym for: Javasricpt Object Notation
//An object can hold much more data/information
//Nested Arrays \/ \/ \/
var names = [["walker", "gavin", "turner", "virn"],["jackson", "mia", "karl"]];
//console.log(names[1][2])
//
var items = [
	{
		"id": 1,
		"name": "Green Door",
		"price": 12.50,
		"tags": ["home", "green", "vinyl"]
	},

	{
		"id": 2,
		"name": "Red Door",
		"price": 12.50,
		"tags": ["home", "red", "cheap wood"]
	},

	{
		"id": 3,
		"name": "Blue Door",
		"price": 35.00,
		"tags": ["home", "blue", "bulsa wood"]
	}
];
//console.log(items[2].price)

//Can you create a For Loop that console logs each
//objects name?
var creams = [
	{
		"id": 1,
		"name": "Chocolate Chip",
		"price": 2.50,
		"tags": ["chocolate", "ice cream", "sweet"]
	},
	{
		"id": 2,
		"name": "Cookie Dough",
		"price": 2.75,
		"tags": ["cookie dough", "ice cream", "sweet"]
	}
];
for (var i = 1; i < creams.length; i++) {
	console.log(creams[i].price);
}