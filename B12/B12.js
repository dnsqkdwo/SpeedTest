const upload = document.getElementById("upload");
const preview = document.getElementById("preview");

upload.onchange = () => {
    preview.src = URL.createObjectURL(upload.files[0]);
    preview.hidden = false;
}

// 대입이라 이전 필터를 덮어씀 -> 항상 한 개만 적용됨
function setFilter(name) {
    preview.style.filter = name;
}

document.getElementById("grayBtn").onclick = () => setFilter("grayscale(1)");
document.getElementById("sepiaBtn").onclick = () => setFilter("sepia(1)");
document.getElementById("invertBtn").onclick = () => setFilter("invert(1)");
document.getElementById("originBtn").onclick = () => setFilter("none");
