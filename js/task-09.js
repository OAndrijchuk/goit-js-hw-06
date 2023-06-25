const changeColorBtnRef = document.querySelector(".change-color");
const colorHeshRef = document.querySelector(".color");

changeColorBtnRef.addEventListener("click", onChangeColor);

function onChangeColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorHeshRef.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
