const images = [
  {
    src: "illustrations/Shark-1.jpg",
    caption: "An editorial cartoon that depicts the destructive impact of illegal fishing on marine ecosystems, focusing on the critical threat it poses to shark populations and oceanic balance."
  },
  {
    src: "illustrations/France-1.jpg",
    caption: "This cartoon portrays France’s urgent and deliberate assistance to the Philippines, emphasizing the scale, precision, and significance of its humanitarian or military support."
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