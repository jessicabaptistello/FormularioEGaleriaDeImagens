const form = document.getElementById("formulario");
const email = document.getElementById("email");
const password = document.getElementById("password");
const botao = form.querySelector("button");
const toggleTema = document.getElementById("toggleTema");


function validarEmail() {
  const erro = email.nextElementSibling;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email.value)) {
    erro.textContent = "Email inválido";
    email.classList.add("invalido");
    email.classList.remove("valido");
    return false;
  }

  erro.textContent = "";
  email.classList.add("valido");
  email.classList.remove("invalido");
  return true;
}

function validarPassword() {
  const erro = password.nextElementSibling;

  if (password.value.length < 6) {
    erro.textContent = "Password muito curta (mín. 6 caracteres)";
    password.classList.add("invalido");
    password.classList.remove("valido");
    return false;
  }

  erro.textContent = "";
  password.classList.add("valido");
  password.classList.remove("invalido");
  return true;
}

function verificarFormulario() {
  const emailValido = validarEmail();
  const passwordValido = validarPassword();

  botao.disabled = !(emailValido && passwordValido);
}


email.addEventListener("input", verificarFormulario);
password.addEventListener("input", verificarFormulario);

email.addEventListener("blur", validarEmail);
password.addEventListener("blur", validarPassword);


form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Enviado com sucesso!");
  form.reset();
  botao.disabled = true;
});

/*
// ============================
// MUDAR TEMA
// ============================

toggleTema.addEventListener("click", () => {
  document.body.classList.toggle("dark");
}); */
