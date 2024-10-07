const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;

  // Generate a random color
  const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  cursor.style.backgroundColor = randomColor;

  // Add pulse effect
  cursor.style.animation = 'pulse 0.5s ease forwards';

  // Remove the animation after it completes
  cursor.addEventListener('animationend', () => {
    cursor.style.animation = '';
  }, { once: true });
});