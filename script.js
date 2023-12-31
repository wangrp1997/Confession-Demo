const fireworksContainer = document.getElementById('fireworks-container');
const switchButton = document.getElementById('switch-button');
const heartContainer = document.getElementById('heart-container');
let fireworksInterval;
let isHeartVisible = false;

function createFirework() {
  const firework = document.createElement('div');
  firework.className = 'firework';
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  firework.style.left = `${x}px`;
  firework.style.top = `${y}px`;

  fireworksContainer.appendChild(firework);

  firework.addEventListener('animationend', () => {
    firework.remove();
  });
}

function startFireworks() {
  fireworksInterval = setInterval(createFirework, 100);
}

function stopFireworks() {
  clearInterval(fireworksInterval);
}

startFireworks();

switchButton.addEventListener('click', () => {
  if (fireworksInterval) {
    stopFireworks();
  } else {
    startFireworks();
  }
  toggleHeartVisibility();
});

function toggleHeartVisibility() {
  if (isHeartVisible) {
    heartContainer.style.opacity = 0;
  } else {
    heartContainer.style.opacity = 1;
  }
  isHeartVisible = !isHeartVisible;
}
