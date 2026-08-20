const pw = document.getElementById("pw");
const result = document.getElementById("result");

pw.oninput = () => {    
    const hasUpper = /[A-Z]/.test(pw.value);
    const hasNum = /[0-9]/.test(pw.value);
    const hasSpecial = /[^a-zA-Z0-9]/.test(pw.value);

    if(pw.value.length === 0) {
        result.textContent = '';
        pw.style.borderColor = '#ccc';
    } else if (pw.value.length >=8 && hasUpper && hasNum && hasSpecial) {
        result.textContent = '강함';
        pw.style.borderColor = 'green';
        result.style.color = 'green';
    } else if (pw.value.length >= 6 && hasUpper && hasNum) {
        result.textContent = '보통';
        pw.style.borderColor = 'orange';
        result.style.color = 'orange';
    } else {
        result.textContent = '약함';
        pw.style.borderColor = 'red';
        result.style.color = 'red';
    }
} 