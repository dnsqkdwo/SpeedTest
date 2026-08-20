const dropZone = document.getElementById("dropZone");
const guide = `<h2>이미지를 여기에 드래그하세요</h2>`;

// 시작할 때 담고
document.querySelectorAll(".img_box img").forEach(img => {
    img.ondragstart = (e) => e.dataTransfer.setData("src", img.src);
})

// over는 허용만
dropZone.ondragover = (e) => e.preventDefault();

// drop은 허용 + 꺼내서 보여주기
dropZone.ondrop = (e) => {
    e.preventDefault();
    dropZone.innerHTML = `<img src="${e.dataTransfer.getData("src")}">`;
}

// 리셋은 원상복구
document.getElementById("reset").onclick = () => {
    dropZone.innerHTML = guide;
}
