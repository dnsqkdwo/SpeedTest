const btn = document.getElementById("btn");
const colorPicker = document.getElementById("colorPicker");

btn.onclick = () => {
    document.body.style.backgroundColor = colorPicker.value;
}