

function countDigits() {
    let input = document.getElementById("numberInput").value;
    let num = Math.abs(Number(input));
    let count = String(num).length;
    document.getElementById("result").textContent = "Количество цифр: " + count;
}
