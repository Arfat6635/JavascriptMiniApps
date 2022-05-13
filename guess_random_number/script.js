let computerGuess;
let userGuess = [];
let maxGuess;
const msg = document.getElementById("msg");

let init = () => {
  computerGuess = Math.round(Math.random() * 100);
  document.getElementById("newGameButton").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
};
init();

const startGame = () => {
  document.getElementsByClassName("welcomeScreen")[0].style.display = "none";
  document.getElementById("gameArea").style.display = "block";
  document.getElementById("newGameButton").style.display = "block";
  document.getElementById("inputBox").value = "";
  document.getElementById("attempts").innerHTML = maxGuess;
};

const newGame = () => {
  window.location.reload();
};

const compareGuess = () => {
  const userNumber = Number(document.getElementById("inputBox").value);
  if ((userNumber >= 1 && userNumber <= 100) && maxGuess>0) {
    userGuess = [...userGuess, userNumber];
    document.getElementById("guesses").innerHTML = userGuess;

    if (userNumber > computerGuess) {
      msg.innerHTML = "Your guess is high";
      document.getElementById("inputBox").value = "";
      maxGuess = maxGuess - 1;
      document.getElementById("attempts").innerHTML = maxGuess;
    } else if (userNumber < computerGuess) {
      msg.innerHTML = "Your guess is low";
      document.getElementById("inputBox").value = "";
      maxGuess = maxGuess - 1;
      document.getElementById("attempts").innerHTML = maxGuess;
    } else if (userNumber == computerGuess) {
      msg.innerHTML = "Correct Number";
      document.getElementById("inputBox").value = "";
      document.getElementById("inputBox").setAttribute("disabled", true);
      document.getElementById("inputBox").style.outline="none";
      maxGuess = maxGuess - 1;
      document.getElementById("attempts").innerHTML = maxGuess;
    }
  }
  else if (maxGuess==0) {
    msg.innerHTML = "Better Luck Next time 😢";
    document.getElementById("inputBox").value = "";
    document.getElementById("inputBox").setAttribute("disabled", true);
    document.getElementById("inputBox").style.outline="none";
  }
};

const easyMethod = () => {
  maxGuess = 10;
  startGame();
};

const hardMethod = () => {
  maxGuess = 5;
  startGame();
};
