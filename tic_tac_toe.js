let ticTacToe;
if (typeof window != "undefined") {
    window.onload = function () {
        const gridContainer = document.getElementById("tic-tac-toe-grid-container");
        // Initialize Empty grid
        ticTacToe = new TicTacToe(gridContainer);
    };
}
function TicTacToe(grid) {
    this.container = grid;
    this.choose = function (event, element) {
        const position = element.id.split('_')
        console.log("Row: " + position[0] + " Column: " + position[1])

        if(event.ctrlKey) {
           element.innerText = "X"
        } else {
        element.innerText = "O"
        }

    }
}