document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const toggleBtn = document.querySelector('.navbar__toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.mobile-menu__close');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    }

    // Close menu when clicking outside (optional)
    document.addEventListener('click', (e) => {
        if (mobileMenu.classList.contains('active') && !mobileMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
            mobileMenu.classList.remove('active');
        }
    });

    // Sticky Navbar (optional enhancement)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
        } else {
            navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
        }
    });

    // FAQ Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const body = header.nextElementSibling;

            // Close other items (optional - if you want only one open at a time)
            document.querySelectorAll('.accordion-item').forEach(i => {
                if (i !== item) {
                    i.classList.remove('active');
                    i.querySelector('.accordion-body').style.maxHeight = null;
                    const icon = i.querySelector('.accordion-header i');
                    if (icon) {
                        icon.classList.remove('fa-minus');
                        icon.classList.add('fa-plus');
                    }
                }
            });

            // Toggle current
            item.classList.toggle('active');

            const icon = header.querySelector('i');
            if (item.classList.contains('active')) {
                body.style.maxHeight = body.scrollHeight + "px";
                if (icon) {
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                }
            } else {
                body.style.maxHeight = null;
                if (icon) {
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                }
            }
        });
    });

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero Animations
    const heroTl = gsap.timeline();
    heroTl.from('.hero__content > *', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    })
        .from('.hero-card', {
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        }, "-=0.4");

    // Common Section Title Animation
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });
    });

    // Trusted Marquee
    gsap.from('.marquee-logos i', {
        scrollTrigger: {
            trigger: '.trusted-marquee',
            start: "top 90%",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1
    });

    // About Section
    gsap.from('.about__collage img', {
        scrollTrigger: {
            trigger: '.about',
            start: "top 75%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });

    gsap.from('.about__list li', {
        scrollTrigger: {
            trigger: '.about__content',
            start: "top 80%",
        },
        x: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1
    });

    // Services List based
    gsap.from('.service-row', {
        scrollTrigger: {
            trigger: '.services-list',
            start: "top 75%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2
    });

    // Why Choose Us
    gsap.from('.why-item', {
        scrollTrigger: {
            trigger: '.why-us__list',
            start: "top 80%",
        },
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2
    });

    gsap.from('.why-us__image', {
        scrollTrigger: {
            trigger: '.why-us__image-wrapper',
            start: "top 75%",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.experience-badge', {
        scrollTrigger: {
            trigger: '.why-us__image-wrapper',
            start: "top 75%",
        },
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: 'back.out(1.7)'
    });

    // Video Section
    gsap.from('.video-overlay > *', {
        scrollTrigger: {
            trigger: '.video-section',
            start: "top 70%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    });

    // Leadership Team
    gsap.from('.team-card', {
        scrollTrigger: {
            trigger: '.team-grid',
            start: "top 75%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    });

    // Process Steps
    gsap.from('.process-step', {
        scrollTrigger: {
            trigger: '.process-timeline',
            start: "top 75%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2
    });

    // Contact Form
    gsap.from('.contact__form', {
        scrollTrigger: {
            trigger: '.contact',
            start: "top 75%",
        },
        x: -30,
        opacity: 0,
        duration: 0.8
    });

    gsap.from('.contact__image-wrapper', {
        scrollTrigger: {
            trigger: '.contact',
            start: "top 75%",
        },
        x: 30,
        opacity: 0,
        duration: 0.8
    });

    // FAQ
    gsap.from('.accordion-item', {
        scrollTrigger: {
            trigger: '.faq__accirdion',
            start: "top 80%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1
    });

    // Blog
    gsap.from('.blog-card', {
        scrollTrigger: {
            trigger: '.blog-grid',
            start: "top 75%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    });

});
