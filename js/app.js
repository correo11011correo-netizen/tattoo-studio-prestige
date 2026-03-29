/**
 * 🖋️ MELANIE ART STUDIO | ENGINE v10.0
 */

let styleVal = 1;

window.goStep = (step, val) => {
    if (val) styleVal = val;
    document.querySelectorAll('.wiz-step').forEach(s => s.classList.remove('active'));
    document.getElementById(`step-${step}`).classList.add('active');
};

window.finish = (size) => {
    const price = (80 + (size * 5)) * styleVal;
    document.getElementById('final-price').innerText = `$${Math.round(price)}`;
    document.querySelectorAll('.wiz-step').forEach(s => s.classList.remove('active'));
    document.getElementById('step-res').classList.add('active');
};

console.log("Melanie Native Shell v10.0: Stable.");
