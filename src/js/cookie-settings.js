document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    // Додати атрибут data-cookie-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-cookie-open]'),
    // Додати атрибут data-cookie-close на кнопку закриття
    closeModalBtn: document.querySelector('[data-cookie-close]'),
    // Додати атрибут data-cookie на бекдроп cookie
    modal: document.querySelector('[data-cookie]'),
  };

  if (!refs.openModalBtn || !refs.closeModalBtn || !refs.modal) {
    console.error('Some elements for cookie modal are missing in the DOM');
    return;
  }

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open');
  }
});