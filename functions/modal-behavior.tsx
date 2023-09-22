export const openContactModal = () => {
  const contactModal = document.getElementById("contact_modal");
  const contactModalBackground = document.getElementById("contact_modal_background");

  if (contactModal !== null && contactModalBackground !== null) {
    contactModal.classList.add("contact_modal_open");
    contactModalBackground.classList.add("contact_modal_open");
  }
}

export const closeContactModal = () => {
  const contactModal = document.getElementById("contact_modal");
  const contactModalBackground = document.getElementById("contact_modal_background");

  if (contactModal !== null && contactModalBackground !== null) {
    contactModal.classList.add("contact_modal_close");

    setTimeout(() => {
      contactModal.classList.remove("contact_modal_open");
      contactModal.classList.remove("contact_modal_close");
      contactModalBackground.classList.remove("contact_modal_open");
    }, 300);
  }
}