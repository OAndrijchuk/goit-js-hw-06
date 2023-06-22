const inputRef = document.querySelector("#name-input");
const nameRef = document.querySelector("#name-output");

inputRef.addEventListener("input", helloName);

function helloName({ currentTarget: input } = {}) {
  nameRef.textContent = input.value ? input.value : "Anonymous";
}
