AOS.init();


//background image slider

const sliderImage = ["hero-banner2.jpg", "hero-banner3.jpg", "hero-banner4.jpg", "hero-banner5.jpg"];

let slider = document.querySelector('.background-image');
let sliderGridItems = [...document.querySelectorAll('.grid-item')];

let currentImage = 0;

setInterval(() => {
    changeSliderImage();
}, 5000)

const changeSliderImage = () => {
    sliderGridItems.map((gridItem, index) => {
        setTimeout(() => {
            gridItem.classList.remove('hide');

            setTimeout(() => {

                if(index == sliderGridItems.length -1){
                    if(currentImage > sliderImage.length -1){
                        currentImage = 0;
                    }
                    else{
                        currentImage++;
                    }

                    slider.src = `img/${sliderImage[currentImage]}`;

                    sliderGridItems.map((item, i)=> {
                        setTimeout(() => {
                            item.classList.add('hide');
                        }, i*100)
                    })
                }

            }, 100)

        }, index*100)
    })
}

//navbar 

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () =>{
    if(scrollY >= 188){
        navbar.classList.add('bg');
    }
    else{
        navbar.classList.remove('bg');
    }
})

/*Trending Auction Cards*/
$(document).ready(function() {
    // Swiper: Slider
        new Swiper('.swiper-container', {
            loop: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 3,
            paginationClickable: true,
            spaceBetween: 20,
            breakpoints: {
                1920: {
                    slidesPerView: 3.5,
                    spaceBetween: 30
                },
                1028: {
                    slidesPerView: 2.5,
                    spaceBetween: 30
                },
                480: {
                    slidesPerView: 1.5,
                    spaceBetween: 10
                }
            }
        });
    });
    