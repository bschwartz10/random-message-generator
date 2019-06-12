const generateButton = document.querySelector(".generate");
const clearButton = document.querySelector(".clear");
const paragraph = document.querySelector(".number");

const numbers = [];
const lowEnd = 1;
const highEnd = 100;
for (let i = lowEnd; i <= highEnd; i++) {
  numbers.push(i);
}

generateButton.addEventListener("click", renderNumber);
clearButton.addEventListener("click", clearNumber);

function renderNumber() {
  const number = numbers[Math.floor(Math.random() * numbers.length)];
  paragraph.innerText = number;
}

function clearNumber() {
  paragraph.innerHTML = "";
}
