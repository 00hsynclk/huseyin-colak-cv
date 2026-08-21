// scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}
// safety net: never leave content permanently hidden
setTimeout(() => revealEls.forEach(el => el.classList.add('in')), 2500);

// live sync timestamp
const syncEl = document.getElementById('sync-time');
if (syncEl) {
  const fmt = () => {
    const d = new Date();
    return d.toLocaleString('tr-TR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };
  syncEl.textContent = fmt();
  setInterval(() => { syncEl.textContent = fmt(); }, 1000);
}
