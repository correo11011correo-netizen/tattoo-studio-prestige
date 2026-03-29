/**
 * 🖋️ INK MASTER ELITE | CORE ENGINE
 * Gestión de animaciones y UX Premium
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Reveal on Scroll
    const revealElements = document.querySelectorAll('.art-card, .section-title, .about-text');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 1s cubic-bezier(0.16, 1, 0.3, 1)";
        revealObserver.observe(el);
    });

    // Inyección de estilos dinámicos para el reveal
    const style = document.createElement('style');
    style.innerHTML = `
        .active { 
            opacity: 1 !important; 
            transform: translateY(0) !important; 
        }
    `;
    document.head.appendChild(style);

    // 2. Smooth Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Header Parallax Effect
    window.addEventListener('scroll', () => {
        const scroll = window.pageYOffset;
        const logo = document.querySelector('.logo-text');
        if (logo) {
            logo.style.letterSpacing = `${3 + scroll/100}px`;
        }
    });

    console.log("Elite Ink Studio: Systems Online.");
});
