
let lbImages = [];
let lbIndex = 0;
function openLightboxWithState(cardId, index) {
    const card = document.getElementById(cardId);
    lbImages = JSON.parse(card.getAttribute('data-images'));
    lbIndex = index;
    updateLightboxDisplay();
    document.getElementById('lightbox').style.display = "block";
}
function updateLightboxDisplay() {
    const img = document.getElementById('lightbox-img');
    img.src = lbImages[lbIndex].full;
    const arrows = document.querySelectorAll('.lb-nav-btn');
    arrows.forEach(a => a.style.display = lbImages.length > 1 ? 'block' : 'none');
}
function changeLightboxImage(dir) {
     lbIndex += dir;
     if (lbIndex >= lbImages.length) lbIndex = 0;
     if (lbIndex < 0) lbIndex = lbImages.length - 1;
     updateLightboxDisplay();
}
function closeLightbox() { document.getElementById('lightbox').style.display = "none"; }
document.getElementById('lightbox').onclick = function(e) { if (e.target === this) closeLightbox(); };
function openTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
    document.getElementById(tabName + '_content').classList.add('active');
    document.getElementById(tabName + '_button').classList.add('active');
}
document.addEventListener('DOMContentLoaded', () => {
    const firstTab = document.querySelector('.tab-button');
    if (firstTab) openTab(firstTab.id.replace('_button', ''));
});
