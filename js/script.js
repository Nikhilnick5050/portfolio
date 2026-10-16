const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    status.textContent = "Please fill in all fields.";
    status.className = "form-status error";
    return;
  }

  // Simulate a successful send (no backend connected yet).
  status.textContent = `Thanks, ${name}! Your message has been sent.`;
  status.className = "form-status success";
  form.reset();
});