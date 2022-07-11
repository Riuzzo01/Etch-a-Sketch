function setGridDimension(dim) {
    dimension = dim;
    const containerOld = document.querySelector("#container");
    containerOld.remove()
    const containerNew = document.createElement("div");
    containerNew.id = "container";
    containerNew.setAttribute("style", " margin: 0 auto; border: 3px solid red; width: 500px; height: 500px; display: grid; grid-template-rows: repeat(" + dim + ", " + 500.0/dim + "px); grid-template-columns: repeat(" + dim + ", " + 500.0/dim + "px);");
    document.querySelector("body").appendChild(containerNew);
    for(let i = 1; i <= dim; i++) {
        for(let j = 1; j <= dim; j++) {
            const square = document.createElement("div");
            square.setAttribute("style", "grid-column-start: " + i + "; grid-row-start: " + j + "; border: 1px solid black"); 
            square.style.backgroundColor = "rgb(255, 255, 255)";
            containerNew.appendChild(square);
        }
    }
}

function filler(color) {
        document.querySelectorAll("#container div").forEach(element => { 
            element.addEventListener("mouseleave", (e) => {e.target.style.backgroundColor = color});
        });
    
}

function fillerRainbow() {
        document.querySelectorAll("#container div").forEach(element => { 
            element.addEventListener("mouseleave", (e) => {e.target.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255 + 1) + "," + Math.floor(Math.random() * 255 + 1) + ","  + Math.floor(Math.random() * 255 + 1) + ")";});                                 
            }); 
}

function fillerShade() {
    document.querySelectorAll("#container div").forEach(element => { 
        element.addEventListener("mouseleave", (e) => {shadeColor(e);})});
}

function shadeColor(e) {
    let color = e.target.style.backgroundColor;
    let tripletArray = JSON.parse("[" + color.slice(4, color.length - 1) + "]");
    let color1 = Number(tripletArray[0]);
    let color2 = Number(tripletArray[1]);
    let color3 = Number(tripletArray[2]);
    if((color1 - 30) < 0) {
        color1 = 0;
    }
    else {
        color1 -= 30;
    }

    if((color2 - 30) < 0) {
        color2 = 0;
    }
    else {
        color2 -= 30;
    }

    if((color3 - 30) < 0) {
        color3 = 0;
    }
    else {
        color3 -= 30;
    }

    e.target.style.backgroundColor = "rgb(" + color1 + "," + color2 + "," + color3 + ")";
}

let dimension = 30;
setGridDimension(dimension);


document.querySelectorAll(".dimension button").forEach(element => {
    element.addEventListener("click", (e) => {setGridDimension(Number(e.target.id));});});

const black = document.querySelector("#black");
const clear = document.querySelector("#clear");
const rainbow = document.querySelector("#rainbow");
const white = document.querySelector("#white");
const shade = document.querySelector("#shade")

black.addEventListener("click", () => {filler("rgb(0, 0, 0)");});
white.addEventListener("click", () => {filler("rgb(255, 255, 255)");});
clear.addEventListener("click", () => {setGridDimension(dimension);});
rainbow.addEventListener("click", fillerRainbow);
shade.addEventListener("click", fillerShade);
