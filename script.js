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

// Toggle Mobile Menu
function toggleMenu() {
    const nav = document.getElementById('mainNav');
    nav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
}

// Close menu when clicking a link
document.querySelectorAll('#mainNav a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mainNav').classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

// Go Top Button
window.addEventListener('scroll', function() {
    const goTopBtn = document.getElementById('goTopBtn');
    const triggerHeight = window.innerHeight * 0.8;
    
    if (window.pageYOffset > triggerHeight) {
        goTopBtn.classList.add('show');
    } else {
        goTopBtn.classList.remove('show');
    }
});

document.getElementById('goTopBtn').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// The schema injection is already included in the HTML's inline script.
// You could move the schema object definition here and then inject it,
// but for simplicity and ensuring it's loaded early, inline works well.
// Add any other JS interactivity here (e.g., form validation if you add a form).

console.log("Portfolio Script Loaded"); 