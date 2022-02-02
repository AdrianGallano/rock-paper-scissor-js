/*
Step 1: create computer random generator for choices of rock paper or scissor
	- create array of rock paper scissor
	- generate random number from the length of array
	- get the item from array

Step 2: create player prompt for input
	- use prompt to get user input
	- get the input

Step 3: create conditionals
	- rock -> scissor -> paper -> rock

Step 4: loop the game until a condition is met
	- use for loop

Step 5: use game function to start the game again

*/
let choicesOfGame = ["Rock", "Paper", "Scissor"];

// returns a value of choicesOfGame
const computerPlay = () => {
	randomIndex = Math.floor(Math.random() * 3);
	let computerChoice = choicesOfGame[randomIndex];

	return computerChoice;
};

const playerPlay = () => {
	let userChoice = prompt("please pick a choice: ");
	return userChoice[0].toUpperCase() + userChoice.slice(1).toLowerCase();
};


const playRound = (computerSelection, playerSelection) => {
	let computerSelected = computerSelection();
	let playerSelected = playerSelection();

	if(playerSelected == "Rock" && computerSelected == "Scissor"){
		return "You Win! Rock Beats Scissor";
	}else if(playerSelected == "Scissor" && computerSelected == "Paper"){
		return "You Win! Scissor Beats Paper";
	}else if(playerSelected == "Paper" && computerSelected == "Rock"){
		return "You Win! Paper Beats Rock"
	}else if(playerSelected === computerSelected){
		return "Its a Tie!"
	}else{
		return `You Lose! ${computerSelected} Beats ${playerSelected}`
	}
}

const game = () => {
	let result;
	for(let i = 0; i < 5; i++){
		result = playRound(computerPlay,playerPlay);
	}
}
game()

