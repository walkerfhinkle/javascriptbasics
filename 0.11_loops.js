
//indexing- W=0, a=1, l=2, etc
//to ACCESS the index, use [] and the index number inside them
var name = "Walker Hinkle"
console.log(name.length);
console.log(name[1]);
console.log(name[0] + name[1] + name[2] + name[3].toUpperCase() + name[4] + name [5]);

//DRY - Don't Repeat Yourself
//WET - Writ Everything (DON'T DO THIS)
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);

var lcv = 0; //this is a oop control variable
while(lcv < 0){
	console.log(name.toUpperCase());
	lcv =+ 1; //THIS IS CRITICAL! NO VAR LEADS TO INFINITY
}

//create a whie loop that starts at zero and ends at 10
//make your lcv count/ var count = 0

var count = 0;
while(count < 10){
	console.log(count);
	count++; //++ is equal to count += 1
}
console.log("----------------------------")

var num = 10; //lcv but we named it num
while(num > 0) {
	console.log(num);
	num -= 1; //or num--
}
var evenCount = 0;
while (evenCount < 20) {
	console.log(evenCount);
	evenCount += 2;
}

//create a while loop that will count to 50 by 5
var fiveCount = 0;
while (fiveCount < 55) {
	if (fiveCount % 5 ==0){
			console.log(fiveCount);
	}
	fiveCount += 5;
}

