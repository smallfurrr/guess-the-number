//Function to generate secret number
var setSecretNumber = function () {
return Math.floor(Math.random() * 11);
};

//save secret number to variable
var secretNumber = setSecretNumber();
console.log(secretNumber);

var easterEgg = "help leh";

//Create empty arrays to hold total, wins, losses
var totalPlay = [];
var wins = [];
var losses = [];

//assign variables to necessary DOM elements
var inputBox = document.getElementById("guess");
var resultDisplay = document.getElementById("result");
var playTotal = document.getElementById("playtotal");
var winsTotal = document.getElementById("wins");
var lossTotal = document.getElementById("losses");

//Function that runs when submit button is clicked
var clicked = function () {
    var userGuess = inputBox.value;
    var parsedGuess = parseInt(userGuess);
    if (parsedGuess === easterEgg) {
        resultDisplay.textContent = "cannot leh";
    } else if (parsedGuess === secretNumber) {
        resultDisplay.textContent = "You got it!";
        wins.push(1);
        winsTotal.innerHTML = wins.length;
    } else {
        resultDisplay.textContent = "Sorry, try again..";
        losses.push(1);
        lossTotal.innerHTML = losses.length;
    }
    totalPlay.push(1);
    playTotal.innerHTML = totalPlay.length;
    secretNumber = setSecretNumber();
    console.log(secretNumber);
}

//Event listener for button
document.getElementById("submit").addEventListener("click", clicked);