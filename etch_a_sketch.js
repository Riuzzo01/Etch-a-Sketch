

function setGridDimension(dim) {
    const container = document.querySelector(".container");
    container.setAttribute("style", "display: grid; grid-template-row: repeat(" + dim + ", " + 500.0/dim + "px); grid-template-columns: repeat(" + dim + ", " + 500.0/dim + "px);");
    for(let i = 1; i <= dim; i++) {
        for(let j = 1; j <= dim; j++) {
            const square = document.createElement("div");
            square.setAttribute("style", "grid-column-start: " + i + "; grid-row-start: " + j + "; grid-column-end: " + i + "; grid-row-end: " + j + "; border: 1px solid black; background-color: white"); 
            container.appendChild(square);
        }
    }
}

setGridDimension(13);