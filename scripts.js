const buttonForm = document.querySelector(".button-form");

function validateForm() {
  const inputEmpty = "O campo precisa estar preenchido com seu e-mail!";
  const emailInvalid = "E-mail inválido!";

  const mainContainer = document.querySelector(".main-container");

  const inputForm = document.querySelector("#email").value;

  let alertContainer = document.createElement("div");

  if (inputForm === "" || inputForm === null) {
    alertContainer.innerHTML = `
        <i class="fa-solid fa-triangle-exclamation"></i>
        <span>${inputEmpty}</span>
    `;

    alertContainer.classList.add("alert-container");
    mainContainer.appendChild(alertContainer);

    setTimeout(() => {
      alertContainer.parentNode.removeChild(alertContainer);
    }, 5000);
  } else if (inputForm.indexOf("@") === -1 || inputForm.indexOf(".") === -1) {
    alertContainer.innerHTML = `
        <i class="fa-solid fa-triangle-exclamation"></i>
        <span>${emailInvalid}</span>
    `;

    alertContainer.classList.add("alert-container");
    mainContainer.appendChild(alertContainer);

    setTimeout(() => {
      alertContainer.parentNode.removeChild(alertContainer);
    }, 5000);
  }
}

buttonForm.addEventListener("click", validateForm);
