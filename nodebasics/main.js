//Require

var player = require('./player.js');

var xank = player();
xank.name = "Xank";
console.log(xank.name);

var julie = player();
julie.name = "Julie";
console.log(julie.name);

var monster = require('./monster.js');

var blarganz = monster();
blarganz.name = "Blarganz";
blarganz.noise = "GARGHH!!";
blarganz.attack = "Maw";
console.log(blarganz.name);
console.log(blarganz.noise);
console.log(blarganz.name + " attacks " + julie.name + " with " + blarganz.attack + "!")

