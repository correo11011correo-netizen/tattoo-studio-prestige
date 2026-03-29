/**
 * 🖋️ MELANIE ART STUDIO | ENGINE v7.0 (INSTA HUB)
 */

const initApp = () => {
    // --- DATOS GALERÍA ---
    const works = [
        { id: 1, tag: 'realismo', title: 'León Realista', img: 'https://images.unsplash.com/photo-1550537687-c91072c4792d?w=800' },
        { id: 2, tag: 'geometria', title: 'Fractal Sagrado', img: 'https://images.unsplash.com/photo-1590208701125-300174e30730?w=800' },
        { id: 3, tag: 'fineline', title: 'Constelación', img: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=800' },
        { id: 4, tag: 'realismo', title: 'Sombra Profunda', img: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800' }
    ];

    // --- DATOS INSTAGRAM FEED ---
    const instaPosts = [
        'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=500',
        'https://images.unsplash.com/photo-1590208701125-300174e30730?w=500',
        'https://images.unsplash.com/photo-1560707854-fb9a10eeaebb?w=500',
        'https://images.unsplash.com/photo-1562158074-a6697be47820?w=500',
        'https://images.unsplash.com/photo-1504198266287-1659872e6590?w=500',
        'https://images.unsplash.com/photo-1550537687-c91072c4792d?w=500'
    ];

    const renderGallery = (filter = 'all') => {
        const container = document.getElementById('main-gallery');
        if (!container) return;
        container.innerHTML = '';
        const filtered = filter === 'all' ? works : works.filter(w => w.tag === filter);
        filtered.forEach(w => {
            const card = document.createElement('article');
            card.className = 'art-card';
            card.innerHTML = `
                <img src="${w.img}" alt="${w.title}">
                <div style="padding:15px; background:rgba(0,0,0,0.8);">
                    <small style="color:#c5a059;">${w.tag.toUpperCase()}</small>
                    <h3 style="font-size:18px;">${w.title}</h3>
                </div>
            `;
            container.appendChild(card);
        });
    };

    const renderInstaFeed = () => {
        const container = document.getElementById('insta-feed');
        if (!container) return;
        instaPosts.forEach(src => {
            const post = document.createElement('div');
            post.className = 'insta-post';
            post.innerHTML = `<img src="${src}" alt="Melanie Instagram">`;
            container.appendChild(post);
        });
    };

    // --- COTIZADOR PRO ---
    let qStyle = 1, qZone = 1, qSize = 10;
    const updateQuote = () => {
        const total = Math.round((50 + (qSize * 5)) * qStyle * qZone);
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

    setupOptions('style-options', v => qStyle = v);
    setupOptions('zone-options', v => qZone = v);
    const slider = document.getElementById('size-slider');
    if(slider) slider.oninput = (e) => { qSize = e.target.value; updateQuote(); };

    // --- INIT ---
    renderGallery();
    renderInstaFeed();
    updateQuote();
};

initApp();

function openBooking() {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
}
