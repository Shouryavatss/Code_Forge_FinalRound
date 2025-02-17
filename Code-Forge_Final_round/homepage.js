document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Random background images for story cards
    const storyImages = document.querySelectorAll('.story-image');
    const imageThemes = ['fantasy', 'magic', 'dragon'];
    
    storyImages.forEach((image, index) => {
        image.style.backgroundImage = `url(https://source.unsplash.com/random/400x300/?${imageThemes[index]})`;
    });

    // Animation for story cards on scroll
    const storyCards = document.querySelectorAll('.story-card');
    
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    storyCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        observer.observe(card);
    });

    // Interactive buttons
    const ctaButton = document.querySelector('.cta-button');
    const readMoreButtons = document.querySelectorAll('.read-more');

    ctaButton.addEventListener('click', () => {
        document.querySelector('#stories').scrollIntoView({
            behavior: 'smooth'
        });
    });

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const storyTitle = this.parentElement.querySelector('h3').textContent;
            alert(`Opening story: ${storyTitle}`);
        });
    });
});
