const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.lineWidth = 2;
ctx.lineCap = "round";

canvas.onpointerdown = (e) => {
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

// e.buttons 는 누르고 있는 중일 때만 1
canvas.onpointermove = (e) => {
    if (!e.buttons) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}

document.getElementById("clearBtn").onclick = () => ctx.clearRect(0, 0, canvas.width, canvas.height);

// a 태그를 만들어 클릭시키면 다운로드됨
document.getElementById("saveBtn").onclick = () => {
    const link = document.createElement("a");
    link.download = "signature.png";
    link.href = canvas.toDataURL();
    link.click();
}
