const list = document.getElementById("list");

// 저장된 즐겨찾기 id 목록 (처음이면 빈 배열)
let favs = JSON.parse(localStorage.getItem("favs") || "[]");

// 별 모양과 색을 한 번에 반영
function paint(btn, on) {
    btn.textContent = on ? "★" : "☆";
    btn.classList.toggle("on", on);
}

fetch("data.json")
    .then(res => res.json())
    .then(data => data.forEach(item => {
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `
            <div>
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
            </div>
            <button></button>
        `;

        // 저장된 상태를 그리고
        const btn = div.querySelector("button");
        paint(btn, favs.includes(item.id));

        // 누를 때마다 목록에 넣거나 빼고 저장
        btn.onclick = () => {
            const on = !favs.includes(item.id);
            favs = on ? [...favs, item.id] : favs.filter(id => id !== item.id);
            localStorage.setItem("favs", JSON.stringify(favs));
            paint(btn, on);
        }

        list.appendChild(div);
    }))
