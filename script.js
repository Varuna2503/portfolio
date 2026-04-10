document.addEventListener('DOMContentLoaded', () => {

    // Terminal typing effect
    const textArray = [
        "Initializing varun.sys...",
        "Loading dependencies: [React, Node, Python, C++]...",
        "Compiling assets... Done.",
        "System ready. Welcome to my portfolio."
    ];
    
    let typeWriterElement = document.getElementById('typewriter-text');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        if (!typeWriterElement) return;

        const currentText = textArray[textIndex];
        
        if (isDeleting) {
            typeWriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typeWriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 20 : 60;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 1500; // pause at end of sentence
            
            // Only loop if not the last sentence
            if (textIndex < textArray.length - 1) {
                 isDeleting = true;
            } else {
                // Stop at the last sentence and add a blinking cursor effect via CSS
                return;
            }
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex++;
            typeSpeed = 500; // pause before typing next sentence
        }
        
        setTimeout(type, typeSpeed);
    }
    
    // Start typing effect after 500ms
    setTimeout(type, 500);


    // Scroll reveal logic
    const reveals = document.querySelectorAll('.reveal');

    function revealOnScroll() {
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    }

    window.addEventListener('scroll', revealOnScroll);
    
    // Trigger once on load
    revealOnScroll();

    // Smooth navigation highlighting could be added here
});
