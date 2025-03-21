document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.main-nav');
    const bars = document.querySelectorAll('.bar');
    const himg = hamburger.querySelector('img')

    

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        // Toggle navigation
        nav.classList.toggle('active');

        if(nav.classList.contains('active')){
            himg.src = './assets/icons/cancel-icon.png'
        }
        else{
            himg.src = './assets/icons/hamburger-icon.png'
        }

    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && nav.classList.contains('active')) {
            nav.classList.remove('active');
            himg.src = './assets/icons/hamburger-icon.png'

        }
    });

});
