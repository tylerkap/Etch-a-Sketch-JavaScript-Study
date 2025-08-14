let container = document.querySelector(".container");


function generateBoxes() {
    for (let i = 0; i < 1000; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("box");
        
        container.appendChild(newDiv);

    }
}


generateBoxes();



let boxes = document.querySelectorAll(".box");
let btn = document.querySelector(".btn");

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


btn.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.classList.remove("boxFill");
    });
});





