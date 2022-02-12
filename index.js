let wins = 0;
let lost = 0;
let ties = 0;
let rounds = 1;
//UI
const choices = document.getElementsByClassName("game-choice") 
const scores = document.getElementsByClassName("score")
const roundCounter = document.querySelector(".round-counter")
const popup  = document.querySelector(".pop-up")
const popupMessage = document.querySelector(".message")
const humanityOrComputer = document.querySelector('.hum-or-com')
const playAgain = document.querySelector(".play-again")

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
	if(wins == 5){
		return "YOU WON!"
	}else if(lost == 5){
		return "YOU LOST!"
	}
	return false
}

let changePopupState = (result, humOrCom) => {
	if(popup.style.display == "flex"){
		popup.style.display = "none"
	}else{
		popup.style.display = "flex"
		popupMessage.textContent = result
		humanityOrComputer.textContent = humOrCom
	}
}

//game 
const game = () => {
	Array.from(choices).forEach(choice=>choice.addEventListener("click", (e)=>{
		round(choice.getAttribute("key-choice"), computerChoose)

		let result = checkGame()
		if(result){
			restartGame()
			if(result == "YOU WON!"){
				changePopupState(result, "HUMANITY")
			}else{
				changePopupState(result, "COMPUTER")
			}
		}

		scores[0].textContent = wins
		scores[1].textContent = ties
		scores[2].textContent = lost
		roundCounter.textContent = rounds
	}))

	playAgain.addEventListener("click", changePopupState)
}
game()

