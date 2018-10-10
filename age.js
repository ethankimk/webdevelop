var age = Number(prompt("what is your age?"));

if(age < 0) {
	console.log("come back once you're out of the womb");
}

if(age === 21) {
	console.log("happy 21st bday!");
}

if(age % 2 !== 0) {
	console.log("your age is odd!");
}

if(age % Math.sqrt(age) === 0) {
	consol.log("your age is a perfect square!");
}