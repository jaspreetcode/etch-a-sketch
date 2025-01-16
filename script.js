const container = document.querySelector(".container");
const popupButton = document.querySelector(".popup");

let numberOfSquares = 16;
let opacity = 0.1;

function createGrid(numberOfSquares) {
    for (i = 0; i < numberOfSquares * numberOfSquares; i++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        squareDiv.style.width = (container.clientWidth / numberOfSquares) + "px";
        squareDiv.style.height = (container.clientHeight / numberOfSquares) + "px";
        squareDiv.style.opacity = 1;
        squareDiv.setAttribute("data-flag", "true");
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
        if (e.target.style.opacity == 1 && e.target.dataset.flag == "true") {
            e.target.style.opacity = 0.1;
            e.target.dataset.flag = false;
        } else if (e.target.style.opacity <= 0.9) {
            console.log(e.target.style.opacity)
            e.target.style.opacity = +(e.target.style.opacity) + opacity;
        }
    }

    squareDivs.forEach(div => {
        let flag = true;
        div.addEventListener("mouseover", addColor);
    });
}

listen();
