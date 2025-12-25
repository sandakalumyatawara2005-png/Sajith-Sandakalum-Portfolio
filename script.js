// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
  const isLight = document.documentElement.classList.toggle('light');
  toggle.textContent = isLight ? '☀️' : '🌙';
});

// Simple contact form handler (demo only)
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    statusEl.textContent = 'Please fill in all fields.';
    return;
  }

  // Fake send: replace with your backend or service (EmailJS, FormSubmit, Netlify Forms)
  statusEl.textContent = 'Sending...';
  await new Promise((r) => setTimeout(r, 800));
  statusEl.textContent = 'Thanks! I will reply soon.';
  form.reset();
});