//javascript_psychic game//

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuessSoFar = [];
var computerGuess = "abcdefghijklmnopqrstuvwxyz";

var textWins = document.getElementById("wins");
var textLosses = document.getElementById("losses");
var textGuessesLeft = document.getElementById("guesses left");
var textGuessesSoFar = document.getElementById("guesses so far");

var compGuess = computerGuess[Math.floor(Math.random() * computerGuess.length)];
console.log(compGuess);

document.onkeyup = function (event) {
  var userGuess = event.key;
  userGuess = userGuess.toLowerCase();
  userGuessSoFar.push(userGuess);
  if (guessesLeft > 0) {
    guessesLeft--;
    textGuessesLeft.textContent = guessesLeft;
    textGuessesSoFar.textContent = userGuessSoFar;
    if (compGuess === userGuess) {
      wins++;
      textWins.textContent = wins;
      userGuessSoFar = [];
      guessesLeft = 9;
      textGuessesSoFar.textContent = userGuessSoFar;
      textGuessesLeft.textContent = guessesLeft;
      compGuess = computerGuess[Math.floor(Math.random() * computerGuess.length)];
      console.log(compGuess);
    }
  } else {
    losses++;
    textLosses.textContent = losses;
    userGuessSoFar = [];
    guessesLeft = 9;
    textGuessesSoFar.textContent = userGuessSoFar;
    textGuessesLeft.textContent = guessesLeft;
    compGuess = computerGuess[Math.floor(Math.random() * computerGuess.length)];
    console.log(compGuess);
  }
}










