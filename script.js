// ======================================================
// 01 - Seleção de elementos
// ======================================================

const galeria = document.querySelector(".galeria");
const modal = document.querySelector(".modal");
const imagemGrande = document.getElementById("imagemGrande");
const btnFechar = document.querySelector(".fechar");

// ======================================================
// 02 - Event Delegation (clicar em card abre modal)
// ======================================================

galeria.addEventListener("click", (e) => {
  const card = e.target.closest(".card");

  if (card) {
    // Pega a imagem dentro do card
    const img = card.querySelector("img");
    imagemGrande.src = img.src;
    modal.classList.remove("hidden");
  }
});

// ======================================================
// 03 - Fechar clicando fora (bubbling)
// ======================================================

modal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// ======================================================
// 04 - stopPropagation
// Evita fechar ao clicar dentro da modal-content
// ======================================================

document.querySelector(".modal-content").addEventListener("click", (e) => {
  e.stopPropagation();
});

// ======================================================
// 05 - Botão fechar (X)
// ======================================================

btnFechar.addEventListener("click", (e) => {
  e.stopPropagation();
  modal.classList.add("hidden");
});

// ======================================================
// 06 - Fechar com tecla ESC
// ======================================================

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.add("hidden");
  }
});
