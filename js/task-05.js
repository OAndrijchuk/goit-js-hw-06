const inputRef = document.querySelector("#name-input");
const nameRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onHelloName);

function onHelloName({ currentTarget: input } = {}) {
  nameRef.textContent = input.value || "Anonymous";
}
