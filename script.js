const body = document.querySelector("body");

const btn = document.createElement("button");
btn.textContent = "new";

body.appendChild(btn);

//Creacion de la cuadricula
const container = document.querySelector(".container");

for (let i = 0; i < 256; i++){
    const item = document.createElement("div");

    item.classList.add("item");

    container.appendChild(item);
}

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

