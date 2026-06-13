const contactBtn = document.getElementById("contactBtn");
const modal = document.getElementById("contactModal");

function openModal() {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

contactBtn.addEventListener("click", () => {
  contactBtn.classList.add("is-pressed");
  setTimeout(() => contactBtn.classList.remove("is-pressed"), 180);
  openModal();
});

modal.querySelectorAll("[data-close]").forEach((el) => {
  el.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});
