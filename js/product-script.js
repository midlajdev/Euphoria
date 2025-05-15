document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.main-nav');
    const bars = document.querySelectorAll('.bar');
    const himg = hamburger.querySelector('img')
    // const sliderLeft = document.querySelector('.prev-btn');
    // const sliderRight = document.querySelector('.next-btn');

    

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        // Toggle navigation
        nav.classList.toggle('active');

        if(nav.classList.contains('active')){
            himg.src = '/Euphoria/assets/icons/cancel-icon.png'
        }
        else{
            himg.src = '/Euphoria/assets/icons/hamburger-icon.png'
        }

    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && nav.classList.contains('active')) {
            nav.classList.remove('active');
            himg.src = '/Euphoria/assets/icons/hamburger-icon.png'

        }
    });


    //sidebar-thubnails active function
    const sidebarThumbnails = document.querySelectorAll('.sidebar-thumbnails img');

    sidebarThumbnails.forEach(thumbnail =>{
        thumbnail.addEventListener('click', (e) => {
            sidebarThumbnails.forEach(thumbnail =>{
                thumbnail.classList.remove('active');
            })
            e.currentTarget.classList.add('active');
        })
    })
    
    //selected sizes
    const sizes = document.querySelectorAll('.sizes button');

    sizes.forEach(size =>{
        size.addEventListener('click', (e) =>{
            sizes.forEach(size =>{
                size.classList.remove('selected');
            })
            e.currentTarget.classList.add('selected');
        })
    })

    //color selection function
    const colors = document.querySelectorAll('.colors span');

    colors.forEach(color =>{
        color.addEventListener('click', (e) =>{
            colors.forEach(color =>{
                color.classList.remove('active')
            })

            e.currentTarget.classList.add('active');
            const background = window.getComputedStyle(color).backgroundColor;
            color.style.outlineColor = background;
        })
    })


    //wishlist toggle
    const wishlists = document.querySelectorAll('.wishlist-btn img');

    wishlists.forEach(wishlist =>{
        wishlist.addEventListener('click', (e) => {
            if(wishlist.src.includes('wishlist.svg')){
                wishlist.src = '/Euphoria/assets/images/wishlist-fill.svg';
            }
            else{
                wishlist.src = '/Euphoria/assets/images/wishlist.svg';
            }
        })
    })



    //footer categories-toggle function
	const toggle = document.querySelector('.categories-toggle');
	const expandableDiv = document.querySelector('.categories-expand');
	const arrowIcon = document.querySelector('.toggle-arrow-icon');

	toggle.addEventListener('click', (e) =>{
		expandableDiv.classList.toggle('active');
		arrowIcon.classList.toggle('rotate')
		
	})
});
