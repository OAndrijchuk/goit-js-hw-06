const value = document.querySelector("#value");
const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

incBtn.addEventListener("click", onChangeCounter);
decBtn.addEventListener("click", onChangeCounter);

function onChangeCounter({ target }) {
  target.dataset.action === "decrement"
    ? (counterValue -= 1)
    : (counterValue += 1);

  value.textContent = counterValue;
}
