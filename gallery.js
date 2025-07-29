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

        const images = [
      {
        src: "Shark-1.jpg",
        caption: "An editorial cartoon that powerfully illustrates the threat of illegal fishing to marine ecosystems, highlighting its destructive impact on shark habitats and the broader oceanic environment."
      },
      {
        src: "France-1.jpg",
        caption: "This cartoon symbolizes France's active and urgent effort to deliver humanitarian or military aid to the Philippines, likely in response to a crisis, disaster, or conflict."
                  + "The size of the crate and the focused trajectory underscore the magnitude and intent behind the assistance—depicting it as impactful and essential."
      },
      {
        src: "Weiner.jpg",
        caption: "Editorial art showing the ripple effect of illegal shark finning."
      }
    ];

    let currentIndex = 0;
    const imageEl = document.getElementById('galleryImage');
    const captionEl = document.getElementById('caption');

    function showImage(index) {
      imageEl.src = images[index].src;
      captionEl.textContent = images[index].caption;
    }

    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }