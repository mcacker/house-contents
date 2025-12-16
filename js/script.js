
function openLightbox(src) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = src;
    lb.style.display = "block";
}
function closeLightbox() {
    document.getElementById('lightbox').style.display = "none";
}
window.onclick = function(event) {
    const lb = document.getElementById('lightbox');
    if (event.target == lb) {
        lb.style.display = "none";
    }
}

function openTab(tabName) {
    // Hide all tab contents
    const content = document.getElementsByClassName('tab-content');
    for (let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
    }

    // Deactivate all buttons
    const buttons = document.getElementsByClassName('tab-button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }

    // Show the current tab content and activate the button
    document.getElementById(tabName + '_content').classList.add('active');
    document.getElementById(tabName + '_button').classList.add('active');
}

// Open the first tab on load
document.addEventListener('DOMContentLoaded', function() {
    const firstTab = document.querySelector('.tab-button');
    if (firstTab) {
        openTab(firstTab.id.replace('_button', ''));
    }
});
