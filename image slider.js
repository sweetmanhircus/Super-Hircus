const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

// Function to update the slide position
function updateSlidePosition() {
  const slideWidth = slides[0].clientWidth;
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Add click event for next button
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlidePosition();
  updateDots();
});

// Add click event for previous button
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlidePosition();
  updateDots();
});

// Update active dot
function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

// Auto-scroll functionality
let autoScroll = setInterval(() => {
  nextBtn.click();
}, 4000);

// Pause auto-scroll on mouse hover
slider.addEventListener('mouseenter', () => clearInterval(autoScroll));
slider.addEventListener('mouseleave', () => {
  autoScroll = setInterval(() => {
    nextBtn.click();
  }, 4000);
});

// Ensure proper alignment on window resize
window.addEventListener('resize', updateSlidePosition);

// Initialize
updateSlidePosition();
updateDots();
