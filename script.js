// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle
const toggle = document.getElementById('themeToggle');
if (toggle) {
  // Initialize from saved preference, or from system preference if not set
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.documentElement.classList.add('light');
  } else if (saved === 'dark') {
    document.documentElement.classList.remove('light');
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.documentElement.classList.add('light');
  }

  // Reflect initial state in the button
  const isLightInit = document.documentElement.classList.contains('light');
  toggle.textContent = isLightInit ? '☀️' : '🌙';
  toggle.setAttribute('aria-pressed', isLightInit ? 'true' : 'false');

  // Toggle handler: update DOM, button and persist choice
  toggle.addEventListener('click', () => {
    const isLight = document.documentElement.classList.toggle('light');
    toggle.textContent = isLight ? '☀️' : '🌙';
    toggle.setAttribute('aria-pressed', isLight ? 'true' : 'false');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}

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