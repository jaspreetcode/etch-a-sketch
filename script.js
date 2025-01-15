const container = document.querySelector(".container");
const popupButton = document.querySelector(".popup");

let numberOfSquares = 16;

function createGrid(numberOfSquares) {
    for (i = 0; i < numberOfSquares * numberOfSquares; i++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        squareDiv.style.width = (container.clientWidth / numberOfSquares) + "px";
        squareDiv.style.height = (container.clientHeight / numberOfSquares) + "px";
        container.appendChild(squareDiv);
    }
}

createGrid(numberOfSquares);

function openPopup() {
    let userInput = prompt("Enter the value between 4 and 100: ");
    if (userInput != null) {
        numberOfSquares = parseInt(userInput);
        container.innerHTML = "";
        createGrid(numberOfSquares);
        listen();
    }
}

popupButton.addEventListener("click", openPopup);

function listen() {
    const squareDivs = document.querySelectorAll("div.square");

    function addColor(e) {
        e.target.style.backgroundColor = "yellow";
    }

    squareDivs.forEach(div => {
        div.addEventListener("mouseover", addColor);
    });
}

listen();
