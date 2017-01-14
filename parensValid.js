function parensValid(str){
	var openParen = 0, closeParen = 0, valid = false

	// FOR loop to test if parens is valid
	for (var i = 0; i < str.length; i++){

		// Fast fail scenarios
		// Scenario 1: str[0] == ")"
		if(str[0] == ")"){
			return valid
		}
		// Scenario 2: str[str.length - 1] == "("
		if(str[str.length - 1] == "("){
			return valid
		}

		// Default test
		if(str[i] == "("){
			openParen += 1
		}
		else if(str[i] == ")"){
			closeParen += 1
		}
		else{
			continue
		}
	}

	// Determine if valid will = true. Notify user if no parens is present
	if (openParen < 1 && closeParen < 1){
		console.log("NOTE: No parens found")
		valid = true
	}
	else if(openParen === closeParen){
		valid = true
	}

	return valid
}

var string = "()(())Hi you"

console.log(parensValid(string))
