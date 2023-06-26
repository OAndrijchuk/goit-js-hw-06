const inputRef = document.querySelector("#controls>input");
const createBtnRef = document.querySelector("[data-create]");
const destroyBtnRef = document.querySelector("[data-destroy]");
const generalContRef = document.querySelector("#boxes");

createBtnRef.addEventListener("click", createBoxesGeneral);
destroyBtnRef.addEventListener("click", destroyBoxes);

function createBoxesGeneral() {
  const countOfElements = Number.parseInt(inputRef.value);
  if (!isNaN(countOfElements)) {
    generalContRef.append(...createBoxes(countOfElements));
    return;
  }
  alert("Виберіть кількість елементів");
}

function destroyBoxes() {
  generalContRef.innerHTML = "";
  totalElements = 0;
}

let totalElements = 0;
function createBoxes(amount) {
  const elements = [];

  for (let i = totalElements; i < amount + totalElements; i += 1) {
    const boxSize = 30 + i * 10;
    const elem = document.createElement("div");
    elem.style.width = `${boxSize}px`;
    elem.style.height = `${boxSize}px`;
    elem.style.backgroundColor = getRandomHexColor();
    elements.push(elem);
  }

  totalElements += amount;
  return elements;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
