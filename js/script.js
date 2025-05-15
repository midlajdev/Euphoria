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


	//spotlight slide
    const sliderLeft = document.querySelector('.prev-btn');
    const sliderRight = document.querySelector('.next-btn');
    const spotlight = document.getElementById('spotlight');
    const images = ['/Euphoria/assets/images/bg-1.jpg','/Euphoria/assets/images/bg-2.jpg','/Euphoria/assets/images/bg-3.jpg']
    let currentIndex = 0;
    const progress = document.querySelector('.slider-progress');


    function updateSlider() {
      
        // update progress bar
        const progressLeft = (currentIndex / (images.length - 1)) * 67;
        progress.style.left = `${progressLeft}%`;
      }


    sliderRight.addEventListener('click', (e) => {
        currentIndex = (currentIndex + 1) % images.length; 
        spotlight.style.backgroundImage = `url(${images[currentIndex]})`
        updateSlider()

    })

    sliderLeft.addEventListener('click', (e) => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; 
        spotlight.style.backgroundImage = `url(${images[currentIndex]})`
        updateSlider()
    })


	//wishlist toggle function
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



//new arrivals slider
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  slidesPerView:4,
  centeredSlides: false,

  breakpoints:{
    0:{
      slidesPerView:2,
      spaceBetween:10,
    },
    640:{
      slidesPerView:3,
      spaceBetween:20,
    },
    1024:{
      slidesPerView:4,
      spaceBetween: 30
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});



const swiper2 = new Swiper('.feedback-swiper-container', {
  // Optional parameters
  loop: true,
  slidesPerView:2,
  centeredSlides: false,
  grabCursor: true,

  breakpoints:{
    0:{
      slidesPerView:1,
      spaceBetween:10,
    },
    640:{
      slidesPerView:2,
      spaceBetween:20,
    },
    1024:{
      slidesPerView:3,
      spaceBetween: 30
    },
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true,
  },

});
