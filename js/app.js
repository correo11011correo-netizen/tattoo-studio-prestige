/**
 * 🖋️ MELANIE ART STUDIO | ENGINE v6.0 (PRO GALLERY)
 */

const initApp = () => {
    // --- COLECCIÓN EXTENDIDA DE OBRAS ---
    const works = [
        { id: 1, tag: 'realismo', title: 'León Realista', img: 'https://images.unsplash.com/photo-1550537687-c91072c4792d?w=800&q=80' },
        { id: 2, tag: 'geometria', title: 'Mándala Sagrado', img: 'https://images.unsplash.com/photo-1590208701125-300174e30730?w=800&q=80' },
        { id: 3, tag: 'fineline', title: 'Constelación Minimalista', img: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=800&q=80' },
        { id: 4, tag: 'realismo', title: 'Retrato Clásico', img: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&q=80' },
        { id: 5, tag: 'geometria', title: 'Patrón Matemático', img: 'https://images.unsplash.com/photo-1562158074-a6697be47820?w=800&q=80' },
        { id: 6, tag: 'fineline', title: 'Botánica Tenuis', img: 'https://images.unsplash.com/photo-1542464499-0780f2382354?w=800&q=80' },
        { id: 7, tag: 'realismo', title: 'Ojo del Tiempo', img: 'https://images.unsplash.com/photo-1560707854-fb9a10eeaebb?w=800&q=80' },
        { id: 8, tag: 'geometria', title: 'Cubo Zen', img: 'https://images.unsplash.com/photo-1601056639317-0949d0337839?w=800&q=80' },
        { id: 9, tag: 'fineline', title: 'Micro-Realismo', img: 'https://images.unsplash.com/photo-1504198266287-1659872e6590?w=800&q=80' }
    ];

    const flashes = [
        { id: 1, title: 'Rosa Melanie', price: '$180', icon: '🌹' },
        { id: 2, title: 'Puñal Elite', price: '$220', icon: '🗡️' },
        { id: 3, title: 'Cráneo Geométrico', price: '$280', icon: '💀' },
        { id: 4, title: 'Loto Zen', price: '$150', icon: '🪷' }
    ];

    // --- RENDERIZADO ---
    const renderGallery = (filter = 'all') => {
        const container = document.getElementById('main-gallery');
        if (!container) return;
        container.innerHTML = '';
        const filtered = filter === 'all' ? works : works.filter(w => w.tag === filter);
        filtered.forEach(w => {
            const card = document.createElement('article');
            card.className = 'art-card';
            card.innerHTML = `
                <img src="${w.img}" loading="lazy" alt="${w.title}">
                <div style="padding:20px; background:linear-gradient(transparent, #000);">
                    <small style="color:#c5a059; font-weight:800; letter-spacing:2px;">${w.tag.toUpperCase()}</small>
                    <h3 style="margin-top:5px;">${w.title}</h3>
                </div>
            `;
            container.appendChild(card);
        });
    };

    const renderFlashes = () => {
        const container = document.getElementById('flash-catalog');
        if (!container) return;
        container.innerHTML = '';
        flashes.forEach(f => {
            const div = document.createElement('div');
            div.className = 'flash-item';
            div.innerHTML = `
                <div style="font-size:60px; text-align:center; padding:30px; background:#000; border-radius:10px;">${f.icon}</div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:20px;">
                    <div>
                        <h4 style="font-family:'Playfair Display', serif; font-size:20px;">${f.title}</h4>
                        <span style="color:#c5a059; font-weight:800;">${f.price}</span>
                    </div>
                    <button class="booking-btn-gold" style="padding:10px 20px; font-size:9px;">Reservar</button>
                </div>
            `;
            container.appendChild(div);
        });
    };

    // --- MOTOR DEL COTIZADOR PRO ---
    let qStyle = 1;
    let qZone = 1;
    let qSize = 10;

    const updateQuote = () => {
        const base = 50; 
        const total = Math.round((base + (qSize * 5)) * qStyle * qZone);
        document.getElementById('price-estimate').innerText = `$${total}`;
        document.getElementById('size-display').innerText = `${qSize} cm`;
    };

    const setupOptions = (containerId, callback) => {
        const cards = document.querySelectorAll(`#${containerId} .option-card`);
        cards.forEach(card => {
            card.onclick = () => {
                document.querySelector(`#${containerId} .option-card.active`).classList.remove('active');
                card.classList.add('active');
                callback(parseFloat(card.dataset.value));
                updateQuote();
            };
        });
    };

    setupOptions('style-options', (val) => qStyle = val);
    setupOptions('zone-options', (val) => qZone = val);

    const slider = document.getElementById('size-slider');
    if (slider) {
        slider.oninput = (e) => {
            qSize = parseInt(e.target.value);
            updateQuote();
        };
    }

    // --- EVENTOS FILTROS ---
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.onclick = (e) => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            e.target.classList.add('active');
            renderGallery(e.target.dataset.filter);
        };
    });

    // Init All
    renderGallery();
    renderFlashes();
    updateQuote();
};

initApp();

function openBooking() {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
}
