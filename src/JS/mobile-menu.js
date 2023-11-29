import { ref } from "./ref";

export const toggleMobileMenu = () => {
    const { buttonRef, menuRef } = ref;
  
    buttonRef.addEventListener("click", () => {
      menuRef.classList.toggle("is-open");
      buttonRef.classList.toggle("is-open");
    });
  };