function computerPlay() {
  let choice = Math.floor(Math.random() * 3);
  if (choice < 1) {
    return "scissors";
  } else if (choice < 2) {
    return "paper";
  } else return "rock";
}

function playerPlay() {
  let input = prompt("What is your play?");
  input = input.toLowerCase();
  if (input != "scissors" && input != "paper" && input != "rock") {
    return "error";
  }
  return input;
}

function playRound(yourPlay) {
  let compPlay = computerPlay();
  let result = "";
  if (compPlay == yourPlay) {
    result = "You tied, try again!";
  }
  if (compPlay == "scissors") {
    if (yourPlay == "paper") {
      result = "Scissors beats paper, you lose";
    } else if (yourPlay == "rock") {
      result = "Rock beats scissors, you win!";
    }
  } else if (compPlay == "paper") {
    if (yourPlay == "rock") {
      result = "Paper beats rock, you lose";
    } else if (yourPlay == "scissors") {
      result = "Scissors beats paper, you win!";
    }
  } else if (compPlay == "rock") {
    if (yourPlay == "scissors") {
      result = "Rock beats scissors, you lose";
    } else if (yourPlay == "paper") {
      result = "Paper beats rock, you win!";
    }
  }

  console.log(result);
  return result;
}

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");
const results = document.querySelector("#results");

let rounds = 0;
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    rounds++;
    results.innerHTML += "\n Round " + rounds + ": " + playRound(button.id);
  });
});

//playRound();
