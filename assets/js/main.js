document.addEventListener('DOMContentLoaded', () => {
    console.log("IDDC Vanilla JS loaded");

    // Fix empty hrefs statically if there are any anchor tags going nowhere
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(a => {
        if (a.getAttribute('href') === '#') {
            a.addEventListener('click', (e) => {
                e.preventDefault();
                console.log("Navigation link clicked (unmapped)");
            });
        }
    });

    // Mobile Navigation logic (bottom nav)
    // The bottom nav consists of divs with icons and text
    const bottomNavItems = document.querySelectorAll('nav.fixed.bottom-0 > div');
    
    // Simple routing based on the label text
    bottomNavItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            const labelText = item.innerText.trim().toLowerCase();
            if (labelText.includes('home')) {
                window.location.href = 'index.html';
            } else if (labelText.includes('academic') || labelText.includes('profil')) {
                window.location.href = 'profil.html';
            } else if (labelText.includes('dakwah') || labelText.includes('kehidupan')) {
                window.location.href = 'kehidupan-kampus.html';
            } else if (labelText.includes('gallery') || labelText.includes('portofolio')) {
                window.location.href = 'portofolio.html';
            } else if (labelText.includes('pmb') || labelText.includes('dukungan')) {
                window.location.href = 'pmb.html';
            }
        });
    });
});
