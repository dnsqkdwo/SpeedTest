const time = document.getElementById("time");
const start = document.getElementById("start");
const reset = document.getElementById("reset");

let on = false;
let base = 0;
let ms = 0;

// 10ms마다 계속 돌면서, 켜져 있을 때만 시간을 갱신
setInterval(() => {
    if (on) ms = Date.now() - base;
    time.textContent = new Date(ms).toISOString().slice(14, 23).replace(".", ":");
}, 10);

start.onclick = () => {
    on = !on;
    if (on) base = Date.now() - ms;
    start.textContent = on ? "중지" : "계속";
    reset.hidden = false;
}

reset.onclick = () => {
    on = false;
    ms = 0;
    start.textContent = "시작";
    reset.hidden = true;
}
