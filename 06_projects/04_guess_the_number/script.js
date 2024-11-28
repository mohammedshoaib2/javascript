let inputField = document.querySelector("#guessField");
let submit = document.querySelector("#subt");
let resultParas = document.querySelector(".resultParas");
let guesses = document.querySelector(".guesses");
let lastResult = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");
let prevGuesess = [];
let playGame = true;
let remaining = 0;
let randomNumber = parseInt(Math.round(Math.random() * 100 + 1));
let p = document.createElement("p");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  if (playGame) {
    let guess = parseInt(inputField.value);
    validateGuess(guess);
  }
});

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Enter a valid number");
  } else if (guess < 1) {
    alert("Number must be greater than 0");
  } else if (guess > 100) {
    alert("number must be less than or equal to 100");
  } else {
    if (remaining === 10) {
      displayMessage(`Game Over Random number was ${randomNumber}`);
      endGame();
    } else {
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  prevGuesess.push(guess);
  displayGuess();
  inputField.value = "";
  remaining++;
  lastResult.innerHTML = `${10 - remaining}`;
  if (guess === randomNumber) {
    inputField.value = guess;
    displayMessage("You Guessed it right");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Too Low");
  } else if (guess > randomNumber) {
    displayMessage("Too High");
  }
}

function displayGuess() {
  guesses.innerHTML = prevGuesess;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `${message}`;
}

function endGame() {
  inputField.setAttribute("disabled", "");
  p.innerHTML = "<h2 id=new_game_button>Start New Game</h2>";
  resultParas.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  let new_game_button = document.querySelector("#new_game_button");
  new_game_button.addEventListener("click", (event) => {
    event.preventDefault();
    inputField.value = "";
    remaining = 0;
    inputField.removeAttribute("disabled");
    prevGuesess = [];
    lastResult.innerHTML = `${10 - remaining}`;
    displayGuess();
    lowOrHi.innerHTML = "";
    resultParas.removeChild(p);
    randomNumber = parseInt(Math.round(Math.random() * 100 + 1));
    playGame = true;
  });
}
