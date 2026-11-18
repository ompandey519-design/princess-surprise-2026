const modal = document.getElementById('modal');
const modalText = document.getElementById('modalText');
document.querySelectorAll('.envelope').forEach(button => {
  button.addEventListener('click', () => {
    modalText.textContent = button.dataset.note;
    modal.classList.add('show');
  });
});
document.getElementById('closeModal').addEventListener('click', () => modal.classList.remove('show'));
modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('show'); });

document.getElementById('hugBtn').addEventListener('click', () => {
  document.getElementById('hugMessage').textContent = 'A biiiiig panda hug, wrapped with all my love! 🐼💗';
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement('span');
    heart.textContent = ['♡','♥','✦'][Math.floor(Math.random()*3)];
    heart.style.cssText = `position:fixed;left:${Math.random()*100}vw;top:${55+Math.random()*35}vh;color:#e68fb3;font-size:${16+Math.random()*20}px;pointer-events:none;z-index:20;transition:transform 1.5s,opacity 1.5s`;
    document.body.appendChild(heart);
    requestAnimationFrame(() => { heart.style.transform = `translateY(-${100+Math.random()*180}px) rotate(30deg)`; heart.style.opacity = '0'; });
    setTimeout(() => heart.remove(), 1600);
  }
});

const music = document.getElementById('bgMusic');
document.getElementById('musicBtn').addEventListener('click', async () => {
  try {
    if (music.paused) { await music.play(); document.querySelector('#musicBtn span').textContent = 'Pause'; }
    else { music.pause(); document.querySelector('#musicBtn span').textContent = 'Music'; }
  } catch (e) {
    document.querySelector('#musicBtn span').textContent = 'Add music.mp3';
  }
});