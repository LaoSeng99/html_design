document.addEventListener('DOMContentLoaded', () => {
  let cursor = document.querySelector('.cursor');

  const numOfBlocks = 36;
  for (let i = 0; i < numOfBlocks; i++) {
    let span = document.createElement('span');

    span.classList.add('box');
    span.style.setProperty('--i', i + 1);
    span.style.filter = `hue-rotate(${i * 10}deg)`; //rainbow color filter
    cursor.appendChild(span);
  }
});

document.addEventListener('mousemove', (e) => {
  gsap.to('.box', {
    x: e.clientX,
    y: e.clientY,
    rotate: (index) => index * 10,
    stagger: 0.05,
  });
});
