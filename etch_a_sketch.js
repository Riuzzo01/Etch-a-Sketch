function setGridDimension(dim) {
    const containerOld = document.querySelector("#container");
    containerOld.remove()
    const containerNew = document.createElement("div");
    containerNew.id = "container";
    containerNew.setAttribute("style", " margin: 0 auto; border: 3px solid red; width: 500px; height: 500px; background-color: aliceblue; display: grid; grid-template-rows: repeat(" + dim + ", " + 500.0/dim + "px); grid-template-columns: repeat(" + dim + ", " + 500.0/dim + "px);");
    document.querySelector("body").appendChild(containerNew);
    for(let i = 1; i <= dim; i++) {
        for(let j = 1; j <= dim; j++) {
            const square = document.createElement("div");
            square.setAttribute("style", "grid-column-start: " + i + "; grid-row-start: " + j + "; grid-column-end: " + i + "; grid-row-end: " + j + "; border: 1px solid black; background-color: white"); 
            containerNew.appendChild(square);
        }
    }
}

function filler() {
    document.querySelectorAll("#container div").forEach(element => { 
        element.addEventListener("mouseover", () => {element.setAttribute("style", "background-color: black;");});
    });
}

setGridDimension(30);

const radio10 = document.querySelector("#radio10");
const radio20 = document.querySelector("#radio20");
const radio30 = document.querySelector("#radio30");

radio10.addEventListener("click", () => {setGridDimension(10);});
radio20.addEventListener("click", () => {setGridDimension(20);});
radio30.addEventListener("click", () => {setGridDimension(30);});

const color = document.querySelector("button");

color.addEventListener("click", filler)

