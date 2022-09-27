let userScore = document.querySelector("#userScoreVal");
let compScore = document.querySelector("#compScoreVal");
let usersHand = document.querySelector("#result-user-stat");
let compsHand = document.querySelector("#result-comp-stat");
let rock = document.querySelector("#r");
let paper = document.querySelector("#p");
let scissors = document.querySelector("#s");
let choiceArr = ["rock", "paper", "scissors"];
let userChoice;
let compChoice;
let userCount = 0;
let compCount = 0;
rock.addEventListener("click", () => {
  userChoice = "rock";
  compChoice = choiceArr[Math.floor(Math.random() * choiceArr.length)];
  RnPnS(userChoice, compChoice);
  usersHand.innerHTML = "User: rock";
  compsHand.innerHTML = `Computer: ${compChoice}`;
});
paper.addEventListener("click", () => {
  userChoice = "paper";
  compChoice = choiceArr[Math.floor(Math.random() * choiceArr.length)];
  RnPnS(userChoice, compChoice);
  usersHand.innerHTML = "User: paper";
  compsHand.innerHTML = `Computer: ${compChoice}`;
});
scissors.addEventListener("click", () => {
  userChoice = "scissors";
  compChoice = choiceArr[Math.floor(Math.random() * choiceArr.length)];
  RnPnS(userChoice, compChoice);
  usersHand.innerHTML = "User: scissors";
  compsHand.innerHTML = `Computer: ${compChoice}`;
});

const RnPnS = (userChoice, compChoice) => {
  if (
    (userChoice == "rock" && compChoice == "scissors") ||
    (userChoice == "paper" && compChoice == "rock") ||
    (userChoice == "scissors" && compChoice == "paper")
  ) {
    userCount += 1;
    userScore.innerHTML = userCount;
  } else if (
    (userChoice == "rock" && compChoice == "paper") ||
    (userChoice == "paper" && compChoice == "scissors") ||
    (userChoice == "scissors" && compChoice == "rock")
  ) {
    compCount += 1;
    compScore.innerHTML = compCount;
  }
  if (userCount >= 3) {
    document.querySelector("#result-final-stat").innerHTML =
      "Winner: User Wins";
      reset()
  } else if (compCount >= 3) {
    document.querySelector("#result-final-stat").innerHTML =
      "Winner: Computer Wins";
      reset()
  }
};

function reset() {
  compScore.innerHTML = 0;
  userScore.innerHTML = 0;
  usersHand.innerHTML = "User: ";
  compsHand.innerHTML = "Computer: ";
}
