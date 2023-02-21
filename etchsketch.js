const body = document.querySelector("body");

const title = document.createElement("h2");
title.classList.add("header-title");
title.textContent = "Rainbow Etch-a-Sketch!";
body.appendChild(title);

const description = document.createElement("p");
description.classList.add("website-description");
description.textContent = "Mouse over the grid to change the colors!";
body.appendChild(description);

const container = document.createElement("div");
container.style.display = "flex";
body.appendChild(container);
let userDimension

let userInput = parseInt(prompt("How many squares would you like (eg 20 for 20x20 grid)? "))
if (userInput < 1 || userInput > 64) {
    userInput = paseInt(prompt("Please pick a number between 1 and 64: "))
} else {
    userDimension = userInput
}

let squareSize = (400 / userDimension)

for (let i = 0; i < userDimension; i++) {
    const column = document.createElement(`column-${i}`)
    column.style.display = "flex";
    column.style.flexDirection = "column";

    for (let x = 0; x < userDimension; x++) {
        const div = document.createElement(`row-${x}-column-${i}`);
        div.style.width = `${squareSize -2}px`;
        div.style.height = `${squareSize - 2}px`;
        div.style.backgroundColor = "white";
        div.style.borderColor = "black";
        div.style.borderStyle = "solid";
        div.style.borderWidth = "1px";
        div.addEventListener("mouseenter", (e) => {
            rgbArray = [];
            for (i=0; i<3; i++) {
                let randomColor = Math.floor(Math.random() * 255);
                rgbArray.push(randomColor);
            }
            div.style.backgroundColor = `rgb(${rgbArray[0]},${rgbArray[1]},${rgbArray[2]})`;
        })
        column.appendChild(div);
    }
    container.appendChild(column);
}

function reloadPage() {
    location.reload();
    return false;
}

const buttonParagraph = document.createElement("p");
buttonParagraph.classList.add("button-para");
body.appendChild(buttonParagraph);
const reloadButton = document.createElement("button");
reloadButton.textContent = "Click to reload";
buttonParagraph.appendChild(reloadButton);
reloadButton.addEventListener("click", reloadPage);


/*
rgbArray = [];
            for (i=0; i<3; i++) {
                let randomColor = Math.floor(Math.random() * 255);
                rgbArray.push(randomColor);
            }
            div.style.backgroundColor = `rgb(${rgbArray[0]},${rgbArray[1]},${rgbArray[2]})`;
*/