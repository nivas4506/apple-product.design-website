document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.product-container');

    // --- Interactive 3D Product Tilt (Targeting multiple products) ---
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 40;

        containers.forEach(container => {
            const tiltWrapper = container.querySelector('.tilt-wrapper');
            if (tiltWrapper) {
                tiltWrapper.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            }
        });
    });

    // Reset tilt on mouseleave
    containers.forEach(container => {
        container.addEventListener('mouseleave', () => {
            const tiltWrapper = container.querySelector('.tilt-wrapper');
            if (tiltWrapper) {
                tiltWrapper.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                tiltWrapper.style.transform = 'rotateY(0deg) rotateX(0deg)';
                setTimeout(() => {
                    tiltWrapper.style.transition = 'transform 0.3s ease-out';
                }, 600);
            }
        });
    });

    // --- Visual Background Parallax (Tailwind Waves) ---
    const waveElements = document.querySelectorAll('.animate-liquid-slow');
    document.addEventListener('mousemove', (e) => {
        const mouseX = (e.clientX / window.innerWidth - 0.5) * 60;
        const mouseY = (e.clientY / window.innerHeight - 0.5) * 60;

        waveElements.forEach((wave, idx) => {
            const factor = (idx + 1) * 0.15;
            wave.style.transform = `translate(${mouseX * factor}px, ${mouseY * factor}px)`;
        });
    });

    // --- Popup Logic ---
    const popup = document.getElementById('productPopup');
    const popupInner = document.getElementById('popupInner');
    const closeBtn = document.getElementById('closePopup');
    const buyButtons = document.querySelectorAll('a[href="#"]'); // Selecting all "Buy" buttons

    const showPopup = (title, desc, imgSrc) => {
        document.getElementById('popupTitle').innerText = title;
        document.getElementById('popupDesc').innerText = desc;
        document.getElementById('popupImg').src = imgSrc;

        popup.classList.remove('opacity-0', 'pointer-events-none');
        setTimeout(() => {
            popupInner.classList.remove('scale-90');
            popupInner.classList.add('scale-100');
        }, 10);
    };

    const hidePopup = () => {
        popupInner.classList.remove('scale-100');
        popupInner.classList.add('scale-90');
        setTimeout(() => {
            popup.classList.add('opacity-0', 'pointer-events-none');
        }, 300);
    };

    const sectionTriggers = document.querySelectorAll('.section-popup-trigger');

    buyButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (btn.innerText.includes('Buy')) {
                e.preventDefault();
                const section = btn.closest('section');
                const title = section.querySelector('h1')?.innerText || "AirPods";
                const desc = section.querySelector('p')?.innerText || "";
                const img = section.querySelector('img')?.src || "";
                showPopup(title, desc, img);
            }
        });
    });

    sectionTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const title = trigger.getAttribute('data-title');
            const desc = trigger.getAttribute('data-desc');
            const img = trigger.getAttribute('data-img');
            showPopup(title, desc, img);
        });
    });

    closeBtn.addEventListener('click', hidePopup);
    popup.addEventListener('click', (e) => { if (e.target === popup) hidePopup(); });

    // --- Scroll Reveal Logic ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-up');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-fade-up').forEach(el => observer.observe(el));
});
