// Smooth scrolling for navigation links (Optional but good UX)
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// The schema injection is already included in the HTML's inline script.
// You could move the schema object definition here and then inject it,
// but for simplicity and ensuring it's loaded early, inline works well.
// Add any other JS interactivity here (e.g., form validation if you add a form).

console.log("Portfolio Script Loaded"); 