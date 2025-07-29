const roles = [
      "I am a graphic artist.",
      "I am an illustrator.",
      "I am a programmer.",
      "I am a data enthusiast.",
      "I am a video editor."
    ];

    const el = document.querySelector('.typewriter-text');
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
    
      const currentRole = roles[roleIndex];
      const currentText = isDeleting
        ? currentRole.substring(0, charIndex--)
        : currentRole.substring(0, charIndex++);

      el.textContent = currentText;

      if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => isDeleting = true, 1200);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }

      const speed = isDeleting ? 50 : 80;
      setTimeout(type, speed);
    }