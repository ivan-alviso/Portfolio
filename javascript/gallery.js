const images = [
  {
    src: "illustrations/Shark-1.jpg",
    caption: "An editorial cartoon that powerfully illustrates the threat of illegal fishing to marine ecosystems, highlighting its destructive impact on shark habitats and the broader oceanic environment."
  },
  {
    src: "illustrations/France-1.jpg",
    caption: "This cartoon symbolizes France's active and urgent effort to deliver humanitarian or military aid to the Philippines, likely in response to a crisis, disaster, or conflict."
              + "The size of the crate and the focused trajectory underscore the magnitude and intent behind the assistance—depicting it as impactful and essential."
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