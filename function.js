
//Variables
var guessNumber = document.querySelector("#number");
var guess = document.querySelector('.guess');
var guessButton = document.querySelector("#guess-button");
var yourGuess = document.querySelector('.your-guess');
var clearButton = document.querySelector('#clear-button');
var inputCheck = document.querySelector('#number');
var resetButton = document.querySelector('#reset');
var error = document.querySelector('.err');
var rangeError = document.querySelector('.range-error');
var randomNumber = 0;
var low = 0;
var high = 100;

//Button Listeners
guessButton.addEventListener("click", getGuess);
clearButton.addEventListener("click", clearButtonFunction);
resetButton.addEventListener('click', resetButtonFunction);
inputCheck.addEventListener('keyup', enableButtons);

//Function that grabs number and places it in form
function getGuess (e) {
  e.preventDefault()
  var answer = parseInt(guessNumber.value);
  guess.innerText = answer
  checkGuessWithRandom()
  testForCorrectDataFromInput()
  document.getElementById("number").value = "";
}

//Function to Create a Random Number between 1 and 100
function randomNumberGenerator(low, high) {
  randomNumber = Math.round((Math.random() * (high - low+1) + low));
  console.log(randomNumber + " is random number")
  console.log(low + "low Number")
  console.log(high + "high Number")
}

//event listener generates ran num when loaded
window.addEventListener("load", function load(){
  randomNumberGenerator(low, high)
});

//Compares guess with number
function checkGuessWithRandom() {

  var  answer = parseInt(guessNumber.value);
  if (answer < randomNumber) {
    yourGuess.innerText = "That is too low."
  } else if (answer > randomNumber) {
    yourGuess.innerText = "That is too high"
  } else if (answer === randomNumber) {
    yourGuess.innerText = "Boom!!" 
  } else {
    yourGuess.innerText = "Please enter a correct value"
  }
}

// Function to test for input data 
function testForCorrectDataFromInput() {
  var answer = parseInt(guessNumber.value);
  if (isNaN(answer)) {
    error.innerText = "That is not a number, please enter a number between 1 and 100"
  } else if (answer > high || answer < low) {
    error.innerText = "Please enter a number between 1 and 100."
  } else {
    error.innerText = "Your last guess was..."
  }
}

//Clear Button
function clearButtonFunction (e){
  event.preventDefault()
  document.getElementById("number").value = "";
}

//Disable buttons
function disableButtons () {
  document.getElementById('guess-button').disabled = true;
  document.getElementById('clear-button').disabled = true;
  document.getElementById('reset').disabled = true;
  document.getElementById('submit-range-button').disabled = true;
}

// Enable Buttons
function enableButtons () {
  document.querySelector('#guess-button').disabled = false;
  document.querySelector('#clear-button').disabled = false;
  document.querySelector('#reset').disabled = false;
}

//Reset Buttons
function resetButtonFunction () {
  yourGuess.innerText = "";
  guessNumber.innerText = "";
  guess.innerText = "--";
  error.innerText = "";
  lowNumberInput.value = "";
  highNumberInput.value = "";
  document.getElementById("number").value = "";
  randomNumberGenerator(0, 100); 
  disableButtons();3 
}


page.addEventListener('click', function(event) {
  if (event.target.className === "read-btn");
  event.target.parentNode.parentNode.classList.toggle("read");
  event.target.classList.toggle("read");
  });

page.addEventListener('click', function(event) {
  if (event.target.className === "delete-btn");
  event.target.parentNode.parentNode.remove();
  });

