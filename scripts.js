

window.addEventListener('scroll', () => {
    document.querySelectorAll('.information, .quote-section, .cta, footer').forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight - 100) {
            section.classList.add('show');
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".hero-text h1 span, .hero-text p span");
    elements.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add('show');
        }, i * 100); // Delays each letter for a smooth reveal
    });
});

window.addEventListener('scroll', () => {
    document.querySelectorAll('.scroll-text').forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            element.classList.add('visible');
        }
    });
});


