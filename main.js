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

const modalBreve = document.getElementById(
  "showModalBreve"
);

const closeModalInfo = document.getElementById(
  "closeModalInfo"
);
const closeModalBreve = document.getElementById(
  "closeModalBreve"
);

const modalBreveClass = document.querySelector(
  ".modal.modalBreve"
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

// Aqui abre o modal de Em breve
modalBreve.addEventListener("click", function () {
  modalBreveClass.classList.remove("hidden");
});

// Fecha o Modal de Em breve

closeModalBreve.addEventListener(
  "click",
  function () {
    modalBreveClass.classList.add("hidden");
  }
);
