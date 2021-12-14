var wins = 0;
var ties = 0;
var losses = 0;

//options for the computer to pick from
var options = ["R", "P", "S"];

var startGame = function() {
    // Ask the user to choose R, P or S
    var userChoice = window.prompt("Enter R, P, or S:");

     // If user presses Cancel, immediately end function
  if (!userChoice) {
    return;
  }
  // Convert to uppercase to make comparisons easier
  userChoice = userChoice.toUpperCase();

  // Get random index from array of options using Math.random
  var index = Math.floor(Math.random() * options.length);
  var computerChoice = options[index];

  window.alert("The computer chose " + computerChoice);
