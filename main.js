const gridCanvas = 600;
let gridRows = 16;
let gridCols = 16;

const sketchArea = document.querySelector("#sketch-area");
const sliderContainer = document.querySelector("#slider-container")
const slider = document.querySelector("#slider");
sketchArea.style.width = `${gridCanvas}px`;
sketchArea.style.height = `${gridCanvas}px`;
const sliderValue = document.querySelector("#slider-value");


sliderValue.textContent = `${slider.value} x ${slider.value} (Canvas)`;
sketchArea.style.width = sketchArea.style.height = `${gridCanvas}px`;

function setBackgroundColor() {
    this.style.backgroundColor = "black";
}

function createGridCells() {
    const numOfSquares = (squaresPerSide * squaresPerSide);
    const widthOrHeight = `${(gridCanvas / squaresPerSide) - 2}px`

    for (let i = 0; i < numOfSquares; i++) {
        const gridCell = document.createElement("div");

        gridCell.style.width = gridCell.style.height = widthOrHeight;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener("mouseover", setBackgroundColor);
    }
}

function removeGridCells() {
    while (sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea, firstChild);
    }
}

createGridCells();