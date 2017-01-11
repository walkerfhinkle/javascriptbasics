//variables with strings \/ \/ \/

var firstname = "walker"
var lastname = "hinkle"

//concatenation (this is where you can build or combine strings)
//(" ") creates a space between words

console.log(firstname + lastname);
console.log(firstname + " " + lastname);

//Below creates an algorithm to simplify information

var fullname = firstname + " " + lastname
console.log(fullname);

//empty variables \/ \/ \/

var num
num = 2
console.log(num)

//empty string \/ \/ \/

var petsname = ""
//can reference a variable or string after the fact
petsname = "blarg"
console.log(petsname)

// local naming conventions \/ \/ \/
/*let
if (true){
	let petsname = ""
}
console.log(petsname)*/

//short hand operators
var age = 55
console.log(age += 1) //age = age plus 1
console.log(age /= 2) //age = age divided by 2
console.log(age *= 2) //age = age multiplied by 2

//real world variales \/ \/ \/

var timescaughtwithhandincookiejar = 12
var timesgottenawaywithit = 32

console.log(timescaughtwithhandincookiejar % timesgottenawaywithit)

//follow the steps

var myNumber = 0
myNumber = (myNumber += 10)
console.log(myNumber)
myNumber = (myNumber -= 1)
console.log(myNumber)
myNumber = (myNumber *= 9)
console.log(myNumber)
myNumber = (myNumber /= 7)
console.log(myNumber)

//gold challenge

var currentage = 27
var maxage = 90
var glassesofwaterperday = 5 * 365
var totalneeded = (glassesofwaterperday * 365) * (maxage - currentage)
var message = 'You will need' + " " + totalneeded + " " + 'cups of water to last you util the ripe old age of' + " " + maxage
console.log(message)

