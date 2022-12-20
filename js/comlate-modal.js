(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-open-complate-modal]"),
    closeModalBtn: document.querySelector("[data-close-complate-modal]"),
    backdrop: document.querySelector("[data-complate-backdrop]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  refs.backdrop.addEventListener("click", logBackdropClick);

  function toggleModal() {
    refs.backdrop.classList.toggle("is-hidden-complate");
  }

  function logBackdropClick() {
    console.log("Це клік в бекдроп");
  }
})();
