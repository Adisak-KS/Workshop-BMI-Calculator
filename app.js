const btn = document.querySelector(".btn")
const result = document.querySelector(".result")

btn.addEventListener("click", (e) => {
    e.preventDefault()
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value

    if (weight === "" || isNaN(weight)) {
        result.innerHTML = "กรุณาป้อนน้ำหนักของคุณ";
    } else if (height === "" || isNaN(height)) {
        result.innerHTML = "กรุณาป้อนส่วนสูงของคุณ";
    } else {
        // cm => m
        height = height / 100
        let bmi = (weight / Math.pow(height, 2)).toFixed(2)

        // บอกเกณฑ์
        if (bmi < 18.5) {
            showResult(bmi, "ผอมเกินไป", "blue")
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            showResult(bmi, "ปกติ", "green")
        } else if (bmi >= 25 && bmi <= 29.9) {
            showResult(bmi, "อ้วน", "orange")
        } else {
            showResult(bmi, "อ้วนเกินไป", "red")
        }
    }
})

function showResult(bmi, message, color) {
    result.style.backgroundColor = color
    result.innerHTML = `ผลลัพธ์ = ${bmi} (${message})`;
}