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

function playRound() {
  let compPlay = computerPlay();
  let yourPlay = playerPlay();
  if (compPlay == yourPlay) {
    console.log("You tied, try again!");
    return;
  }
  if(compPlay == "scissors"){
    if(yourPlay == "paper"){
        console.log("You lose");
    } else if(yourPlay== "rock"){
        console.log("You win!");
    }
  }else if(compPlay == "paper"){
    if(yourPlay == "rock"){
        console.log("You lose");
    } else if(yourPlay== "scissors"){
        console.log("You win!");
    }
  }else if(compPlay == "rock"){
    if(yourPlay == "scissors"){
        console.log("You lose");
    } else if(yourPlay== "paper"){
        console.log("You win!");
    }
  }
  return;
}

for(let i = 0; i< 5; i++){
    playRound();
}
