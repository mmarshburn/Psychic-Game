console.log("what up dude")
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuess = []; 
var computerChoice;



theGame();


function theGame() {
	//letter randomizer
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var randomLetter = alphabet[Math.floor(Math.random() * 26)];
	var computerChoice = randomLetter;

	console.log(computerChoice); //test
		
	checkIfCorrect();

	function checkIfCorrect() {

		document.onkeyup = function(event) {
			var userChoice = String.fromCharCode(event.keyCode).toLowerCase();


			if (event.keyCode < 65 || event.keyCode > 90) {
				alert("Invalid Entry");

			} else if (yourGuess.indexOf(userChoice) >=0) {
				alert("You already guessed that!");

			//if the user guesses correctly
			} else if (userChoice === computerChoice) {
				console.log("You win."); //test
				
				wins = wins + 1;
				document.getElementById("wins").innerHTML = "Wins: " + wins;
				resetGame();


			//if the user guesses wrong...
			} else {
				guessesLeft = guessesLeft - 1;
				
				document.getElementById("left").innerHTML = "Guesses left: " + guessesLeft; 
				yourGuess.push(userChoice); 
				console.log("Your guesses so far: " + yourGuess); 

				document.getElementById("sofar").innerHTML = "Your guesses so far: " + yourGuess;

				console.log("Guesses Left: " + guessesLeft); 
				noGuessesLeft();
			}
		}
	}

	function resetGame() {
		guessesLeft = 9; 
		yourGuess = []; 
		document.getElementById("left").innerHTML = "Guesses left: " + guessesLeft;  //reset display on screen
		document.getElementById("sofar").innerHTML = "Your guesses so far: " + yourGuess;    //reset display on screen
		theGame(); 

	}

	function noGuessesLeft() {
		if (guessesLeft === 0) {
			console.log("YOU LOSE."); 
			alert("YOU LOSE!");
			losses = losses + 1
			document.getElementById("losses").innerHTML = "Losses: " + losses;

			resetGame();

		} else {
			console.log("Incorrect. Try again");
			checkIfCorrect();
		}

	}

}

