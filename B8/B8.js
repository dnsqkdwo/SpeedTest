const notice = document.getElementById("notice");

// 박스 만들고, 클릭하면 닫고, 5초뒤 닫고
function showMsg(text, type) {
    const msg = document.createElement("div");
    msg.className = `message ${type}`;
    msg.textContent = text;
    msg.onclick = () => msg.remove();
    setTimeout(() => msg.remove(), 5000);
    notice.appendChild(msg);
}

// 버튼은 함수만 호출
document.getElementById("sucBtn").onclick = () => showMsg("성공하였습니다", "success");
document.getElementById("failBtn").onclick = () => showMsg("실패하였습니다", "fail");