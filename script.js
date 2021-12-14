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

  // If choices are the same, it's a tie
  if (userChoice === computerChoice) {
    ties++;
    window.alert("It's a tie!");
// Check every win condition for the player
} else if (
    (userChoice === "R" && computerChoice === "S") || 
    (userChoice === "P" && computerChoice === "R") || 
    (userChoice === "S" && computerChoice === "P")
  ) {
    wins++;
    window.alert("You win!");

    // If above conditions failed, assume player lost
  } else {
    losses++;
    window.alert("You lost!");
  }

   // Print stats with line breaks
   window.alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
  );

  // Ask user to play again
  var playAgain = window.confirm("Play again?");

  // If user pressed OK, run the function again
  if (playAgain) {
    startGame();
  }
};