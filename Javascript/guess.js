var number = 5;

var guess = Number(prompt("Guess a number!"));

if (guess === number) alert("You guessed it correct!");
else if (guess < number) alert("Too low! Guess again");
else alert("Too High! Guess again");