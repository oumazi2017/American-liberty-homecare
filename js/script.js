// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Change icon
            if (navLinks.classList.contains('active')) {
                menuToggle.textContent = '✕';
            } else {
                menuToggle.textContent = '☰';
            }
        });

        // Close menu when clicking on a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                menuToggle.textContent = '☰';
            });
        });
    }

    // File upload label update
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach(input => {
        input.addEventListener('change', function() {
            const label = this.nextElementSibling;
            const fileName = this.files[0] ? this.files[0].name : 'Choose File';
            if (label && label.classList.contains('file-upload-label')) {
                label.querySelector('span:last-child').textContent = fileName;
            }
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Show success message (in real implementation, this would send to server)
            alert('Thank you for contacting us! We will get back to you within 24 hours.');
            
            // Reset form
            contactForm.reset();
            
            console.log('Contact form submitted:', data);
        });
    }

    // Career Form Submission
    const careerForm = document.getElementById('careerForm');
    if (careerForm) {
        careerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate required fields
            const requiredFields = careerForm.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = 'red';
                } else {
                    field.style.borderColor = '';
                }
            });
            
            if (!isValid) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Check if resume is uploaded
            const resumeInput = document.getElementById('resume');
            if (!resumeInput.files.length) {
                alert('Please upload your resume.');
                return;
            }
            
            // Get form data
            const formData = new FormData(careerForm);
            
            // Show success message (in real implementation, this would send to server)
            alert('Thank you for applying! We have received your application and will review it shortly. You will hear from us within 5-7 business days.');
            
            // Reset form
            careerForm.reset();
            
            // Reset file upload labels
            document.querySelectorAll('.file-upload-label span:last-child').forEach(span => {
                span.textContent = 'Choose File';
            });
            
            console.log('Career application submitted');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Form validation helper
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^[\d\s\-\(\)]+$/;
        return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
    }

    // Add real-time validation for email fields
    const emailInputs = document.querySelectorAll('input[type="email"]');
    emailInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value && !validateEmail(this.value)) {
                this.style.borderColor = 'red';
                showValidationMessage(this, 'Please enter a valid email address');
            } else {
                this.style.borderColor = '';
                removeValidationMessage(this);
            }
        });
    });

    // Add real-time validation for phone fields
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value && !validatePhone(this.value)) {
                this.style.borderColor = 'red';
                showValidationMessage(this, 'Please enter a valid phone number');
            } else {
                this.style.borderColor = '';
                removeValidationMessage(this);
            }
        });
    });

    function showValidationMessage(input, message) {
        removeValidationMessage(input);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'validation-error';
        errorDiv.style.color = 'red';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';
        errorDiv.textContent = message;
        input.parentElement.appendChild(errorDiv);
    }

    function removeValidationMessage(input) {
        const existingError = input.parentElement.querySelector('.validation-error');
        if (existingError) {
            existingError.remove();
        }
    }

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and fade-in elements
    const animatedElements = document.querySelectorAll('.card, .fade-in, .feature-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // Sticky header on scroll
    let lastScroll = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '';
        }
        
        lastScroll = currentScroll;
    });

    // Print current year in footer
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('.footer-bottom p');
    if (footerYear && footerYear.textContent.includes('2025')) {
        footerYear.textContent = footerYear.textContent.replace('2025', currentYear);
    }

    // Console message for developers
    console.log('%cAmerican Home Care Services and Staffing', 'font-size: 20px; font-weight: bold; color: #2c5f8d;');
    console.log('%cWebsite designed for quality home care and healthcare staffing services.', 'font-size: 14px; color: #666;');
    console.log('%cNote: This is a demo website. Forms are not connected to a backend.', 'font-size: 12px; color: #e8a03e;');
});

// Prevent form submission if Enter is pressed (except in textareas)
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
        const form = e.target.closest('form');
        if (form) {
            e.preventDefault();
        }
    }
});
