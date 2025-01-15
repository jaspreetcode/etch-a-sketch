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
        const red = Math.random() * 255;
        const green = Math.random() * 255;
        const blue = Math.random() * 255;
        e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }

    squareDivs.forEach(div => {
        div.addEventListener("mouseover", addColor);
    });
}

listen();
