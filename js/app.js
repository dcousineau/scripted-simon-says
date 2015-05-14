//Your application here should use jQuery to wire up the interface to play a
//Simon Says type game. A SimonGame object has been provided that has the guts
//of the game logic. You should not _need_ to edit simongame.js however if you
//want to add extra features like more colors, etc edit the file to your hearts
//content.
var game;

function newGame() {
    game = new SimonGame(4);
    
    //Display answer for 2s
}

//Listen for user guesses (clicking a color button)

//Clicking reset game should start a newGame();

//We should start a new game immediately on load
newGame();
