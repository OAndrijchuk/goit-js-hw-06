const fontSizeControlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

fontSizeControlRef.addEventListener("input", chengFontSize);

function chengFontSize({ target }) {
  textRef.style.fontSize = `${target.value}px`;
}
