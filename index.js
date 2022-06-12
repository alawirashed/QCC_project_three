var randomNumber = Math.ceil(Math.random() * 100);
var checkBtn = document.getElementById("subt");
var reset = document.getElementById("reset");
var reset2 = document.getElementById("reset2");
var outPut = document.getElementById("outPutText");
var inputw = document.getElementById("guessField");
const numbersGuess = document.querySelector(".numbers__guess");
const guessdNumbersLabel = document.querySelector(".guessed__number");
const scoreLabel = document.querySelector(".score");
const image = document.querySelector(".img");
const score = document.querySelector(".score");
const highScore = document.querySelector(".high__score");
const wrapper = document.querySelector(".wrapper__body");

let numGuesses = 1;
let init__score = 10;
let highestScore = 0;
let guessedNumbers = [];
let message = "Unfortunatley! you lost the Game";
let winMessage = "YOU WIN";

reset2.hidden = true;
score.textContent = init__score;
highScore.textContent = highestScore;
message.textContent = image;
winMessage.textContent = image;

function checkNumber() {
  var input = document.getElementById("guessField").value;
  if (score.innerHTML == 0) {
    image.textContent = message;
    outPut.innerHTML = `Game over it was ${randomNumber}`;
    wrapper.style.backgroundColor = "brown";
    inputw.hidden = true;
    checkBtn.hidden = true;
    reset2.hidden = false;
  } else if (input == randomNumber) {
    highScore.textContent = score.textContent;
    highscore = randomNumber;
    outPut.innerHTML = `Congratulations you guessed right it was ${randomNumber}`;
    outPut.style.color = "white";
    wrapper.style.backgroundColor = "aqua";
    inputw.hidden = true;
    checkBtn.hidden = true;
    reset2.hidden = false;
    document.body.style.backgroundColor = "yellow";
    wrapper.style.backgroundColor = "green";

    image.textContent = winMessage;
  } else if (input == "") {
    outPut.innerHTML = "Please enter a number in the input";
  } else if (input > randomNumber && input < 100) {
    score.textContent--;
    outPut.innerHTML = "your number is high";
    guessedNumbers.push(input);
    reset2.hidden = true;
    showGuessedNumbers(guessedNumbers);
  } else if (input < randomNumber && input > 1) {
    score.textContent--;
    outPut.innerHTML = "your Guess is too low";
    guessedNumbers.push(input);
    reset2.hidden = true;
    showGuessedNumbers(guessedNumbers);
    guessdNumbersLabel.style.color = "green";
  } else if (isNaN(input)) {
    outPut.innerHTML = "you can only enter numbers between 1 and 100";
    reset2.hidden = true;
  } else {
    outPut.innerHTML = " Number has to be between 1 and 100";
    reset2.hidden = true;
  }
}

checkBtn.addEventListener("click", checkNumber);
reset.addEventListener("click", function () {
  location.reload();
});

reset2.addEventListener("click", function () {
  location.reload();
});

function showGuessedNumbers(guessedNumbers) {
  numbersGuess.style.opacity = 1;
  guessdNumbersLabel.innerHTML = guessedNumbers;
}
