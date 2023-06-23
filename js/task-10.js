const inputRef = document.querySelector("#controls>input");
const createBtnRef = document.querySelector("[data-create]");
const destroyBtnRef = document.querySelector("[data-destroy]");
const generalContRef = document.querySelector("#boxes");
console.dir(generalContRef);

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
}

function createBoxes(amount) {
  const elements = [];
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i += 1) {
    if (!i) {
      elements.push(createElement(width, height));
      continue;
    }
    width += 10;
    height += 10;
    elements.push(createElement(width, height));
  }
  return elements;
}

function createElement(width, height) {
  const elem = document.createElement("div");
  elem.style.width = `${width}px`;
  elem.style.height = `${height}px`;
  elem.style.backgroundColor = getRandomHexColor();
  return elem;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
