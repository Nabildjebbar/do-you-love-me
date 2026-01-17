const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

noBtn.addEventListener('mouseover', () => {
  const x = Math.floor(Math.random() * 300) - 150;
  const y = Math.floor(Math.random() * 200) - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener('click', () => {
  alert('I love you too ❤️');
});
