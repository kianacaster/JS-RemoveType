Array.prototype.removeType = function(type){
	for(var i = 0; i < this.length; i++){ // Loops over to make sure everything is checked.
		for(var j = 0; j < this.length; j++){ // Loops over each elements in the array.
			if(typeof this[j] == type){ // If the current element is a type of variable that the user specified...
				this.cut(j); // Delete it
			}
		}
	}
	return this; // Return the array.
}
