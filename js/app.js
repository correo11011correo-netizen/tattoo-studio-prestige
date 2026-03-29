/**
 * 🖋️ MELANIE ART STUDIO | CORE ENGINE v3.0
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- DATOS MAESTROS (MELANIE COLLECTION) ---
    const works = [
        { id: 1, tag: 'realismo', title: 'Mirada Profunda', img: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=800&q=80' },
        { id: 2, tag: 'geometria', title: 'Fractal Sagrado', img: 'https://images.unsplash.com/photo-1590208701125-300174e30730?auto=format&fit=crop&w=800&q=80' },
        { id: 3, tag: 'fineline', title: 'Trazo Etéreo', img: 'https://images.unsplash.com/photo-1550537687-c91072c4792d?auto=format&fit=crop&w=800&q=80' },
        { id: 4, tag: 'realismo', title: 'Anatomía Noir', img: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=800&q=80' },
        { id: 5, tag: 'geometria', title: 'Orden del Caos', img: 'https://images.unsplash.com/photo-1562158074-a6697be47820?auto=format&fit=crop&w=800&q=80' }
    ];

    const flashes = [
        { id: 1, title: 'Rosa Geométrica', price: '$180', icon: '🌹' },
        { id: 2, title: 'Puñal de Honor', price: '$240', icon: '🗡️' },
        { id: 3, title: 'Serpiente Lunar', price: '$310', icon: '🐍' }
    ];

    // --- RENDERIZADO RÁPIDO ---
    const renderGallery = (filter = 'all') => {
        const container = document.getElementById('main-gallery');
        if (!container) return;
        
        container.style.opacity = '0';
        
        setTimeout(() => {
            container.innerHTML = '';
            const filtered = filter === 'all' ? works : works.filter(w => w.tag === filter);
            
            filtered.forEach(w => {
                const card = document.createElement('article');
                card.className = 'art-card';
                card.innerHTML = `
                    <img src="${w.img}" loading="lazy" alt="${w.title}">
                    <div style="position:absolute; bottom:20px; left:20px; opacity:0.8;">
                        <span style="font-size:10px; color:var(--primary); font-weight:800; text-transform:uppercase;">${w.tag}</span>
                        <h3 style="font-size:18px;">${w.title}</h3>
                    </div>
                `;
                container.appendChild(card);
            });
            container.style.opacity = '1';
        }, 200);
    };

    const renderFlashes = () => {
        const container = document.getElementById('flash-catalog');
        if (!container) return;
        flashes.forEach(f => {
            const item = document.createElement('div');
            item.className = 'flash-item';
            item.innerHTML = `
                <div class="flash-img">${f.icon}</div>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <h3 style="font-size:16px;">${f.title}</h3>
                        <span style="color:var(--primary); font-weight:800; font-family:monospace;">${f.price}</span>
                    </div>
                    <button class="booking-btn" style="padding:8px 15px; font-size:9px;">Reservar</button>
                </div>
            `;
            container.appendChild(item);
        });
    };

    // --- COTIZADOR DINÁMICO ---
    const updateQuote = () => {
        const s = parseInt(document.getElementById('size-select').value);
        const c = parseFloat(document.getElementById('complexity-select').value);
        document.getElementById('price-estimate').innerText = `$${Math.round(s * c)}`;
    };

    // --- INTERSECT OBSERVER (REVEAL) ---
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.style.opacity = "1";
                e.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    // LISTENERS
    document.querySelectorAll('.filter-btn').forEach(b => {
        b.addEventListener('click', (e) => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            e.target.classList.add('active');
            renderGallery(e.target.dataset.filter);
        });
    });

    ['size-select', 'complexity-select'].forEach(id => {
        document.getElementById(id)?.addEventListener('change', updateQuote);
    });

    // INIT
    renderGallery();
    renderFlashes();
    updateQuote();

    document.querySelectorAll('.section').forEach(s => {
        s.style.opacity = "0";
        s.style.transform = "translateY(30px)";
        s.style.transition = "all 0.8s ease-out";
        revealObserver.observe(s);
    });

    console.log("Melanie Art Studio v3.0: All systems optimized.");
});

function openBooking() {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
}
