const tableHeader = document.getElementById("tableHeader");
const tableBody = document.getElementById("tableBody");
const pagination = document.getElementById("pagination");

const size = 10;

let rows = [];
let now = 1;

// 현재 페이지의 10줄과 페이지 버튼을 다시 그림
function draw() {
    const last = Math.ceil(rows.length / size);

    tableBody.innerHTML = "";
    rows.slice((now - 1) * size, now * size).forEach(row => {
        tableBody.innerHTML += `<tr><td>${row.join("</td><td>")}</td></tr>`;
    })

    pagination.innerHTML = `<button onclick="now--; draw()" ${now === 1 ? "disabled" : ""}>이전</button>`;

    for (let i = 1; i <= last; i++) {
        pagination.innerHTML += `<button class="${i === now ? "active" : ""}" onclick="now = ${i}; draw()">${i}</button>`;
    }

    pagination.innerHTML += `<button onclick="now++; draw()" ${now === last ? "disabled" : ""}>다음</button>`;
}

fetch("sample-data.csv")
    .then(res => res.text())
    .then(text => {
        // 줄로 자르고, 각 줄을 쉼표로 자름
        const lines = text.trim().split("\n").map(line => line.split(","));

        tableHeader.innerHTML = `<tr><th>${lines[0].join("</th><th>")}</th></tr>`;
        rows = lines.slice(1);
        draw();
    }
)
