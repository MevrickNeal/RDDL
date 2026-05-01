if (localStorage.getItem('rddlAdmin') !== 'true') {
    window.location.href = 'admin.html';
}

function logout() {
    localStorage.removeItem('rddlAdmin');
    window.location.href = 'index.html';
}

function loadCMS() {
    const data = JSON.parse(localStorage.getItem('rddlData'));
    document.getElementById('cms-hero-title').value = data.heroTitle;
    document.getElementById('cms-hero-subtitle').value = data.heroSubtitle;
    document.getElementById('cms-about-desc').value = data.aboutDesc;
    document.getElementById('cms-about-img').value = data.aboutImg;
}

function saveData() {
    const data = {
        heroTitle: document.getElementById('cms-hero-title').value,
        heroSubtitle: document.getElementById('cms-hero-subtitle').value,
        aboutDesc: document.getElementById('cms-about-desc').value,
        aboutImg: document.getElementById('cms-about-img').value
    };
    localStorage.setItem('rddlData', JSON.stringify(data));
    alert('Changes saved!');
}

document.addEventListener('DOMContentLoaded', loadCMS);
