const design_images = [
  {
    src: "designs/computer-engineering.jpg",
    caption: "I created the official T-shirt design for the entire Computer Engineering Department, representing all academic year levels."
  },
  {
    src: "designs/engineering-dragons.jpg",
    caption: "I designed the winning T-shirt that earned the champion title in our Engineering Department's T-shirt design competition."
  },
  {
    src: "designs/digital-poster.jpg",
    caption: "This digital poster was recognized as the champion entry in a regional-level design competition, highlighting both creativity and technical execution."
  },
  {
    src: "designs/skull-surrealism.jpg",
    caption: "Skullosseum depicts a human skull seamlessly merged with the ancient Roman Colosseum, creating an unsettling yet captivating fusion of anatomy and architecture."
  },
  {
    src: "designs/tilberi-mockup.jpg",
    caption: "Logo design for a local milktea shop featuring a playful coffee-themed pattern and elegant label, displayed in multiple cup sizes for product presentation."
  },
  {
    src: "designs/logo-mockup.jpg",
    caption: "A clean and modern logo design of my name 'IVAN' with a purple-to-blue gradient effect, showcased on textured paper for a realistic branding preview."
  },
  {
    src: "designs/anatomy-mockup.jpg",
    caption: "A minimalist spiral-bound notebook design featuring bold typography and subtle symbolism, created as a clean, modern mockup for anatomy-themed studies."
  }
];

let currentIndex_Design = 0;
const imageEl_Design = document.getElementById('galleryDesigns');
const captionEl_Design = document.getElementById('design-caption');

function showDesign(index) {
  imageEl_Design.src = design_images[index].src;
  captionEl_Design.textContent = design_images[index].caption;
}

function prevDesign() {
  currentIndex_Design = (currentIndex_Design - 1 + design_images.length) % design_images.length;
  showDesign(currentIndex_Design);
}

function nextDesign() {
  currentIndex_Design = (currentIndex_Design + 1) % design_images.length;
  showDesign(currentIndex_Design);
}