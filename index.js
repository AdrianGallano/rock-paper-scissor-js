const playerChoose = () => {
	let choices = document.getElementsByClassName("game-choice") 
	Array.from(choices).forEach(choice=>choice.addEventListener("click", (e)=>{
		console.log(choice.getAttribute("key-choice"))
	}))
}

const computerChoose = () => {
	let choices = ["rock", "paper", "scissor"]
	let randNum = Math.floor(Math.random() * 3)
	return choices[randNum]
}

const round = (playerChoice, computerChoice) => {

}

const sayHello = () => {
	console.log("hello")
}

