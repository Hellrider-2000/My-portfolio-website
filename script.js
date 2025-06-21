// This JavaScript provides smooth scrolling functionality for the navigation links.
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Prevent default anchor click behavior
        e.preventDefault();

        // Get the target section's ID from the href attribute
        const targetId = this.getAttribute('href');

        // Select the target element
        const targetElement = document.querySelector(targetId);

        // Check if the target element exists before attempting to scroll
        if (targetElement) {
            // Scroll to the target element with smooth behavior
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            console.warn(`Target element with ID '${targetId}' not found.`);
        }
    });
});

// You can add more JavaScript functionality here if needed in the future,
// such as form validation, dynamic content loading, or animations.
