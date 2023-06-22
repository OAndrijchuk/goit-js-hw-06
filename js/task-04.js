const counter = document.querySelector("#counter");
// Це доступ до елементів здорової людини (так мені здається)
const value = counter.children.value;
const decBtn = counter.firstElementChild;
const incBtn = counter.lastElementChild;

// Це я бавився і ось таке вийшло і воно працює)))
// const { value, 0: decBtn, 2: incBtn } = counter.children;

let counterValue = 0;

incBtn.addEventListener("click", incAction);
decBtn.addEventListener("click", decAction);

function incAction() {
  counterValue += 1;
  value.textContent = counterValue;
}
function decAction() {
  counterValue -= 1;
  value.textContent = counterValue;
}
