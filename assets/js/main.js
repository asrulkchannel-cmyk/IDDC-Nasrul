document.addEventListener('DOMContentLoaded', () => {
    console.log("IDDC Vanilla JS loaded");

    // 1. Mobile Navigation logic (bottom nav)
    const bottomNavItems = document.querySelectorAll('nav.fixed.bottom-0 > div');
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

    // 2. Global Link and Button Interceptors
    // Make all anchor tags and buttons route intuitively based on their text content
    const allLinksAndButtons = document.querySelectorAll('a[href="#"], button');
    
    allLinksAndButtons.forEach(el => {
        el.addEventListener('click', (e) => {
            // Prevent default behavior if it's a dead link
            if (el.tagName.toLowerCase() === 'a') {
                e.preventDefault();
            }

            const text = el.innerText.trim().toLowerCase();
            
            if (text.includes('admissions') || text.includes('begin journey') || text.includes('daftar') || text.includes('pmb')) {
                window.location.href = 'pmb.html';
            } 
            else if (text.includes('academic') || text.includes('akademik') || text.includes('profil') || text.includes('explore our methodology')) {
                window.location.href = 'profil.html';
            } 
            else if (text.includes('gallery') || text.includes('portofolio') || text.includes('karya')) {
                window.location.href = 'portofolio.html';
            }
            else if (text.includes('dakwah') || text.includes('kampus') || text.includes('kehidupan')) {
                window.location.href = 'kehidupan-kampus.html';
            }
            else if (text.includes('home') || text.includes('beranda') || text.includes('strategy')) {
                window.location.href = 'index.html';
            }
            else {
                // If it's a subscribe button or unknown, just alert for now
                if (text.includes('subscribe')) {
                    alert("Terima kasih telah berlangganan newsletter IDDC!");
                } else if (text.includes('menu')) {
                    // Mobile menu trigger (mock)
                    alert("Menu navigasi diklik!");
                }
            }
        });
    });

    // Make the header logo click route to home
    const headerTitle = document.querySelector('header span.text-xl');
    if (headerTitle) {
        headerTitle.style.cursor = 'pointer';
        headerTitle.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
});
