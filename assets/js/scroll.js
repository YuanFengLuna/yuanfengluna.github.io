/**
 * Scroll reveal animations using Intersection Observer
 * Adds 'visible' class to elements with 'reveal' class when they enter viewport
 */
(function () {
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        // Show everything immediately
        var elements = document.querySelectorAll('.reveal');
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.add('visible');
        }
        return;
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    var revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(function (el) {
        observer.observe(el);
    });

    // Typing animation for entry tagline
    var tagline = document.getElementById('typed-tagline');
    if (tagline) {
        var text = 'Building agentic AI that works for humans.';
        var charIndex = 0;

        function typeChar() {
            if (charIndex < text.length) {
                tagline.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, 40 + Math.random() * 30);
            }
        }

        // Start typing after a brief delay
        setTimeout(typeChar, 400);
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;

            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
})();
