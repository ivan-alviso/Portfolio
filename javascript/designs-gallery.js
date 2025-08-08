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