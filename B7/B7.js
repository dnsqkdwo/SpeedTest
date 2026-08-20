const otp = document.querySelectorAll("#otp input");
const btn = document.getElementById("btn");

otp.forEach((input, i) => {
    // 숫자만, 다음칸, 버튼체크
    input.oninput = () => {
        input.value = input.value.replace(/\D/g, "");
        if (input.value && i < otp.length - 1) otp[i + 1].focus();
        btn.disabled = [...otp].some(el => !el.value);
    }

    // 백스페이스는 이전칸
    input.onkeydown = (e) => {
        if (e.key === "Backspace" && i > 0) {
            otp[i - 1].value = "";
            otp[i - 1].focus();
        }
    }
})