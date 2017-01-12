// OBJECT LITERALS WITH METHODS
//Functions inside of an object.

var player = {
	//Properties
	name 		: "",
	life		: 100,
	potion		: 25,
	damage		: 0,
	attack		: 0,


	//Methods
	challenge	: function(){
		console.log("FIGHT ME PANZY!!");
	},
	accept		: function(){
		console.log("I ACCEPT YOUR CHALLENGE.")
	},
	heavyslam	: function(){
		console.log(this.name + " attacks with heavy slam!!")
	},
	damagetake	: function(){
		this.damage -= 12
		console.log(this.name + " took " + this.damage + " damage!!")
		if (this.life === 0) {
		console.log(this.name + ", you lose!!")
		}
	},
	damagegive	: function(){
		this.attack += 12
		console.log(this.name + " dealt " + this.attack + " damage!!")
	},

	loss		: function(){
		console.log(this.name + ", YOU LOSE!!");
	},
}

var Grog = Object.create(player);
Grog.name = "Grog";

var Miley = Object.create(player);
Miley.name = "Miley"

	//Access properties
Grog.challenge();

Miley.accept();

Grog.heavyslam(),

Miley.damagetake();
