const labelInput = document.getElementById("labelInput");
const valueInput = document.getElementById("valueInput");
const legend = document.getElementById("legend");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let items = [];

// 파이 조각과 범례를 처음부터 다시 그림
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    legend.innerHTML = "";

    let total = 0;
    items.forEach(item => total += item.value);

    let angle = -Math.PI / 2;

    items.forEach(item => {
        const slice = (item.value / total) * Math.PI * 2;
        const percent = Math.round((item.value / total) * 100);

        // 중심에서 출발 -> 호를 그림 -> 색 채우기
        ctx.beginPath();
        ctx.moveTo(250, 250);
        ctx.arc(250, 250, 150, angle, angle + slice);
        ctx.fillStyle = item.color;
        ctx.fill();

        angle += slice;

        legend.innerHTML += `
            <div class="legend-item">
                <div class="legend-color" style="background-color: ${item.color}"></div>
                <span>${item.name} (${percent}%)</span>
            </div>
        `;
    })
}

document.getElementById("addBtn").onclick = () => {
    const name = labelInput.value.trim();
    const value = Number(valueInput.value);
    if (!name || !value) return;

    // 색상은 랜덤 (색만 무작위, 진하기는 고정)
    const color = `hsl(${Math.random() * 360}, 70%, 60%)`;

    items.push({ name, value, color });
    draw();

    labelInput.value = "";
    valueInput.value = "";
}

document.getElementById("clearBtn").onclick = () => {
    items = [];
    draw();
}
