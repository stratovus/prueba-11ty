addEventListener("DOMContentLoaded", main);

function main() {
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const phone = document.querySelector("#phone");
  const message = document.querySelector("#message");
  const formContact = document.querySelector("#form-contact");
  const btnForm = document.querySelector("#button-submit");

  addEventListener("click", (event) => {
    if (event.target.parentElement.id == "copy-email") {
      let email = event.target.parentElement.dataset.email;
      copy(email);
    }
  });

  formContact.addEventListener("submit", (event) => {
    if (
      !name.validity.valid ||
      !email.validity.valid ||
      !phone.validity.valid ||
      !message.validity.valid
    ) {
      event.preventDefault();
    }else {
        const reset = setTimeout(() => {
            formContact.reset();
            clearTimeout(reset);
        }, 3000);

    }
  });
}

async function copy(email) {
  try {
    await navigator.clipboard.writeText(email);
    alert("Se ha copiado correctamente.");
  } catch (err) {
    alert("Error al copiar al portapapeles");
  }
}
