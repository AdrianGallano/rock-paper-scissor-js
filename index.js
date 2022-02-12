let wins = 0;
let lost = 0;
let ties = 0;
let rounds = 1;
//UI
const choices = document.getElementsByClassName("game-choice") 
const scores = document.getElementsByClassName("score")
const roundCounter = document.querySelector(".round-counter")


let computerChoose = () => {
	let choices = ["rock", "paper", "scissor"]
	let randNum = Math.floor(Math.random() * 3)
	return choices[randNum]
}

let round = (playerChoice, computerChoice) => {
	let computerChosen = computerChoice()
	if(playerChoice == "rock" && computerChosen == "scissor" 
	|| playerChoice == "scissor" && computerChosen == "paper" 
	|| playerChoice == "paper" && computerChosen == "rock"){
		wins += 1
		rounds += 1
	}else if(playerChoice == computerChosen){
		ties += 1
		rounds += 1
	}else{
		lost += 1
		rounds += 1
	}
}

let restartGame = () => {
	rounds = 1;
	wins = 0;
	lost = 0;
	ties = 0;
}

let checkGame = () => {
	if(rounds >	 5){
		return true
	}
}

//game 
Array.from(choices).forEach(choice=>choice.addEventListener("click", (e)=>{
	round(choice.getAttribute("key-choice"), computerChoose)
	scores[0].textContent = wins
	scores[1].textContent = lost
	scores[2].textContent = ties
	roundCounter.textContent = rounds
	checkGame()
}))


