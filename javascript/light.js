document.addEventListener('DOMContentLoaded', type);

    const flashlight1 = document.querySelector('.flashlight-overlay');
    const flashlight2 = document.querySelector('.gradientfilter');

    document.addEventListener('mousemove', (e) => {
      const x = `${e.clientX}px`;
      const y = `${e.clientY}px`;
      flashlight1.style.setProperty('--x', x);
      flashlight1.style.setProperty('--y', y);
      flashlight2.style.setProperty('--x', x);
      flashlight2.style.setProperty('--y', y);
    });
