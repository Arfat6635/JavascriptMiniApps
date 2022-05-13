let computerGuess;
let userGuess = [];
const msg = document.getElementById("msg");

let init = () => {
  computerGuess = Math.round(Math.random() * 100);
  document.getElementById("newGameButton").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
};
init();

const startGame = (x) => {
  document.getElementsByClassName("welcomeScreen")[0].style.display = "none";
  document.getElementById("gameArea").style.display = "block";
  document.getElementById("newGameButton").style.display = "block";
  document.getElementById("inputBox").value = "";
  document.getElementById("attempts").innerHTML = x;
};

const newGame = () => {
  window.location.reload();
};

const compareGuess = () => {
  const userNumber = Number(document.getElementById("inputBox").value);
  if (userNumber >= 1 && userNumber <= 100) {
    userGuess = [...userGuess, userNumber];
    document.getElementById("guesses").innerHTML = userGuess;
  }
  if (userNumber > compareGuess) {
    msg.innerHTML = "Your guess is high";
  }
  if (userNumber < compareGuess) {
    msg.innerHTML = "Your guess is low";
  }
};

const easyMethod = () => {
  let maxGuess = 10;
  startGame(maxGuess);
};

const hardMethod = () => {
  let maxGuess = 5;
  startGame(maxGuess);
};
