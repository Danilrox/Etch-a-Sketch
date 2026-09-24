const body = document.querySelector("body");

const btn = document.createElement("button");
btn.textContent = "new";

body.appendChild(btn);

const container = document.querySelector(".container");

btn.addEventListener("click", (event) => {
    let size = prompt("Ingresa el tamano de la cuadricula", "ej: 20");
    while (size > 100) {
        size = prompt("la cuadricula no puede ser mayor a 100");
    }

    container.replaceChildren(); //Elimina la cuadricula antigua

    const items = generateSquares(size);

    defineWidthSquares(items, size);

    paint(items);
});

function generateSquares(size) {
    let numOfItems = size * size; 

    for (let i = 0; i < numOfItems; i++){
    const item = document.createElement("div");

    item.classList.add("item");

    container.appendChild(item);
    }

    return document.querySelectorAll(".item");
}

function defineWidthSquares(items, size) {
    items.forEach((item) => {
        item.style.width = `${100 / size}%`;
    });
}

function paint(items) {
    let mouseDown = false;

    items.forEach((item) => {

        item.addEventListener("mousedown", () => {
            mouseDown = true;
            item.style.background = "black";
        });

        item.addEventListener("mouseover", () => {
            if (mouseDown) {
                item.style.background = "black";
            }
        });
    });

    document.addEventListener("mouseup", () => {
        mouseDown = false;
    });
}