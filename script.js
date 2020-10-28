const computerChoiceDisplay = document.getElementById('computerChoice');
const yourChoiceDisplay = document.getElementById('yourChoice');
let result = document.getElementById('result');
const score = document.getElementById('score');
const scoreboard = {
  player: 0,
  computer: 0
};
const possibleChoices = document.querySelectorAll('.choices');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
let numberOfRoundsPlayed = 0;


// Event listeners
possibleChoices.forEach(choice => choice.addEventListener('click', play));


// Get user's choice and play one round
function play(e) {
  playerSelection = e.target.id;
  numberOfRoundsPlayed += 1;
  console.log(numberOfRoundsPlayed);
  const computerSelection = computerPlay();
  console.log(computerSelection);
  console.log(playerSelection);
  const winner = getWinner(playerSelection, computerSelection);
  console.log(winner);
  computerChoiceDisplay.innerHTML = `
    <p>Computer's choice: ${computerSelection}</p>
  `;
  yourChoiceDisplay.innerHTML = `
    <p>Your choice: ${playerSelection}</p>
  `;
  score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
  `;
  updateScore();
}

// Get computer's choice
  function computerPlay() {
    const randomNumber = Math.floor(Math.random() * (3));
    var options = ["rock", "paper", "scissors"];
    var computerSelection = options[randomNumber];
    return computerSelection;
  };


// Get winner
  function getWinner(playerSelection, computerSelection) { 
    if (computerSelection === playerSelection) {
      result.innerHTML = "It's a tie! Wanna play another round?"; 
      return;
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
      result.innerHTML = "You lose! Rock beats scissors.";
      scoreboard.computer++
      return;
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
      result.innerHTML = "You lose! Scissors beat paper.";
      scoreboard.computer++;
      return;
    } else if (computerSelection === "paper" && playerSelection === "rock") {
      result.innerHTML = "You lose! Paper beats rock.";
      scoreboard.computer++;
      return;
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
      result.innerHTML = "You win! Rock beats scissors.";
      scoreboard.player++;
      return;
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
      result.innerHTML = "You win! Scissors beat paper.";
      scoreboard.player++;
      return;
    } else if (computerSelection === "rock" && playerSelection === "paper") {
      result.innerHTML = "You win! Paper beats rock.";
      scoreboard.player++;
      return;
    } else {
      result.innerHTML = "Something went wrong. Please try again!";
      return;
    }
  }
  

//Show result after five rounds
function updateScore(computerScore, playerScore) {
    if (numberOfRoundsPlayed === 5) {
    computerScore = scoreboard.computer;
    playerScore = scoreboard.player;
    if (computerScore > playerScore) {
      // alert(computerScore + " : " + playerScore);
      result.innerHTML = "5 rounds done & you lose!";
      return;
    } else if (playerScore > computerScore) {
      // alert(computerScore + " : " + playerScore);
      result.innerHTML = "5 rounds done & you win! Congratulations!";
      return;
    } else if (computerScore === playerScore) {
      // alert(computerScore + " : " + playerScore);
      result.innerHTML = "5 rounds done & it's a tie!";
      return;
    }
  }
};