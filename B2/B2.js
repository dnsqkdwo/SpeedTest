const todoButton = document.getElementById("todo_button");
const todoInput = document.getElementById("todoInput");
const list = document.getElementById('list');

// 새로운 html요소 추가

todoButton.onclick = () => {
    const text = todoInput.value.trim();
    if (!text) return;
    // 빈칸 추가 방지

    const item = document.createElement("div");
    item.className = "todo-item";
    item.innerHTML = `
        <span>${text}</span>
        <button id="del_button" onclick = "this.parentElement.remove()">삭제</button>
    `;

    list.appendChild(item);
    list.appendChild(item);
    todoInput.value = '';
}