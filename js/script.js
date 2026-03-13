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

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function() {
            const timeField = document.getElementById('submissionTime');
            if (timeField) {
                const now = new Date();
                
                // Format for IST (Asia/Kolkata)
                const options = {
                    timeZone: 'Asia/Kolkata',
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: undefined,
                    hour12: true
                };

                const formatter = new Intl.DateTimeFormat('en-GB', options);
                const parts = formatter.formatToParts(now);
                
                // DD-MM-YYYY HH:MM AM/PM (IST)
                let day, month, year, hour, minute, dayPeriod;
                parts.forEach(part => {
                    if (part.type === 'day') day = part.value;
                    if (part.type === 'month') month = part.value;
                    if (part.type === 'year') year = part.value;
                    if (part.type === 'hour') hour = part.value;
                    if (part.type === 'minute') minute = part.value;
                    if (part.type === 'dayPeriod') dayPeriod = part.value.toUpperCase();
                });

                const formattedTime = `${day}-${month}-${year} ${hour}:${minute} ${dayPeriod} (IST)`;
                timeField.value = formattedTime;
            }
        });
    }
});
