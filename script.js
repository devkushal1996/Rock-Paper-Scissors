let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame = () => {
    console.log ("It's a draw");
}

const showWinner = (userWin) => {
    if (userWin) {
        console.log ("You Won");
    } else {
        console.log ("You lose");
    }
}

const playGame = (userChoice) => {
    console.log ("User Choice is", userChoice);
    const compChoice = genCompChoice();
    console.log ("Comp Choice is", compChoice);

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if( userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);

    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});