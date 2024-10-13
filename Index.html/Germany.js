// Select all slides and dots
const slides = document.querySelectorAll(".slides img");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0; // Current slide index
let intervalId = null; // To store the interval for auto-sliding

// Initialize the slider after the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide"); // Show the first slide
        dots[slideIndex].classList.add("active"); // Highlight the first dot
        intervalId = setInterval(nextSlide, 10000); // Auto-slide every 10 seconds
    }
}

// Show a specific slide based on the index
function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0; // Loop back to the first slide
    } else if (index < 0) {
        slideIndex = slides.length - 1; // Loop back to the last slide
    } else {
        slideIndex = index; // Set to the specified index
    }

    // Hide all slides and remove the "active" class from all dots
    slides.forEach((slide, idx) => {
        slide.classList.remove("displaySlide"); // Hide the slide
        dots[idx].classList.remove("active"); // Deactivate the dot
    });

    // Display the current slide and activate the corresponding dot
    slides[slideIndex].classList.add("displaySlide"); // Show the current slide
    dots[slideIndex].classList.add("active"); // Highlight the current dot
}

// Navigate to the previous slide
function prevSlide() {
    clearInterval(intervalId); // Stop auto-slide when manually navigating
    slideIndex--; // Decrement the slide index
    showSlide(slideIndex); // Show the previous slide
}

// Navigate to the next slide
function nextSlide() {
    clearInterval(intervalId); // Stop auto-slide when manually navigating
    slideIndex++; // Increment the slide index
    showSlide(slideIndex); // Show the next slide
}

// Go to a specific slide based on the dot clicked
function currentSlide(index) {
    clearInterval(intervalId); // Stop auto-slide when manually navigating
    showSlide(index); // Show the clicked slide
}
