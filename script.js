function generateBoxes(width, height) {
    container.replaceChildren();
    
    
    
    let canvasSqarePixel = width * height;
    let numBoxes = canvasSqarePixel / 625;

    
    
    let containerWidth = width * 25;
    let containerHeight = height * 25;

    container.style.cssText = `width: ${width}px; height: ${height}px;`;
    
    
    for (let i = 0; i < numBoxes; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("box");
        
        container.appendChild(newDiv);

    }

    let boxes = document.querySelectorAll(".box");



    //Adding mouseover listener event for all boxes

    boxes.forEach((box) => {

        box.addEventListener('mouseover', () => {
        

        if (box.classList.contains("boxFill") === false) {
            box.classList.add("boxFill");
        }
        else {
            box.classList.toggle("boxFill");
        }

        });
        
    });

    //listener event to clear canvas

    btn.addEventListener('click', () => {
        boxes.forEach((box) => {
            box.classList.remove("boxFill");
        });
    });
}

function generateCanvasSize() {

    canvasSizeBtn.addEventListener('click', () => {
        let width = userWidthInput.value;
        let height = userWidthInput.value;

        generateBoxes(width, height);

    });
}


let container = document.querySelector(".container");
let btn = document.querySelector(".btn");
let userWidthInput = document.querySelector("#canvas-width");
let userHeightInput = document.querySelector("#canvas-height");
let canvasSizeBtn = document.querySelector("#canvas-size-btn");

generateBoxes(1000, 625);
generateCanvasSize();











