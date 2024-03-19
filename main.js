const modal =
  document.getElementById("showModal");

const closeModal =
  document.getElementById("closeModal");
const modalPecasClass = document.querySelector(
  ".modal.modalPecas"
);
const modalInfoClass = document.querySelector(
  ".modal.modalInfo"
);

const modalInfo = document.getElementById(
  "showModalInfo"
);

const closeModalInfo = document.getElementById(
  "closeModalInfo"
);

// Aqui abre o modal de Peças
modal.addEventListener("click", function () {
  modalPecasClass.classList.remove("hidden");
});

// Fecha o Modal de Peças

closeModal.addEventListener("click", function () {
  modalPecasClass.classList.add("hidden");
});

// Aqui abre o modal de Informações
modalInfo.addEventListener("click", function () {
  modalInfoClass.classList.remove("hidden");
});

// Fecha o Modal de Informações

closeModalInfo.addEventListener(
  "click",
  function () {
    modalInfoClass.classList.add("hidden");
  }
);
