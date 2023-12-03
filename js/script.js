function startTime() {
const now = new Date();

const hour = now.getHours().toString().padStart(2, "0");
const minute = now.getMinutes().toString().padStart(2, "0");
const second = now.getSeconds().toString().padStart(2, "0")
const date = now.getDate().toString().padStart(2, "0");
const month = now.getMonth().toString().padStart(2, "0");
const year = now.getFullYear();

document.querySelector(".hora").textContent = hour;
document.querySelector(".minuto").textContent = minute;
document.querySelector(".segundo").textContent = second;
document.querySelector(".dia").textContent = date;
document.querySelector(".mes").textContent = month;
document.querySelector(".año").textContent = year;


setTimeout(startTime, 500);
}

window.onload = startTime;
