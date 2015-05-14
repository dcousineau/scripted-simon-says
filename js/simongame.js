/**
 * A Simon Says type game.
 *
 * `difficulty` determines the number of "notes" to the the game.
 *
 * USAGE:
 *     var currentGame = new SimonGame(4);
 *     switch(currentGame.guess(userGuess)) {
 *         case "lost":
 *             alert("You Lost!");
 *             break;
 *         case "won":
 *             alert("You Won!");
 *             break;
 *     }
 */
function SimonGame(difficulty) {
    this.state = this._generate(difficulty);
}

/**
 * Returns the "solution" to the game as a string
 */
SimonGame.prototype.answer = function() {
    return this.state.join(" - ");
}

/**
 * Given a user-provided "guess", this method will either do nothing if it was
 * correct, return "won" if you made your final _correct_ guess, and "lost" if
 * your guess was ever incorrect.
 *
 * A failed game will no longer be eligible for guesses.
 */
SimonGame.prototype.guess = function(color) {
    //The game is over so disallow guesses
    if (this.isOver()) return;

    //Grab the "next" note from the _left_ of the list of notes to guess
    //We grab the left as the user is supposed to guess in order from left to
    //right
    var answer = this.state.shift();

    //The user is not allowed _any_ mistakes so if they guess wrong, we clear
    //out the game (so we know it is over) and return that they lost the game
    if (answer != color) {
        this.state = [];
        return "lost";
    }

    //If there are no more notes to guess and the user has not lost the game yet
    //we can assume they JUST won the game, hooray!
    if (this.state.length == 0) {
        return "won";
    }
}

/**
 * Returns true if the game is over
 */
SimonGame.prototype.isOver = function() {
    return this.state.length == 0;
}

/**
 * Internal method to generate a game with a specified difficulty
 */
SimonGame.prototype._generate = function(difficulty) {
    var answer = [];
    for (var i = 0; i < difficulty; i++) {
        answer.push(this._rand_color());
    }
    return answer;
}

/**
 * Internal method to generate a random color from 4 possible colors
 */
SimonGame.prototype._rand_color = function() {
    switch(random(1, 4)) {
        case 1:
            return "red";
        case 2:
            return "green";
        case 3:
            return "yellow";
        case 4:
        default:
            return "blue";
    }
}

/**
 * Convenience function to generate a random number between a `low` and a `high`
 */
function random(low, high) {
    return Math.floor((Math.random() * high) + low);
}
