const btnAbrir = document.querySelector(".b1");
const btnAbrir2 = document.querySelector(".b2");
const btnFechar = document.querySelector(".fechar");
const containerModal = document.querySelector(".modal-container");

if (btnAbrir && btnFechar && containerModal) {
  function abrirModal(event) {
    event.preventDefault();
    containerModal.classList.add("ativo");
  }

  function fecharModal(event) {
    event.preventDefault();
    containerModal.classList.remove("ativo");
  }

  function foraModal(event) {
    if (event.target === this) fecharModal(event);
  }

  btnAbrir.addEventListener("click", abrirModal);
  btnAbrir2.addEventListener("click", abrirModal);
  btnFechar.addEventListener("click", fecharModal);
  containerModal.addEventListener("click", foraModal);
}
