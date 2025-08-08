const illustration_images = [
  {
    src: "illustrations/Shark-1.jpg",
    caption: "An editorial cartoon that depicts the destructive impact of illegal fishing on marine ecosystems, focusing on the critical threat it poses to shark populations and oceanic balance."
  },
  {
    src: "illustrations/France-1.jpg",
    caption: "This cartoon portrays France's urgent and deliberate assistance to the Philippines, emphasizing the scale, precision, and significance of its humanitarian or military support."
  },
  {
    src: "illustrations/Child-1.jpg",
    caption: "This cartoon depicts a bloody imbalance of justice. It critiques a justice system where innocence is corrupted and justice is silenced."
  }
];

let currentIndex_Illustration = 0;
const imageEl_Illustration = document.getElementById('galleryIllustrations');
const captionEl_Illustration = document.getElementById('illustration-caption');

function showIllustration(index) {
  imageEl_Illustration.src = illustration_images[index].src;
  captionEl_Illustration.textContent = illustration_images[index].caption;
}

function prevIllustration() {
  currentIndex_Illustration = (currentIndex_Illustration - 1 + illustration_images.length) % illustration_images.length;
  showIllustration(currentIndex_Illustration);
}

function nextIllustration() {
  currentIndex_Illustration = (currentIndex_Illustration + 1) % illustration_images.length;
  showIllustration(currentIndex_Illustration);
}