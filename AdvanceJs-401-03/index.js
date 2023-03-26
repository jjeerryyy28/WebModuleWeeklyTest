const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

let currentImage = 0;

images[currentImage].classList.add('active');

function nextImage() {
  images[currentImage].classList.remove('active');
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  images[currentImage].classList.add('active');
}

function prevImage() {
  // Hide the current image
  images[currentImage].classList.remove('active');
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  images[currentImage].classList.add('active');
}

// Add event listeners for arrow key presses
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    prevImage();
  } else if (event.key === 'ArrowRight') {
    nextImage();
  }
});

// Automatically show the next image every 5 seconds
setInterval(nextImage, 5000);

// Resize images to fit screen
function resizeImages() {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  
  images.forEach(function(image) {
    const imageRatio = image.naturalWidth / image.naturalHeight;
    const windowRatio = windowWidth / windowHeight;
    
    if (imageRatio > windowRatio) {
      image.style.width = '100%';
      image.style.height = 'auto';
      image.style.top = 0;
      image.style.left = '50%';
      image.style.transform = 'translateX(-50%)';
    } else {
      image.style.width = 'auto';
      image.style.height = '100%';
      image.style.top = '50%';
      image.style.left = 0;
      image.style.transform = 'translateY(-50%)';
    }
  });
}

resizeImages();
window.addEventListener('resize', resizeImages);
