document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    // Додати атрибут data-menu-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-menu-open]'),
    // Додати атрибут data-menu-close на кнопку закриття
    closeModalBtn: document.querySelector('[data-menu-close]'),
    // Додати атрибут data-menu на бекдроп меню
    modal: document.querySelector('[data-menu]'),
  };

  if (refs.openModalBtn && refs.closeModalBtn && refs.modal) {
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  } else {
    console.error('Some elements for the menu modal are missing in the DOM.');
  }

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open');
  }
});
