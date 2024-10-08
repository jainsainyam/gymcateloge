// Select elements
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;
const totalItems = carouselItems.length;
const intervalTime = 3000; // Time in milliseconds for auto-slide

// Function to go to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalItems; // Loop back to start
  updateCarousel();
}

// Function to go to the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Loop back to end if at the start
  updateCarousel();
}

// Update the carousel position
function updateCarousel() {
  const translateX = -currentIndex * 100;
  carousel.style.transform = `translateX(${translateX}%)`;
}

// Auto-slide functionality
let autoSlide = setInterval(nextSlide, intervalTime);

// Event listeners for arrow buttons
nextBtn.addEventListener('click', () => {
  clearInterval(autoSlide); // Stop auto-slide when manually navigating
  nextSlide();
  autoSlide = setInterval(nextSlide, intervalTime); // Restart auto-slide
});

prevBtn.addEventListener('click', () => {
  clearInterval(autoSlide);
  prevSlide();
  autoSlide = setInterval(nextSlide, intervalTime);
});

  // Burger menu toggle
  const burger = document.getElementById('burger');
  const nav = document.querySelector('.nav-links');
  
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });
  