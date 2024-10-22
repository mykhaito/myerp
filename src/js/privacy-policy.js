(() => {
  const refs = {
    // Додати атрибут data-privacy-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-privacy-open]'),
    // Додати атрибут data-privacy-close на кнопку закриття
    closeModalBtn: document.querySelector('[data-privacy-close]'),
    // Додати атрибут data-privacy на бекдроп privacy
    modal: document.querySelector('[data-privacy]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open');
  }
})();
