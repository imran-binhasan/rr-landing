export function scrollToTop(event) {
  if (event) event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function scrollToSection(id, offset = 80) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
}
