document.addEventListener('DOMContentLoaded', function () {
  const closeButton = document.querySelector('.close-button-mobile-menu');
  const burgerMenuButton = document.querySelector('.header-burger-btn');
  const overlayMenu = document.querySelector('.overlay-container-mobile-menu');
  const menuLinks = document.querySelectorAll('.mobile-menu-menu-links a');
  const shopNowButton = document.querySelector('.mobile-menu-shop-now-button');

  if (closeButton && burgerMenuButton && overlayMenu && shopNowButton) {
      closeButton.addEventListener('click', () => {
          overlayMenu.classList.remove('is-open');
      });

      burgerMenuButton.addEventListener('click', () => {
          overlayMenu.classList.add('is-open');
      });

      overlayMenu.addEventListener('click', event => {
          if (event.target === overlayMenu) {
              overlayMenu.classList.remove('is-open');
          }
      });

      shopNowButton.addEventListener('click', () => {
          const orderSection = document.querySelector('#order');
          if (orderSection) {
              orderSection.scrollIntoView({ behavior: 'smooth' });
          }
          overlayMenu.classList.remove('is-open');
      });

      menuLinks.forEach(link => {
          link.addEventListener('click', () => {
              overlayMenu.classList.remove('is-open');
          });
      });
  } else {
      console.error('One or more required elements not found.');
  }
});
