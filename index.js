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
let choicesOfGame = ['rock', 'paper', 'scissor'];

// returns a value of choicesOfGame
const computerPlay = () => {
    randomIndex = Math.floor(Math.random() * 3);
    let computerChoice = choicesOfGame[randomIndex];

    return [computerChoice, randomIndex]; 
};

const playerPlay = () => {
    let userChoice = input("please pick a choice: ");
    return userChoice
};

