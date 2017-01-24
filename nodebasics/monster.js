//Export

module.exports = function(){
	return{
		name : "",
		size : "",
		noise : "",
		attack : "",
		makeSound : function(){
			console.log(this.noise);
		},
		attack : function(){
			console.log(this.attack);
		}
	}
}