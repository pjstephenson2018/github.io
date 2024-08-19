// script.js
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showNextSlide() {
        // Hide the current slide by removing the active class
        slides[currentIndex].classList.remove('active');

        // Increment the index to show the next slide
        currentIndex = (currentIndex + 1) % slides.length;

        // Show the next slide by adding the active class
        slides[currentIndex].classList.add('active');
    }

    // Initially show the first slide
    slides[currentIndex].classList.add('active');

    // Set the interval to change slides every 5 seconds (5000 milliseconds)
    setInterval(showNextSlide, 5000);
});