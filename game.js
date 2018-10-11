//create secretNumber
var secretNumber = 4;

//ask user for guess
var guess = Number(prompt("Guess a number"));

//check if guess is right
if(guess === secretNumber) {
	alert("you got it right!");
}

//otherwise, check if higher
else if(guess > secretNumber) {
	alert("too high, guess again!");
}

//otherwise, check if lower
else {
	alert("too low, guess again");
}