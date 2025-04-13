let userScore = 0;
let computerScore = 0;

let choices = document.querySelectorAll('.choice');

const drawGame = () => {
    console.log("draw");
    document.getElementById("msg").textContent = "It's a Draw!";
};

const genreateComputerChoice = () => {
    let options = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
};

const playGame = (choiceId) => {
    console.log("choice was clicked : " + choiceId);
    const computerChoice = genreateComputerChoice();
    console.log("computer choice : " + computerChoice);

    if(choiceId === computerChoice){
        drawGame();
    }
    else if(choiceId === 'rock' && computerChoice === 'scissors' || choiceId === 'paper' && computerChoice === 'rock' || choiceId === 'scissors' && computerChoice === 'paper'){
        console.log("user wins");
        userScore++;
        document.getElementById("msg").textContent = "You Win!";
    }
    else{
        console.log("computer wins");
        computerScore++;
        document.getElementById("msg").textContent = "Computer Wins!";
    }
    document.getElementById("user-score").textContent = userScore;
    document.getElementById("comp-score").textContent = computerScore;
};

choices.forEach(choice => {
    choice.addEventListener('click', () =>{
        const choiceId = choice.getAttribute('id');
        console.log("choice was clicked : " + choiceId);
        playGame(choiceId);
    });
});
