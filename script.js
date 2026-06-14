const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if(toggle){
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}
document.querySelectorAll('.track-card button').forEach((btn)=>{
  btn.addEventListener('click', () => {
    document.querySelectorAll('.track-card').forEach(c=>c.classList.remove('active'));
    btn.closest('.track-card').classList.add('active');
  });
});
