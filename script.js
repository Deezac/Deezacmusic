const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuToggle && nav) menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', () => nav?.classList.remove('open')));
