/**
 * 🖋️ ELITE INK | SISTEMAS INTERACTIVOS v2.0
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- DATOS DE LA GALERÍA ---
    const works = [
        { id: 1, tag: 'realismo', title: 'Retrato Noir', img: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=800&q=80' },
        { id: 2, tag: 'geometria', title: 'Flujo Sagrado', img: 'https://images.unsplash.com/photo-1590208701125-300174e30730?auto=format&fit=crop&w=800&q=80' },
        { id: 3, tag: 'fineline', title: 'Trazo Mínimo', img: 'https://images.unsplash.com/photo-1550537687-c91072c4792d?auto=format&fit=crop&w=800&q=80' },
        { id: 4, tag: 'realismo', title: 'Anatomía de Sombra', img: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=800&q=80' },
        { id: 5, tag: 'geometria', title: 'Cibernética 01', img: 'https://images.unsplash.com/photo-1562158074-a6697be47820?auto=format&fit=crop&w=800&q=80' }
    ];

    // --- DATOS DE FLASHES (VENTA) ---
    const flashes = [
        { id: 1, title: 'Daga de Oro', price: '$250', img: '🗡️' },
        { id: 2, title: 'Ojo Omnisciente', price: '$180', img: '👁️' },
        { id: 3, title: 'Serpiente Infinito', price: '$320', img: '🐍' }
    ];

    // --- RENDERIZAR GALERÍA ---
    const renderGallery = (filter = 'all') => {
        const container = document.getElementById('main-gallery');
        if(!container) return;
        container.innerHTML = '';
        
        const filtered = filter === 'all' ? works : works.filter(w => w.tag === filter);
        
        filtered.forEach(w => {
            const card = document.createElement('article');
            card.className = 'art-card';
            card.innerHTML = `
                <img src="${w.img}" alt="${w.title}">
                <div class="art-info">
                    <span style="color:var(--primary); font-size:10px; font-weight:700;">${w.tag.toUpperCase()}</span>
                    <h3>${w.title}</h3>
                </div>
            `;
            container.appendChild(card);
        });
    };

    // --- RENDERIZAR FLASHES (TIENDA) ---
    const renderFlashes = () => {
        const container = document.getElementById('flash-catalog');
        if(!container) return;
        flashes.forEach(f => {
            const item = document.createElement('div');
            item.className = 'flash-item';
            item.innerHTML = `
                <div class="flash-img" style="font-size: 80px;">${f.img}</div>
                <div class="flash-info">
                    <div>
                        <h3 style="font-size: 18px; font-family:'Playfair Display', serif;">${f.title}</h3>
                        <span class="flash-price">${f.price}</span>
                    </div>
                    <button class="booking-btn" style="padding: 10px 20px; font-size: 9px;">Reservar</button>
                </div>
            `;
            container.appendChild(item);
        });
    };

    // --- LÓGICA DEL COTIZADOR ---
    const updateEstimate = () => {
        const sizeSelect = document.getElementById('size-select');
        const complexitySelect = document.getElementById('complexity-select');
        const result = document.getElementById('price-estimate');
        if(!sizeSelect || !complexitySelect || !result) return;

        const size = parseInt(sizeSelect.value);
        const complexity = parseFloat(complexitySelect.value);
        const total = Math.round(size * complexity);
        result.innerText = `$${total}`;
    };

    // Event Listeners
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const active = document.querySelector('.filter-btn.active');
            if(active) active.classList.remove('active');
            e.target.classList.add('active');
            renderGallery(e.target.dataset.filter);
        });
    });

    const sizeEl = document.getElementById('size-select');
    const compEl = document.getElementById('complexity-select');
    if(sizeEl) sizeEl.addEventListener('change', updateEstimate);
    if(compEl) compEl.addEventListener('change', updateEstimate);

    // Init
    renderGallery();
    renderFlashes();
    updateEstimate();
});

function openBooking() {
    const el = document.getElementById('contacto');
    if(el) el.scrollIntoView({ behavior: 'smooth' });
}
