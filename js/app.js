/**
 * 🖋️ MELANIE ART STUDIO | ENGINE v8.0 (WIZARD EDITION)
 */

let wizardData = {
    style: 1,
    zone: 1,
    size: 10
};

const initApp = () => {
    // --- GALERÍA ---
    const works = [
        { id: 1, tag: 'realismo', title: 'Mirada Noir', img: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=800' },
        { id: 2, tag: 'geometria', title: 'Fractal Sacro', img: 'https://images.unsplash.com/photo-1590208701125-300174e30730?w=800' },
        { id: 3, tag: 'fineline', title: 'Trazo Etéreo', img: 'https://images.unsplash.com/photo-1550537687-c91072c4792d?w=800' }
    ];

    const container = document.getElementById('main-gallery');
    if (container) {
        works.forEach(w => {
            const card = document.createElement('article');
            card.className = 'art-card';
            card.innerHTML = `<img src="${w.img}" alt="${w.title}"><div style="padding:15px; position:absolute; bottom:0; background:linear-gradient(transparent, #000); width:100%;"><small style="color:#c5a059;">${w.tag.toUpperCase()}</small><h4>${w.title}</h4></div>`;
            container.appendChild(card);
        });
    }

    console.log("Melanie Wizard Engine: Active.");
};

// --- NAVEGACIÓN DEL WIZARD ---
function nextStep(stepNum, key, value) {
    if (key) wizardData[key] = value;
    
    // Actualizar UI
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    
    const targetStep = stepNum === 'result' ? 'step-result' : `step-${stepNum}`;
    document.getElementById(targetStep).classList.add('active');
    
    // Actualizar Progreso
    const progress = (stepNum === 'result') ? 100 : (stepNum * 25);
    document.getElementById('progress-fill').style.width = `${progress}%`;
}

function prevStep(stepNum) {
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    document.getElementById(`step-${stepNum}`).classList.add('active');
    document.getElementById('progress-fill').style.width = `${stepNum * 25}%`;
}

function updateWizSlider(val) {
    wizardData.size = parseInt(val);
    document.getElementById('val-display').innerText = `${val} cm`;
}

function showFinalResult() {
    // LÓGICA DE CÁLCULO PRO (Tiempo e Inversión)
    const basePrice = 80;
    const factorSize = wizardData.size * 6;
    const totalInvestment = Math.round((basePrice + factorSize) * wizardData.style * wizardData.zone);
    
    // Estimación de tiempo (1h cada 5cm aprox, ajustado por complejidad)
    const estimatedHours = Math.ceil((wizardData.size / 5) * (wizardData.style * 0.8));

    document.getElementById('res-price').innerText = `$${totalInvestment}`;
    document.getElementById('res-time').innerText = `${estimatedHours}h - ${estimatedHours + 2}h`;
    
    nextStep('result');
}

function resetWizard() {
    wizardData = { style: 1, zone: 1, size: 10 };
    document.getElementById('wiz-slider').value = 10;
    document.getElementById('val-display').innerText = "10 cm";
    nextStep(1);
}

function openBooking() {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
}

initApp();
