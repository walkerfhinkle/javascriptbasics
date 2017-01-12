//Empty Object
var emptyOject = {};

//Object with Properties
var facebookFriend = {
	name			: "",
	age				: 0,
	vocation		: "",
	inRelationship	: true,
	tyRelationship	: "",
};

//.name (the .) is a "dot operator"
facebookFriend.name = "Jona";
console.log(facebookFriend.name);

facebookFriend.age = "40";
facebookFriend.tyRelationship = "Married";
console.log(facebookFriend.name + " just got " + facebookFriend.tyRelationship + "! Tell him congrats!");
console.log(facebookFriend.age);
console.log(facebookFriend.name + " just turned " + facebookFriend.age + "!");

//if(facebookFriend.inRelationship){
	//console.log(facebookFriend.name + " is in a relationship! Wo0ptie F***in do!")
//}

