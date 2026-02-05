const form = document.getElementById("formulario");
const email = document.getElementById("email");
const password = document.getElementById("password");
const botao = form.querySelector("button");

// Funções de validação
function validarEmail() {
  const erro = email.nextElementSibling;
  if (!email.value.includes("@")) {
    erro.textContent = "Email inválido";
    return false;
  }
  erro.textContent = "";
  return true;
}

function validarPassword() {
  const erro = password.nextElementSibling;
  if (password.value.length < 6) {
    erro.textContent = "Password muito curta";
    return false;
  }
  erro.textContent = "";
  return true;
}

function verificarFormulario() {
  const emailValido = validarEmail();
  const passwordValido = validarPassword();
  botao.disabled = !(emailValido && passwordValido);
}

// Eventos input (tempo real)
email.addEventListener("input", verificarFormulario);
password.addEventListener("input", verificarFormulario);

// Evento blur
email.addEventListener("blur", validarEmail);
password.addEventListener("blur", validarPassword);

// Prevenir envio
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Formulário enviado com sucesso!");
});
