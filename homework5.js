var set = document.getElementsByClassName("board");
for (var i = 0; i <= 10; i++) {
    var boardPiece = document.createElement("div");
    if (i % 2 == 1) {
        boardPiece.classList.add("black");


    }

    for (var j = 0; j <= 10; j++) {
        var boardPiece = document.createElement("div");
        if (i % 2 == 1) {
            boardPiece.classList.add("black");

        }

    }
    set = set.appendChild(boardPiece);
}

function cartCount() {
    var request = prompt( "укажите товар");
    var catalog = [["ложка", 500], ["вилка", 300], ["нож",400]];
    var cart = document.querySelector("div .cart");
    for(request in catalog) {
        var name = document.createElement("div");
        name.innerHTML = request + "cost"
    }

}
