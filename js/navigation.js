// Navigation functionality
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Highlight current chapter in navigation
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.chapter-item');
    
    navItems.forEach(item => {
        if (item.getAttribute('href') && currentPath.includes(item.getAttribute('href'))) {
            item.style.borderLeftColor = 'var(--ch3-accent)';
            item.style.background = 'rgba(0, 0, 0, 0.05)';
            item.style.color = 'var(--text-dark)';
        }
    });

    // Mobile navigation toggle
    const createMobileToggle = () => {
        if (window.innerWidth <= 768) {
            let toggle = document.querySelector('.nav-toggle');
            if (!toggle) {
                toggle = document.createElement('button');
                toggle.classList.add('nav-toggle');
                toggle.innerHTML = '☰';
                toggle.style.cssText = `
                    position: fixed;
                    top: 20px;
                    left: 20px;
                    z-index: 1001;
                    background: white;
                    border: none;
                    font-size: 1.5rem;
                    padding: 10px 15px;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    cursor: pointer;
                `;
                document.body.appendChild(toggle);

                toggle.addEventListener('click', () => {
                    const nav = document.getElementById('chapterNav');
                    nav.classList.toggle('open');
                });
            }
        }
    };

    createMobileToggle();
    window.addEventListener('resize', createMobileToggle);
});
