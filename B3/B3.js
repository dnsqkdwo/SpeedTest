const box = document.getElementById("box");

const up = document.getElementById("up");
const down = document.getElementById("down");
const left = document.getElementById("left");
const right = document.getElementById("right");

let x = 0;
let y = 0;

up.onclick = () => {
    y -= 10;
    box.style.top = y + "px";
}

down.onclick = () => {
    y = y+10;
    box.style.top = y + "px";
}

left.onclick = () => {
    x -= 10;
    box.style.left = x + "px";
}

right.onclick = () => {
    x += 10;
    box.style.left = x + "px";
}