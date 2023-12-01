import { ref } from "./ref";

export const toggleMobileMenu = () => {
    const { buttonRef, menuRef } = ref;
  
    buttonRef.addEventListener("click", () => {
      const isMenuOpen =
      buttonRef.getAttribute('aria-expanded') === 'true' || false;
      buttonRef.setAttribute('aria-expanded', !isMenuOpen);
      menuRef.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
    ? 'disableBodyScroll'
    : 'enableBodyScroll';
 
  buttonRef.addEventListener('click', toggleMobileMenu);

      window.matchMedia('(min-width: 835px)').addEventListener('change', e => {
        if (!e.matches) return;
        menuRef.classList.remove('is-open');
        openMenuBtn.setAttribute('aria-expanded', false);
        bodyScrollLock[scrollLockMethod](document.body);
      });
    });
  };