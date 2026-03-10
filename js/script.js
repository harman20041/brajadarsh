document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Sticky Header Scroll Effect
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.padding = '10px 0';
        } else {
            nav.style.padding = '0';
        }
    });

    // Form Validation (if contact form exists)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const messageError = document.getElementById('messageError');

            // Reset errors
            [nameError, emailError, messageError].forEach(err => err.style.display = 'none');

            if (name.value.trim() === '') {
                nameError.textContent = 'Name is required';
                nameError.style.display = 'block';
                isValid = false;
            }

            if (!validateEmail(email.value)) {
                emailError.textContent = 'Please enter a valid email';
                emailError.style.display = 'block';
                isValid = false;
            }

            if (message.value.trim() === '') {
                messageError.textContent = 'Message cannot be empty';
                messageError.style.display = 'block';
                isValid = false;
            }

            if (!isValid) {
                e.preventDefault();
            } else {
                alert('Thank you for your message! We will get back to you soon.');
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
