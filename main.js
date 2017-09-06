//grabs the entire board reference from the DOM
var board = document.getElementById("gameboard").children

//Keeps track of moves. This is only used for X/O tracking in this implementation, but it can be expanded to be used for knowing when to start checking for a winner and also when the board is full.
var moves = 0;


//Function to track a move.
var moveMade = function (block) {
    //First thing I check is if the block I clicked has a move in it.
    if (block.innerHTML == '') {
        //if there's a move, I incriment my move counter.
        moves++;

        //checking for odd or even to place an 'O' or 'X' in the square.
        if (moves % 2 === 1) {
            block.innerHTML = 'O';
        } else {
            block.innerHTML = 'X';
        }

        //If there's already a move made, I don't increment the counter and just alert that a move has already ben made.
    } else {
        alert('A move was already made here!');
    }
        
}


//Reset function simply iterates through the board's children and replaces the innerHTML with nothing and sets the move counter to 0;
var reset = function () {
    moves = 0;
    
    for (var i = 0; i < 9; i++) {
        board[i].innerHTML = '';
    }
}