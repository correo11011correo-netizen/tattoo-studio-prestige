/**
 * 🖋️ MELANIE ART STUDIO | ENGINE v9.0 (RE-BORN)
 */

const works = [
    { id: 1, img: 'https://images.unsplash.com/photo-1550537687-c91072c4792d?w=400' },
    { id: 2, img: 'https://images.unsplash.com/photo-1590208701125-300174e30730?w=400' },
    { id: 3, img: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=400' },
    { id: 4, img: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400' }
];

const instaThumbnails = [
    'https://images.unsplash.com/photo-1594465919760-441fe5908ab0?w=200',
    'https://images.unsplash.com/photo-1560707854-fb9a10eeaebb?w=200',
    'https://images.unsplash.com/photo-1562158074-a6697be47820?w=200'
];

let wizardState = { style: 1, size: 10 };

const init = () => {
    // 1. Render Instagram Mini Grid
    const instaContainer = document.getElementById('insta-feed');
    instaThumbnails.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        instaContainer.appendChild(img);
    });

    // 2. Render Gallery
    const galleryContainer = document.getElementById('main-gallery');
    works.forEach(w => {
        const div = document.createElement('div');
        div.className = 'work-item';
        div.innerHTML = `<img src="${w.img}" loading="lazy">`;
        galleryContainer.appendChild(div);
    });

    // 3. Init Wizard
    renderStep1();
};

const renderStep1 = () => {
    const content = document.getElementById('step-content');
    content.innerHTML = `
        <h3 class="wiz-step-title">Estilo de Tatuaje</h3>
        <div class="wiz-options">
            <button class="wiz-opt-btn" onclick="setStep1(1)">Fine Line / Minimalista</button>
            <button class="wiz-opt-btn" onclick="setStep1(2)">Realismo / Sombreado</button>
            <button class="wiz-opt-btn" onclick="setStep1(3)">Geometría / Blackwork</button>
        </div>
    `;
};

window.setStep1 = (val) => {
    wizardState.style = val;
    renderStep2();
};

const renderStep2 = () => {
    const content = document.getElementById('step-content');
    content.innerHTML = `
        <h3 class="wiz-step-title">Tamaño de la Pieza</h3>
        <div class="wiz-options">
            <button class="wiz-opt-btn" onclick="calculate(10)">Pequeño (10cm)</button>
            <button class="wiz-opt-btn" onclick="calculate(20)">Mediano (20cm)</button>
            <button class="wiz-opt-btn" onclick="calculate(30)">Grande (30cm+)</button>
        </div>
    `;
};

window.calculate = (size) => {
    const price = (50 + (size * 10)) * wizardState.style;
    const content = document.getElementById('step-content');
    content.innerHTML = `
        <div class="price-res">
            <span>Inversión Estimada:</span>
            <h2>$${Math.round(price)}</h2>
            <button class="wiz-opt-btn" style="margin-top:20px; background:var(--primary); color:#000;" onclick="location.reload()">Reiniciar</button>
        </div>
    `;
};

document.addEventListener('DOMContentLoaded', init);
