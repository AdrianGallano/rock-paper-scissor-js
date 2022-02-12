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
const playgroundImage = document.querySelectorAll(".playimage-container img") 

const computerChoose = () => {
	let choices = ["rock", "paper", "scissor"]
	let randNum = Math.floor(Math.random() * 3)
	return choices[randNum]
}

const round = (playerChoice, computerChoice) => {
	let computerChosen = computerChoice()
	displayImage(playgroundImage[0],playerChoice)
	displayImage(playgroundImage[1],computerChosen)
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

const restartGame = () => {
	rounds = 1;
	wins = 0;
	lost = 0;
	ties = 0;
}

const checkGame = () => {
	if(wins == 5){
		return "YOU WON!"
	}else if(lost == 5){
		return "YOU LOST!"
	}
	return false
}

const changePopupState = (result, humOrCom) => {
	if(popup.style.display == "flex"){
		popup.style.display = "none"
		playgroundImage.forEach(image => image.style.display = "none")
	}else{
		popup.style.display = "flex"
		popupMessage.textContent = result
		humanityOrComputer.textContent = humOrCom
	}
}

const displayImage = (player, chosen) => {
	player.style.display = "block"
	if(chosen == "rock"){
		player.setAttribute("src", "./images/stone.png")
	}else if(chosen == "paper"){
		player.setAttribute("src", "./images/new-document.png")
	}else{
		player.setAttribute("src", "./images/scissors.png")
	}
}

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

