const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", sendForm);

function sendForm(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.target;

  if (!email.value || !password.value) {
    alert("Заповніть будь ласка всі поля!!!");
    return;
  }

  console.log({
    [email.name]: email.value,
    [password.name]: password.value,
  });

  event.target.reset();
}
