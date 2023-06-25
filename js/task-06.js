const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", unFocusValid);

function unFocusValid(event) {
  const {
    dataset: { length: dataLength },
    value,
    classList,
  } = event.target;
  classList.add("invalid");
  if (Number(dataLength) === value.length) {
    classList.replace("invalid", "valid");
  }
}
