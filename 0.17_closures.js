//Closures

//1. A closure gives you access to the variables
//set in a function.
//		-After a function has completed and returned
//2. Help keep variables from getting pushed into
//the global scope.
//3. Degree of protection. Variable can't be
//overwritten unless we do so.
var walker = {};
var setAge = function(myAge) {
	var birthday = "12/13/1989";

	return {
		getAge : function(){
			return myAge;
		},

		getBirthday : function(){
			return birthday;
		}
	}
}
walker.age = setAge(28);
console.log(walker.age);
console.log(walker.age.getAge());
console.log(walker.age.getBirthday());