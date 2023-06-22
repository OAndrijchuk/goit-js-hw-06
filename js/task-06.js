const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", unFocusValid);

function unFocusValid(event) {
  const {
    dataset: { length: dataLength },
    value,
    classList,
  } = event.currentTarget;
  classList.add("valid");
  if (dataLength >= value.length) {
    classList.replace("invalid", "valid");
  } else {
    classList.replace("valid", "invalid");
  }
}
