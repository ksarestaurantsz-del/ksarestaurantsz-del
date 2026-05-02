// Mobile Nav
function openMobileNav() {
  document.getElementById('mobileNav').classList.add('open');
  document.getElementById('navOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMobileNav() {
  document.getElementById('mobileNav').classList.remove('open');
  document.getElementById('navOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// Search
function doSearch() {
  const q = document.getElementById('searchInput').value.trim();
  if (q) {
    document.getElementById('trending').scrollIntoView({ behavior: 'smooth' });
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('searchInput');
  if (input) {
    input.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
  }
});

function filterCategory(name) {
  document.getElementById('trending').scrollIntoView({ behavior: 'smooth' });
}

// Scroll header shadow
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (header) header.style.boxShadow = window.scrollY > 10 ? '0 4px 24px rgba(0,0,0,0.12)' : '0 2px 20px rgba(0,0,0,0.08)';
});

// Animate cards on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; } });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.rest-card, .cat-card, .city-card, .why-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
});
