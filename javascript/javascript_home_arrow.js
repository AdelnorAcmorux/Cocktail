// Wait for the document to fully load before running the JavaScript code
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the scroll element and target element by their IDs
    const scrollIcon = document.getElementById('scroll-icon');
    const targetElement = document.getElementById('scroll-target');

    // Add a click event listener to the scroll element
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            scrollIcon.classList.add('hide');
        } else {
            scrollIcon.classList.remove('hide');
        }
    });
    
    // Add a click event listener to the scroll element
    scrollIcon.addEventListener('click', function () {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
